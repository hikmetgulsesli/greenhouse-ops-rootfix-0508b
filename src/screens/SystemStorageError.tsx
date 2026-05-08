// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: System Storage Error
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface SystemStorageErrorProps {}

export function SystemStorageError(props: SystemStorageErrorProps) {
  return (
    <>
      <div className="max-w-md w-full bg-surface-container border border-error-container rounded-xl p-xl shadow-[0_4px_24px_rgba(147,0,10,0.15)] flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-error-container/20 flex items-center justify-center mb-lg">
      <span className="material-symbols-outlined text-[32px] text-error" data-icon="error" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      </div>
      <h1 className="font-display text-display text-on-surface mb-sm">Storage Persistence Failure</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
                  Unable to write telemetry data to local storage buffer. Connection to primary persistence layer timed out after 3000ms. Critical system health metrics may not be saved locally.
              </p>
      <div className="w-full bg-surface-dim rounded-lg p-md border border-outline-variant mb-xl text-left">
      <h2 className="font-label-caps text-label-caps text-outline mb-sm uppercase tracking-wider">Error Details</h2>
      <div className="font-mono-data text-mono-data text-error font-medium break-all">
                      ERR_IDX_DB_QUOTA_EXCEEDED<br />
                      Module: telemetry_sync_v2.js<br />
                      Timestamp: 2023-10-27T14:32:45Z
                  </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-md justify-center">
      <button className="bg-primary-container text-on-primary-container font-body-sm text-body-sm font-semibold px-lg py-sm rounded-DEFAULT hover:opacity-90 transition-opacity flex items-center justify-center gap-sm h-[44px]">
      <span className="material-symbols-outlined text-[18px]" data-icon="refresh">refresh</span>
                      Retry Connection
                  </button>
      <button className="border-2 border-outline-variant text-on-surface hover:bg-surface-container-highest font-body-sm text-body-sm font-medium px-lg py-sm rounded-DEFAULT transition-colors flex items-center justify-center gap-sm h-[44px]">
      <span className="material-symbols-outlined text-[18px]" data-icon="delete_forever">delete_forever</span>
                      Reset Local Storage
                  </button>
      </div>
      </div>
    </>
  );
}
