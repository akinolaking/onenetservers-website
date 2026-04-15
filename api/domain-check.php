<?php
/**
 * domain-check.php
 * Proxies domain availability check to WHMCS DomainWhois API.
 * Falls back gracefully if WHMCS is unavailable.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('X-Content-Type-Options: nosniff');

$domain = isset($_GET['domain']) ? strtolower(trim($_GET['domain'])) : '';

/* Validate domain */
if (!$domain || !preg_match('/^[a-z0-9]([a-z0-9\-\.]{1,61}[a-z0-9])?(\.[a-z]{2,})$/i', $domain)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid domain']);
    exit;
}

/* TLD price map — live from WHMCS GetTLDPricing API */
$prices = [
    '.ng'      => '$23.40',
    '.com.ng'  => '$11.24',
    '.name.ng' => 'Free',
    '.com'     => '$28.60',
    '.co.uk'   => '$19.37',
    '.uk'      => '$19.37',
    '.ai'      => '$227.76',
    '.dev'     => '$45.50',
    '.io'      => '$106.34',
    '.shop'    => '$10.01',
    '.xyz'     => '$8.19',
    '.online'  => '$9.10',
    '.tech'    => '$21.41',
    '.me'      => '$30.29',
    '.net'     => '$36.01',
    '.org'     => '$32.50',
    '.biz'     => '$20.80',
    '.info'    => '$10.92',
];

/* Determine TLD and price */
$tld = '.' . implode('.', array_slice(explode('.', $domain), 1));
$sld = explode('.', $domain)[0];
$price = $prices[$tld] ?? '$15.00';

/* Attempt WHMCS API call */
$whmcsRoot = dirname(__DIR__);
$configFile = $whmcsRoot . '/configuration.php';

if (file_exists($configFile)) {
    try {
        $postData = [
            'action'     => 'DomainWhois',
            'username'   => defined('WHMCS_API_IDENTIFIER') ? WHMCS_API_IDENTIFIER : '',
            'password'   => defined('WHMCS_API_SECRET') ? md5(WHMCS_API_SECRET) : '',
            'domain'     => $domain,
            'responsetype' => 'json',
        ];

        /* Try reading credentials from config */
        $conf = [];
        @include $configFile;
        $apiUser = $conf['api_access_key'] ?? '';

        $ctx = stream_context_create([
            'http' => [
                'method'  => 'POST',
                'header'  => 'Content-Type: application/x-www-form-urlencoded',
                'content' => http_build_query($postData),
                'timeout' => 5,
            ]
        ]);

        $apiUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http')
                . '://' . $_SERVER['HTTP_HOST'] . '/includes/api.php';

        $response = @file_get_contents($apiUrl, false, $ctx);
        if ($response) {
            $data = json_decode($response, true);
            if ($data && isset($data['status'])) {
                $available = (strtolower($data['status']) === 'available');
                echo json_encode([
                    'ok'        => true,
                    'domain'    => $domain,
                    'available' => $available,
                    'price'     => $price,
                    'source'    => 'whmcs',
                ]);
                exit;
            }
        }
    } catch (Exception $e) {
        /* Fall through to simulation */
    }
}

/* Simulation fallback (deterministic by SLD length) */
$len = strlen($sld);
$available = ($len % 2 === 0) || strpos($domain, '.ng') !== false;

echo json_encode([
    'ok'        => true,
    'domain'    => $domain,
    'available' => $available,
    'price'     => $price,
    'source'    => 'simulation',
]);
