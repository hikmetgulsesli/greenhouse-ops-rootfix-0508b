// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Maintenance Activity Log
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface MaintenanceActivityLogProps {}

export function MaintenanceActivityLog(props: MaintenanceActivityLogProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-screen left-0 w-64 z-50 bg-surface-container py-lg px-md space-y-sm bg-surface-container-low border-r border-outline-variant">
      <div className="mb-lg px-sm">
      <h1 className="font-display text-display text-primary">FloraControl</h1>
      <p className="font-body-xs text-body-xs text-on-surface-variant mt-xs">Sector 04-B Primary Greenhouse</p>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-heading-md text-heading-md py-sm rounded-xl mb-lg hover:bg-primary transition-colors flex justify-center items-center gap-sm">
      <span className="material-symbols-outlined text-[20px]">add</span>
                  New Log Entry
              </button>
      <div className="flex-1 space-y-unit">
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-body-sm text-body-sm">System Health</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm bg-secondary-container text-on-secondary-container rounded-xl font-bold transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">history</span>
      <span className="font-body-sm text-body-sm">Activity Logs</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">tune</span>
      <span className="font-body-sm text-body-sm">Operational Config</span>
      </a>
      </div>
      <div className="mt-auto pt-md space-y-unit border-t border-outline-variant">
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center gap-md px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen bg-background">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-margin h-16 bg-surface-dim border-b border-outline-variant z-40 sticky top-0">
      <div className="flex items-center gap-md w-1/3">
      <div className="relative w-full max-w-md hidden md:block">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
      <input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-xs pl-xl pr-sm font-body-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant" placeholder="Search logs..." type="text" />
      </div>
      </div>
      <div className="md:hidden">
      <h1 className="font-display text-heading-md font-bold text-on-surface">FloraControl Console</h1>
      </div>
      <div className="flex items-center gap-sm justify-end w-1/3">
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 hidden md:block">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80 hidden md:block">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <button className="ml-sm px-sm py-xs border border-error text-error font-body-sm text-body-sm rounded-lg hover:bg-error/10 transition-colors hidden sm:block">
                          Emergency Stop
                      </button>
      <div className="ml-sm w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
      <img alt="Operator Profile Avatar" className="w-full h-full object-cover" data-alt="A close up portrait of a corporate operator wearing a headset in a low light command center. Dark moody tech vibe. Professional minimalist aesthetic. Cool blue lighting. Clean composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4aekSPUfrS0b-As09q4aasIP1lRP0LWnYpoeZysiGMi3jsOVorFOajePKwmnyy2SQ6AFC3RbhWClenTrwKqXcFYC44TMh9PECqTBuiVDtfVxQ46mmRNNA0dTzMyLsu_E3eW47Yp0IRxmtil7RRbZedWXPL3kkWknJhe-R8hEja801hv3DbOFase3PF8SZebZPI3XHXTkoaxEYTjBfW_AS_B4Muq3Frxm_0zotfrcfZ71bGrduGUTT7BseUevdZsCEZHzvtx6Im1u" />
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 p-margin overflow-auto">
      <div className="max-w-7xl mx-auto space-y-lg">
      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md">
      <div>
      <h2 className="font-display text-display text-on-surface">Maintenance Log</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Chronological history of all sector activity</p>
      </div>
      <div className="flex items-center gap-sm">
      <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg p-xs">
      <span className="material-symbols-outlined text-on-surface-variant text-[18px] ml-xs">calendar_today</span>
      <input className="bg-transparent border-none focus:ring-0 font-body-sm text-body-sm text-on-surface w-32 px-sm py-0 outline-none" readOnly={true} type="text" value="Oct 12 - Oct 19" />
      </div>
      <button className="flex items-center gap-xs px-sm py-xs bg-surface-container border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                  Filter
                              </button>
      </div>
      </div>
      {/* Log Table */}
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container border-b border-outline-variant">
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase">Timestamp</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase">Equipment</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase">Action Taken</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase">Operator</th>
      <th className="py-sm px-md font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
      </tr>
      </thead>
      <tbody className="font-mono-data text-mono-data">
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-highest/50 transition-colors">
      <td className="py-md px-md text-on-surface-variant">2023-10-19 14:32:11</td>
      <td className="py-md px-md text-on-surface">Irrigation Valve A4</td>
      <td className="py-md px-md text-on-surface-variant">Manual override closed; pressure test initiated.</td>
      <td className="py-md px-md text-on-surface-variant">J. Doe</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-surface-container-low border border-outline-variant text-on-surface">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                  Testing
                                              </span>
      </td>
      </tr>
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-highest/50 transition-colors">
      <td className="py-md px-md text-on-surface-variant">2023-10-19 11:15:00</td>
      <td className="py-md px-md text-on-surface">HVAC Unit 02</td>
      <td className="py-md px-md text-on-surface-variant">Replaced air filter; cleared condensation line.</td>
      <td className="py-md px-md text-on-surface-variant">S. Smith</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-surface-container-low border border-outline-variant text-on-surface">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                                  Complete
                                              </span>
      </td>
      </tr>
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-highest/50 transition-colors bg-error-container/10">
      <td className="py-md px-md text-on-surface-variant">2023-10-18 22:45:33</td>
      <td className="py-md px-md text-on-surface">Sensor Array B-12</td>
      <td className="py-md px-md text-on-surface-variant">Automated calibration failed. Requires physical inspection.</td>
      <td className="py-md px-md text-on-surface-variant">System</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-error-container border border-error/30 text-on-error-container">
      <span className="w-2 h-2 rounded-full bg-error"></span>
                                                  Failed
                                              </span>
      </td>
      </tr>
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-highest/50 transition-colors">
      <td className="py-md px-md text-on-surface-variant">2023-10-18 09:00:00</td>
      <td className="py-md px-md text-on-surface">Nutrient Mixer Tank</td>
      <td className="py-md px-md text-on-surface-variant">Scheduled weekly flush and recalibration.</td>
      <td className="py-md px-md text-on-surface-variant">A. Wong</td>
      <td className="py-md px-md">
      <span className="inline-flex items-center gap-xs px-sm py-xs rounded bg-surface-container-low border border-outline-variant text-on-surface">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                                  Complete
                                              </span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination */}
      <div className="bg-surface-container p-sm border-t border-outline-variant flex items-center justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-sm">Showing 1 to 4 of 128 entries</span>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant hover:text-on-surface disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="p-xs text-on-surface hover:bg-surface-container-highest rounded">
      <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
