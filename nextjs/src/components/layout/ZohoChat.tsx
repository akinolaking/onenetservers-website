"use client";

import { useEffect } from "react";

// Replace ZOHO_WIDGET_CODE with your widget code from:
// Zoho SalesIQ → Settings → Brands → Installation
const ZOHO_WIDGET_CODE = "REPLACE_WITH_YOUR_WIDGET_CODE";

export function ZohoChat() {
  useEffect(() => {
    // Don't inject if placeholder hasn't been replaced
    if (ZOHO_WIDGET_CODE === "REPLACE_WITH_YOUR_WIDGET_CODE") return;

    (window as any).$zoho = (window as any).$zoho || {};
    (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || {
      widgetcode: ZOHO_WIDGET_CODE,
      values: {},
      ready: function () {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = "https://salesiq.zoho.com/widget";
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("zsiqscript");
      if (existing) existing.remove();
    };
  }, []);

  return null;
}
