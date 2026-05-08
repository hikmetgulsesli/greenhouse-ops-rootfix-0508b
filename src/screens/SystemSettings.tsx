// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: System Settings
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface SystemSettingsProps {}

export function SystemSettings(props: SystemSettingsProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container dark:bg-surface-container docked h-screen left-0 w-64 z-50 flex flex-col py-lg px-md space-y-sm shrink-0 border-r border-surface-container-low dark:border-surface-container-low hidden md:flex">
      <div className="mb-lg px-sm">
      <h1 className="font-display text-display font-bold text-primary">Sector 04-B</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Primary Greenhouse</p>
      </div>
      <button className="bg-primary-container text-on-primary-container w-full py-md px-md rounded-xl font-bold flex items-center justify-center gap-sm hover:opacity-90 transition-opacity mb-lg">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  New Log Entry
              </button>
      <div className="flex-1 overflow-y-auto space-y-sm">
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-body-sm text-body-sm">System Health</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span className="font-body-sm text-body-sm">Activity Logs</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-body-sm text-body-sm">Operational Config</span>
      </a>
      </div>
      <div className="mt-auto space-y-sm pt-md border-t border-surface-container-low">
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl bg-secondary-container text-on-secondary-container font-bold transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-surface-dim dark:bg-surface-dim docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flex justify-between items-center w-full px-margin h-16 shrink-0">
      <div className="flex items-center gap-md">
      <span className="font-display text-heading-md font-bold text-on-surface dark:text-on-surface">FloraControl Console</span>
      </div>
      <div className="flex items-center gap-lg">
      <div className="flex items-center gap-sm">
      <button className="p-sm rounded-full text-primary dark:text-primary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-sm rounded-full text-primary dark:text-primary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      </button>
      <button className="p-sm rounded-full text-primary dark:text-primary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="apps">apps</span>
      </button>
      </div>
      <div className="h-8 w-px bg-outline-variant"></div>
      <button className="font-body-sm text-body-sm text-error flex items-center gap-xs px-md py-sm border border-error-container rounded-lg hover:bg-error-container hover:text-on-error-container transition-colors">
      <span className="material-symbols-outlined text-[18px]">warning</span>
                          Emergency Stop
                      </button>
      <img alt="Operator Profile Avatar" className="w-10 h-10 rounded-full border border-outline-variant cursor-pointer" data-alt="A close-up, professional portrait of a greenhouse operator in high-contrast, moody lighting. The subject has a serious expression, shot against a dark industrial background. The aesthetic matches a high-stakes, data-intensive corporate environment with subtle blue and gray tones. 8k resolution, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_d1hrBqZs3b-9-dheG7J0c8qcc7Vx06Z9G8TNtoptooCX1x9DkNwfl1ZELSuxG17JIh6-lqIFCgntTuLm_RZ7bV4IpFS1KjsBpdqwHBtOwVNCwmOUphl46CA6yeBklEriftschSMiCFrvbCuTFxl5tiSDRGgi62qPYADBnYyMVc01qNJvbpjObKzodqV1W3NfMu5MhPr55shdRBTAJBGqC1BQ_LY5Uc8Q49mEzWbMvOrjGSmJlAo56we9JJz0QywaUQQyx3ZzM5y" />
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-margin">
      <div className="max-w-4xl mx-auto space-y-xl pb-xl">
      <div className="mb-xl">
      <h2 className="font-display text-display text-on-surface">Settings</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Manage global application preferences and operational configurations.</p>
      </div>
      {/* Appearance Section */}
      <section className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Appearance</h3>
      </div>
      <div className="p-lg space-y-lg">
      <div className="flex items-center justify-between">
      <div>
      <h4 className="font-heading-md text-heading-md text-on-surface">Dark Mode</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Enforce dark theme to reduce eye strain during long shifts.</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Data & Storage Section */}
      <section className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Data &amp; Storage</h3>
      </div>
      <div className="p-lg space-y-lg">
      <div className="flex items-center justify-between border-b border-surface-container pb-lg">
      <div className="w-2/3">
      <h4 className="font-heading-md text-heading-md text-on-surface">Storage Sync Frequency</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Determine how often local sensor data is synced to the central database.</p>
      </div>
      <div className="w-1/3">
      <select className="w-full bg-surface-container-low border border-outline-variant text-on-surface text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
      <option>Real-time (Continuous)</option>
      <option>Every 5 minutes</option>
      <option selected={true}>Every 15 minutes</option>
      <option>Hourly</option>
      </select>
      </div>
      </div>
      <div className="flex items-center justify-between pt-sm">
      <div>
      <h4 className="font-heading-md text-heading-md text-on-surface">Data Export</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Download all historical operational logs and sensor metrics.</p>
      </div>
      <button className="px-md py-sm border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-lg hover:bg-surface-container transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined text-[18px]">download</span>
                                      Export CSV
                                  </button>
      </div>
      </div>
      </section>
      {/* Developer Section */}
      <section className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Developer &amp; API</h3>
      </div>
      <div className="p-lg space-y-lg">
      <div>
      <div className="flex justify-between items-end mb-sm">
      <label className="font-heading-md text-heading-md text-on-surface">Production API Key</label>
      <button className="text-primary hover:text-primary-fixed text-sm font-medium">Regenerate Key</button>
      </div>
      <div className="flex items-center gap-sm">
      <input className="flex-1 bg-surface-container-lowest border border-outline-variant text-on-surface text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 font-mono-data text-mono-data" readOnly={true} type="password" value="sk_prod_8f92j3n8v8392m10cn38fh" />
      <button className="p-sm bg-surface-container border border-outline-variant rounded-lg hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-[20px] text-on-surface">content_copy</span>
      </button>
      </div>
      <p className="font-body-xs text-body-xs text-outline mt-sm">Used for external webhook integrations. Keep this secure.</p>
      </div>
      </div>
      </section>
      {/* Actions */}
      <div className="flex justify-end gap-md pt-lg">
      <button className="px-lg py-sm border border-outline-variant text-on-surface font-body-sm text-body-sm rounded-lg hover:bg-surface-container transition-colors">
                              Discard Changes
                          </button>
      <button className="px-lg py-sm bg-primary-container text-on-primary-container font-body-sm text-body-sm rounded-lg hover:opacity-90 transition-opacity">
                              Save Preferences
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
