// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Task Maintenance Board
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface TaskMaintenanceBoardProps {}

export function TaskMaintenanceBoard(props: TaskMaintenanceBoardProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface-dim dark:bg-surface-dim docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows flex justify-between items-center w-full px-margin h-16 shrink-0">
      <div className="flex items-center gap-md">
      <span className="font-display text-heading-md font-bold text-on-surface dark:text-on-surface">FloraControl Console</span>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative hidden md:flex items-center">
      <span className="material-symbols-outlined absolute left-sm text-on-surface-variant" style={{fontSize: "20px"}}>search</span>
      <input className="bg-surface-container-high border border-outline-variant rounded-DEFAULT py-xs pl-xl pr-sm text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container w-64" placeholder="Search tasks..." type="text" />
      </div>
      <button className="flex items-center justify-center p-sm rounded-full hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">notifications</span>
      </button>
      <button className="flex items-center justify-center p-sm rounded-full hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">help</span>
      </button>
      <button className="flex items-center justify-center p-sm rounded-full hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">apps</span>
      </button>
      <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant ml-sm cursor-pointer">
      <img alt="Operator Profile Avatar" className="w-full h-full object-cover" data-alt="A close-up headshot of a professional operator wearing a subtle uniform, looking confidently slightly off-camera. The lighting is cool and technical, consistent with a high-stakes, dark-mode control room environment. The background is a soft, dark blur of digital console screens. The aesthetic is modern, authoritative, and corporate minimal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3NF-n0jDb9zj5hWUWbW7rTWMIXI4uGJxRzfsTgcQ0x_dJG-8HXYDZm6lIxs34xE0NvV4FZ_xo10BTWZy0WIduZtYjRH_XmkXCFAN94NztkzFN0DaR1UGrVlpLAFWNPn2AadihR9mcXIqjz_vjEJSH5HfeiH-AJdRbQKIiI2tvv2E1RU0uijup0FhrUKdapaITdtNIqPux0KYrgYJlfykn9mrLJgiv8fK5tOzSqsIdtumj-YQxTjObtACcS-a0G6qew1UJoNyDzEbr" />
      </div>
      <button className="ml-sm font-body-sm text-body-sm font-medium text-error border border-error rounded-DEFAULT px-md py-xs hover:bg-error/10 transition-colors cursor-pointer active:opacity-80">
                      Emergency Stop
                  </button>
      </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="bg-surface-container dark:bg-surface-container docked h-full left-0 w-64 z-50 bg-surface-container-low dark:bg-surface-container-low flat no shadows flex flex-col py-lg px-md space-y-sm shrink-0 border-r border-outline-variant">
      <div className="flex items-center gap-sm mb-lg px-sm">
      <div className="w-10 h-10 rounded-DEFAULT bg-surface-container-highest flex items-center justify-center border border-outline-variant overflow-hidden">
      <span className="material-symbols-outlined text-primary">eco</span>
      </div>
      <div>
      <h2 className="font-display text-heading-md font-bold text-primary">Sector 04-B</h2>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Primary Greenhouse</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium py-sm px-md rounded-DEFAULT mb-lg hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
                      New Log Entry
                  </button>
      <div className="flex-1 space-y-xs overflow-y-auto hide-scrollbar">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container text-on-secondary-container rounded-xl font-bold scale-98 active:scale-95 transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" data-weight="fill" style={{fontSize: "20px"}}>assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>precision_manufacturing</span>
      <span className="font-body-sm text-body-sm">System Health</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>history</span>
      <span className="font-body-sm text-body-sm">Activity Logs</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>tune</span>
      <span className="font-body-sm text-body-sm">Operational Config</span>
      </a>
      </div>
      <div className="mt-auto pt-md border-t border-outline-variant space-y-xs">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest rounded-xl transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-full bg-background overflow-hidden relative">
      {/* Page Header */}
      <div className="px-lg py-md border-b border-outline-variant bg-surface flex justify-between items-center shrink-0">
      <div>
      <h1 className="font-display text-display text-on-surface">Maintenance Board</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Active tasks across all climate control systems.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-sm rounded-DEFAULT hover:bg-surface-container-highest transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>filter_list</span>
                              Filter
                          </button>
      <button className="bg-surface-container border border-outline-variant text-on-surface font-body-sm text-body-sm px-md py-sm rounded-DEFAULT hover:bg-surface-container-highest transition-colors flex items-center gap-xs">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>sort</span>
                              Sort
                          </button>
      </div>
      </div>
      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto p-lg flex gap-gutter items-start h-full pb-xl">
      {/* Pending Column */}
      <div className="w-80 shrink-0 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col h-full max-h-full">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Pending</h3>
      <span className="bg-surface-container-highest text-on-surface-variant font-mono-data text-mono-data px-xs py-[2px] rounded-DEFAULT">3</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>more_horiz</span></button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto space-y-sm hide-scrollbar">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline">TSK-8921</span>
      <span className="material-symbols-outlined text-tertiary" style={{fontSize: "16px"}} title="High Priority">warning</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface mb-xs">Recalibrate RH Sensors</h4>
      <p className="font-body-xs text-body-xs text-on-surface-variant mb-md line-clamp-2">Zone 2 sensors are showing a 5% drift compared to redundant backups. Needs immediate recalibration.</p>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">Zone 2</span>
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-on-secondary-container font-label-caps text-label-caps" title="Tech: JD">
                                          JD
                                      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline">TSK-8924</span>
      <span className="material-symbols-outlined text-outline" style={{fontSize: "16px"}} title="Low Priority">arrow_downward</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface mb-xs">Filter Replacement (HVAC-A)</h4>
      <p className="font-body-xs text-body-xs text-on-surface-variant mb-md line-clamp-2">Routine monthly replacement of HEPA filters in main HVAC unit A.</p>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">HVAC</span>
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-on-secondary-container font-label-caps text-label-caps" title="Tech: MR">
                                          MR
                                      </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline">TSK-8925</span>
      <span className="material-symbols-outlined text-primary" style={{fontSize: "16px"}} title="Normal Priority">drag_handle</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface mb-xs">Check Drip Line P-14</h4>
      <p className="font-body-xs text-body-xs text-on-surface-variant mb-md line-clamp-2">Reported slight pressure drop in sector 4 drip irrigation line.</p>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">Irrigation</span>
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-on-secondary-container font-label-caps text-label-caps" title="Tech: AL">
                                          AL
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* In Progress Column */}
      <div className="w-80 shrink-0 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col h-full max-h-full">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-caps text-label-caps text-primary uppercase">In Progress</h3>
      <span className="bg-primary-container/20 text-primary font-mono-data text-mono-data px-xs py-[2px] rounded-DEFAULT">2</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>more_horiz</span></button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto space-y-sm hide-scrollbar">
      {/* Card 1 */}
      <div className="bg-surface border-l-2 border-l-primary border-t border-r border-b border-outline-variant rounded-DEFAULT p-sm hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing shadow-[0_0_10px_rgba(37,99,235,0.05)]">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline">TSK-8919</span>
      <span className="material-symbols-outlined text-error" style={{fontSize: "16px"}} title="Critical Priority">priority_high</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface mb-xs">Fix Exhaust Fan Motor</h4>
      <p className="font-body-xs text-body-xs text-on-surface-variant mb-md line-clamp-2">Motor bearing failure on primary exhaust. Temperature rising in Zone 1. Parts acquired, installation ongoing.</p>
      <div className="mb-sm">
      <div className="flex justify-between font-body-xs text-body-xs text-on-surface-variant mb-[2px]">
      <span>Progress</span>
      <span>65%</span>
      </div>
      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{width: "65%"}}></div>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">Ventilation</span>
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-on-secondary-container font-label-caps text-label-caps" title="Tech: JD">
                                          JD
                                      </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm hover:border-primary-container transition-colors cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline">TSK-8922</span>
      <span className="material-symbols-outlined text-primary" style={{fontSize: "16px"}} title="Normal Priority">drag_handle</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface mb-xs">Nutrient Dosier Flush</h4>
      <p className="font-body-xs text-body-xs text-on-surface-variant mb-md line-clamp-2">Standard bi-weekly flush of the A/B nutrient dosing lines to prevent crystallization buildup.</p>
      <div className="mb-sm">
      <div className="flex justify-between font-body-xs text-body-xs text-on-surface-variant mb-[2px]">
      <span>Progress</span>
      <span>20%</span>
      </div>
      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{width: "20%"}}></div>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">Nutrients</span>
      <div className="w-6 h-6 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-on-secondary-container font-label-caps text-label-caps" title="Tech: AL">
                                          AL
                                      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Completed Column */}
      <div className="w-80 shrink-0 bg-surface-container-low rounded-lg border border-outline-variant flex flex-col h-full max-h-full opacity-80">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Completed</h3>
      <span className="bg-surface-container-highest text-on-surface-variant font-mono-data text-mono-data px-xs py-[2px] rounded-DEFAULT">4</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined" style={{fontSize: "18px"}}>more_horiz</span></button>
      </div>
      <div className="p-sm flex-1 overflow-y-auto space-y-sm hide-scrollbar">
      {/* Card 1 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-sm">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline line-through">TSK-8915</span>
      <span className="material-symbols-outlined text-outline" style={{fontSize: "16px"}}>check_circle</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface-variant mb-xs line-through">Update Firmware on Controller 2</h4>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant/50 pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">IT Ops</span>
      <span className="font-body-xs text-body-xs text-on-surface-variant">Today, 09:14</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-sm">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline line-through">TSK-8912</span>
      <span className="material-symbols-outlined text-outline" style={{fontSize: "16px"}}>check_circle</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface-variant mb-xs line-through">Inspect CO2 Lines Sector 1</h4>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant/50 pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">Gas Sys</span>
      <span className="font-body-xs text-body-xs text-on-surface-variant">Yesterday</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container border border-outline-variant/50 rounded-DEFAULT p-sm">
      <div className="flex justify-between items-start mb-sm">
      <span className="font-mono-data text-mono-data text-outline line-through">TSK-8908</span>
      <span className="material-symbols-outlined text-outline" style={{fontSize: "16px"}}>check_circle</span>
      </div>
      <h4 className="font-body-sm text-body-sm font-medium text-on-surface-variant mb-xs line-through">Clear Debris from Gutter B</h4>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant/50 pt-sm">
      <span className="bg-surface-container-highest px-xs py-[2px] rounded-DEFAULT font-label-caps text-label-caps text-on-surface-variant">General</span>
      <span className="font-body-xs text-body-xs text-on-surface-variant">Yesterday</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
