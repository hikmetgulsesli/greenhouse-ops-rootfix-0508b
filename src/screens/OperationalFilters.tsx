// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Operational Filters
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface OperationalFiltersProps {}

export function OperationalFilters(props: OperationalFiltersProps) {
  return (
    <>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col h-screen left-0 w-64 z-50 bg-surface-container dark:bg-surface-container py-lg px-md space-y-sm shrink-0 border-r border-outline-variant/30">
      <div className="flex items-center space-x-3 mb-xl px-2">
      <img alt="Greenhouse Sector Logo" className="w-10 h-10 rounded-full object-cover" data-alt="A stylized, abstract logo icon representing a greenhouse sector. The logo is minimalist, featuring crisp geometric lines and a subtle gradient of deep emerald greens and bright neon teal accents against a dark slate background, designed for a high-tech agricultural console interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmObCV5SAVH4ZWvgGAFnejOTDLH4bQJh4p0APu4Hhss_BAkDwqYIVJyJ2ZQfWNaNWDG1l7dbzJInNOyPomqOOLx1ONXErQVhlTkANti-I6My75qsqlFp7QaF3mAz3CnjAoCm6CaMW345aDFWxbBytvZ5ju-rG4WtSGB9e2_z0g3jQVr2aOQKu4JTRCFUk3iocA5lv-Hh93ctM_QfUwvr86taRaZDKy7RMul8aC10rMQTXf630wa09aeE5BpAGsRo66Ydi9s8Q_ktRk" />
      <div>
      <h2 className="font-display text-heading-md font-bold text-primary">Sector 04-B</h2>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Primary Greenhouse</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container rounded-DEFAULT py-2 px-4 font-body-sm text-body-sm font-semibold mb-lg flex items-center justify-center space-x-2 hover:bg-primary-container/90 transition-colors">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      <span>New Log Entry</span>
      </button>
      <div className="flex-1 space-y-2">
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
      <span className="font-body-sm text-body-sm">System Health</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-xl font-bold transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="history" style={{fontVariationSettings: "'FILL' 1"}}>history</span>
      <span className="font-body-sm text-body-sm">Activity Logs</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-body-sm text-body-sm">Operational Config</span>
      </a>
      </div>
      <div className="mt-auto space-y-2 pt-4 border-t border-outline-variant/30">
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-margin h-16 bg-surface-dim dark:bg-surface-dim border-b border-outline-variant dark:border-outline-variant z-40 shrink-0">
      <div className="flex items-center space-x-4">
      {/* Mobile Menu Button (Hidden on Web) */}
      <button className="md:hidden text-on-surface-variant hover:text-on-surface">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <h1 className="font-display text-heading-md font-bold text-on-surface dark:text-on-surface hidden md:block">FloraControl Console</h1>
      </div>
      {/* Search Bar on Left (relative to right cluster) */}
      <div className="flex-1 max-w-md mx-4">
      <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
      <input className="w-full bg-surface-container-highest border-outline-variant rounded-DEFAULT py-1.5 pl-10 pr-4 text-on-surface font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search logs, alerts..." type="text" />
      </div>
      </div>
      <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 text-on-surface-variant">
      <button className="p-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-full transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-full transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      </button>
      <button className="p-2 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-full transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="apps">apps</span>
      </button>
      </div>
      <button className="hidden md:flex items-center space-x-1 border border-error text-error px-3 py-1.5 rounded-DEFAULT font-body-sm text-body-sm hover:bg-error/10 transition-colors">
      <span className="material-symbols-outlined text-sm">warning</span>
      <span>Emergency Stop</span>
      </button>
      <img alt="Operator Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover cursor-pointer" data-alt="A close-up headshot of a professional operations technician wearing a dark uniform. The lighting is slightly dramatic and moody, reflecting a high-tech control room environment with subtle blue monitor glows. The overall tone is serious, focused, and integrated into a dark-themed UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPr0Fv7Ya6-lrTFcnbQtj8mN-OzV_9arqHLBZhDyjeBEL9wrQK5KsSHo_M4jjosuXFpG68XnUBnNXRgsUtesltdnmeeamkcBSMK99ib6sL8RBLvxKTDzW4yjuFGlQ6b_4dI82B1K7UkrSCJW-z3EUqh9VpxRo8bM9Ift6b5D-sKXJyNw-aPfXXNQEmHsW9ASqdsDkefmt6GdnAYRy7e5NEo0XoSe5EKqNjzMJI_11e-Qu1FtIUsxCU-wCMPldssLUpdP8MbP8HWK8c" />
      </div>
      </header>
      {/* Page Canvas */}
      <main className="flex-1 overflow-auto p-margin bg-background">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg space-y-4 md:space-y-0">
      <div>
      <h2 className="font-display text-display text-on-surface mb-1">Activity Logs</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Filtered Overview: 142 records found</p>
      </div>
      <div className="flex items-center space-x-3">
      <button className="border border-outline-variant text-on-surface bg-transparent px-4 py-2 rounded-DEFAULT font-body-sm text-body-sm flex items-center space-x-2 hover:bg-surface-container-highest transition-colors">
      <span className="material-symbols-outlined text-sm">file_download</span>
      <span>Export</span>
      </button>
      <button className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-DEFAULT font-body-sm text-body-sm flex items-center space-x-2 hover:bg-surface-variant transition-colors border border-outline-variant">
      <span className="material-symbols-outlined text-sm">checklist</span>
      <span>Bulk Action</span>
      </button>
      </div>
      </div>
      {/* Advanced Filter Bar */}
      <div className="bg-surface border border-outline-variant/50 rounded-lg p-md mb-lg flex flex-wrap gap-4 items-center">
      <div className="flex items-center space-x-2 text-on-surface-variant font-label-caps text-label-caps mr-2">
      <span className="material-symbols-outlined text-sm">filter_list</span>
      <span>FILTERS</span>
      </div>
      {/* Filter Pill: Status */}
      <div className="relative group">
      <button className="flex items-center space-x-2 bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant/50 text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors">
      <span>Status: <span className="text-primary">Warning, Error</span></span>
      <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
      </button>
      </div>
      {/* Filter Pill: Technician */}
      <div className="relative group">
      <button className="flex items-center space-x-2 bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant/50 text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors">
      <span>Technician: <span className="text-on-surface-variant">All</span></span>
      <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
      </button>
      </div>
      {/* Filter Pill: Sector */}
      <div className="relative group">
      <button className="flex items-center space-x-2 bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant/50 text-on-surface font-body-sm text-body-sm hover:border-primary transition-colors">
      <span>Sector: <span className="text-primary">04-B</span></span>
      <span className="material-symbols-outlined text-sm">arrow_drop_down</span>
      </button>
      </div>
      <div className="flex-1"></div>
      <button className="text-primary hover:text-primary-fixed font-body-sm text-body-sm flex items-center space-x-1">
      <span className="material-symbols-outlined text-sm">close</span>
      <span>Clear All</span>
      </button>
      </div>
      {/* Condensed Data Table */}
      <div className="bg-surface border border-outline-variant/50 rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant/50 font-label-caps text-label-caps text-on-surface-variant">
      <th className="p-3 w-12 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </th>
      <th className="p-3">TIMESTAMP</th>
      <th className="p-3">EVENT ID</th>
      <th className="p-3">SECTOR</th>
      <th className="p-3">STATUS</th>
      <th className="p-3">DESCRIPTION</th>
      <th className="p-3">TECHNICIAN</th>
      <th className="p-3 w-12 text-center"></th>
      </tr>
      </thead>
      <tbody className="font-mono-data text-mono-data text-on-surface divide-y divide-outline-variant/30">
      <tr className="hover:bg-surface-container-highest/50 transition-colors">
      <td className="p-3 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="p-3 text-on-surface-variant">2023-10-27 14:32:01</td>
      <td className="p-3">LOG-8821</td>
      <td className="p-3">04-B</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-error-container text-on-error-container border border-error/20">
                                          ERROR
                                      </span>
      </td>
      <td className="p-3 truncate max-w-xs font-body-sm text-body-sm">Pump failure in primary irrigation line. Auto-shutoff engaged.</td>
      <td className="p-3 font-body-sm text-body-sm">J. Smith</td>
      <td className="p-3 text-center">
      <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-highest/50 transition-colors">
      <td className="p-3 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="p-3 text-on-surface-variant">2023-10-27 13:15:44</td>
      <td className="p-3">LOG-8820</td>
      <td className="p-3">04-B</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-container text-on-tertiary-container border border-tertiary/20">
                                          WARNING
                                      </span>
      </td>
      <td className="p-3 truncate max-w-xs font-body-sm text-body-sm">Humidity anomaly detected (Zone 3). Approaching upper threshold.</td>
      <td className="p-3 font-body-sm text-body-sm">System</td>
      <td className="p-3 text-center">
      <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-highest/50 transition-colors">
      <td className="p-3 text-center">
      <input className="rounded-sm bg-surface border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface" type="checkbox" />
      </td>
      <td className="p-3 text-on-surface-variant">2023-10-27 11:05:12</td>
      <td className="p-3">LOG-8819</td>
      <td className="p-3">04-B</td>
      <td className="p-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-error-container text-on-error-container border border-error/20">
                                          ERROR
                                      </span>
      </td>
      <td className="p-3 truncate max-w-xs font-body-sm text-body-sm">CO2 sensor calibration failed. Manual intervention required.</td>
      <td className="p-3 font-body-sm text-body-sm">A. Chen</td>
      <td className="p-3 text-center">
      <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
      </td>
      </tr>
      </tbody>
      </table>
      <div className="p-3 border-t border-outline-variant/50 flex items-center justify-between bg-surface-container-lowest">
      <span className="font-body-xs text-body-xs text-on-surface-variant">Showing 1-3 of 142 records</span>
      <div className="flex space-x-1">
      <button className="p-1 text-on-surface-variant hover:text-on-surface disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
      <button className="p-1 text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
