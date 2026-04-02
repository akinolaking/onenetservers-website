"use client";

import Link from "next/link";
import { useState } from "react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <aside className="announcement-bar" aria-label="Announcement">
      <div className="shell announcement-bar__inner">
        <p>30-day money-back guarantee on all plans · No credit card required · Free migration included</p>
        <div className="announcement-bar__actions">
          <Link href="/cart.php?a=add&pid=261&billingcycle=annually">Get started free</Link>
          <button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss announcement">
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}
