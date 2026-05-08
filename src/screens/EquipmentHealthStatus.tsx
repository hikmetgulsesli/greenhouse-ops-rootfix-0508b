// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Equipment Health Status
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface EquipmentHealthStatusProps {}

export function EquipmentHealthStatus(props: EquipmentHealthStatusProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-surface-container dark:bg-surface-container flex-col h-full py-lg px-md space-y-sm docked h-screen left-0 w-64 z-50 bg-surface-container-low dark:bg-surface-container-low flat no shadows">
      <div className="mb-lg px-sm">
      <div className="flex items-center gap-sm mb-md">
      <img alt="Greenhouse Sector Logo" className="w-10 h-10 rounded-full" data-alt="A futuristic, minimal geometric logo representing a high-tech agricultural greenhouse sector. The logo is clean, sharp, and uses bright glowing blue and stark white tones. The background is a solid deep black #0F172A to match a dark mode console interface. Professional and highly engineered aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd_mgayHCBmXIZYihJuPZUI0QoEfDzUv9yo1dlADHvlit-93aUV453vFxGKB3WxyrTLCLtiZkWZ-Y-KndqZEdD1XakUnH9t6oB5meRCn5hOOcHbX1W4L4vtkKc7j_txwqg4LDEGoUAhvPnI8NOwrxqy1P1gwm1wC_wU4hCWy9XuCgZRWvWXATmeruHMpmfbV6ofdpdiSlPdoZxWkJ2A_bexri-gMk6gxBzWDCQpEjP_KZEwi4L2hJhTjoZP9NunLMjc5esXTfnll-V" />
      <div>
      <h1 className="font-display text-heading-md font-bold text-primary">Sector 04-B</h1>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Primary Greenhouse</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container rounded-lg py-sm px-md font-body-sm text-body-sm font-semibold hover:bg-opacity-90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                      New Log Entry
                  </button>
      </div>
      <div className="flex-1 space-y-unit">
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-xl font-bold transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="precision_manufacturing" style={{fontVariationSettings: "'FILL' 1"}}>precision_manufacturing</span>
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
      <div className="mt-auto space-y-unit pt-md border-t border-surface-container-highest">
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-surface-dim dark:bg-surface-dim flex justify-between items-center w-full px-margin h-16 docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows">
      <div className="flex items-center gap-md md:hidden">
      <span className="material-symbols-outlined text-primary cursor-pointer active:opacity-80 transition-all" data-icon="menu">menu</span>
      </div>
      <div className="flex-1 flex items-center gap-md max-w-xl hidden md:flex">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
      <input className="w-full bg-surface text-on-surface border border-outline-variant rounded-lg pl-xl pr-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm text-body-sm transition-all placeholder-on-surface-variant" placeholder="Search equipment, logs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm ml-auto">
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="help">help</span>
      </button>
      <button className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-lg cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined" data-icon="apps">apps</span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-sm"></div>
      <button className="hidden lg:flex items-center gap-xs px-sm py-xs border border-error text-error rounded-lg hover:bg-error-container hover:text-on-error-container transition-colors font-body-sm text-body-sm">
      <span className="material-symbols-outlined text-[18px]" data-icon="warning">warning</span>
                          Emergency Stop
                      </button>
      <img alt="Operator Profile Avatar" className="w-8 h-8 rounded-full ml-sm border border-outline-variant cursor-pointer" data-alt="A professional headshot of an agricultural systems operator. The person is wearing a clean, minimal uniform. The lighting is slightly dramatic, typical of a high-tech control room environment, with subtle cool blue rim lighting. Dark background to match the console theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXkw-7CvxXeOhwhSibRkTAYIvwHTwZ44iIWcgUBsY5lSVQZM71etzk6zhPDO1KXfpGD5eoMYvbFFsF80LSFBALSq7gqc-wZtzZEGRAoZ5T4A6D7SFPW3MPfIRv2NMREO-IKbRDL9os-RG-8vjKbV9s4r037JQw064namsIKHKs4Jsvtktn_A1URPnzt75Y_UTemakf0x8fgZbKWFaNZ5pllZLAUX1XY8cPq5tsRT9UqIs9XeUuzvObi1PMKAsIKf7uext543KQ_gW" />
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 overflow-y-auto p-margin bg-background">
      {/* Page Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-md mb-lg">
      <div>
      <h2 className="font-display text-display text-on-surface mb-unit">Equipment Health</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Monitoring active systems across Sector 04-B.</p>
      </div>
      <div className="flex flex-wrap items-center gap-sm">
      <select className="bg-surface text-on-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm text-body-sm appearance-none">
      <option>All Sectors</option>
      <option>Sector 04-A</option>
      <option selected={true}>Sector 04-B</option>
      <option>Sector 04-C</option>
      </select>
      <div className="flex bg-surface border border-outline-variant rounded-lg p-unit">
      <button className="px-md py-xs bg-secondary-container text-on-secondary-container rounded font-body-sm text-body-sm font-medium">All</button>
      <button className="px-md py-xs text-on-surface-variant hover:text-on-surface rounded font-body-sm text-body-sm transition-colors">Warning</button>
      <button className="px-md py-xs text-on-surface-variant hover:text-on-surface rounded font-body-sm text-body-sm transition-colors">Critical</button>
      </div>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Card 1: Critical Error */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2 h-full bg-error"></div>
      <div className="flex justify-between items-start mb-md">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface" data-icon="hvac">hvac</span>
      </div>
      <div>
      <h3 className="font-heading-md text-heading-md text-on-surface">Main Chiller Unit</h3>
      <p className="font-body-xs text-body-xs text-on-surface-variant">HVAC-CH-01</p>
      </div>
      </div>
      <span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-2 py-1 rounded">CRITICAL</span>
      </div>
      <div className="grid grid-cols-2 gap-sm mb-md">
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">COOLANT PRESSURE</p>
      <p className="font-mono-data text-mono-data text-error">12 PSI <span className="text-on-surface-variant text-[10px]">(Low)</span></p>
      </div>
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">TEMP OUTPUT</p>
      <p className="font-mono-data text-mono-data text-on-surface">68°F</p>
      </div>
      </div>
      <div className="mt-auto pt-md border-t border-outline-variant flex justify-between items-center">
      <p className="font-body-xs text-body-xs text-on-surface-variant">Last Serviced: 14 days ago</p>
      <button className="bg-error text-on-error px-md py-sm rounded-lg font-body-sm text-body-sm font-semibold hover:opacity-90 transition-opacity">
                                  Dispatch Tech
                              </button>
      </div>
      </div>
      {/* Card 2: Warning */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2 h-full bg-tertiary"></div>
      <div className="flex justify-between items-start mb-md">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface" data-icon="water_drop">water_drop</span>
      </div>
      <div>
      <h3 className="font-heading-md text-heading-md text-on-surface">Irrigation Pump B</h3>
      <p className="font-body-xs text-body-xs text-on-surface-variant">IRR-P-02</p>
      </div>
      </div>
      <span className="bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps px-2 py-1 rounded">WARNING</span>
      </div>
      <div className="grid grid-cols-2 gap-sm mb-md">
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">FLOW RATE</p>
      <p className="font-mono-data text-mono-data text-tertiary">42 GPM <span className="text-on-surface-variant text-[10px]">(Fluctuating)</span></p>
      </div>
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">MOTOR TEMP</p>
      <p className="font-mono-data text-mono-data text-on-surface">145°F</p>
      </div>
      </div>
      <div className="mt-auto pt-md border-t border-outline-variant flex justify-between items-center">
      <p className="font-body-xs text-body-xs text-on-surface-variant">Last Serviced: 45 days ago</p>
      <button className="border border-outline-variant text-on-surface px-md py-sm rounded-lg font-body-sm text-body-sm font-semibold hover:bg-surface-container-highest transition-colors">
                                  Schedule Maint
                              </button>
      </div>
      </div>
      {/* Card 3: Success */}
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
      <div className="flex justify-between items-start mb-md">
      <div className="flex items-center gap-sm">
      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant">
      <span className="material-symbols-outlined text-on-surface" data-icon="lightbulb">lightbulb</span>
      </div>
      <div>
      <h3 className="font-heading-md text-heading-md text-on-surface">LED Array Alpha</h3>
      <p className="font-body-xs text-body-xs text-on-surface-variant">LGT-A-01</p>
      </div>
      </div>
      <span className="bg-primary-container/20 text-primary font-label-caps text-label-caps px-2 py-1 rounded border border-primary/30">ONLINE</span>
      </div>
      <div className="grid grid-cols-2 gap-sm mb-md">
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">INTENSITY</p>
      <p className="font-mono-data text-mono-data text-on-surface">85%</p>
      </div>
      <div className="bg-surface-container-low p-sm rounded-lg border border-outline-variant/50">
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-unit">POWER DRAW</p>
      <p className="font-mono-data text-mono-data text-on-surface">4.2 kW</p>
      </div>
      </div>
      <div className="mt-auto pt-md border-t border-outline-variant flex justify-between items-center">
      <p className="font-body-xs text-body-xs text-on-surface-variant">Last Serviced: 120 days ago</p>
      <button className="text-primary px-sm py-sm rounded-lg font-body-sm text-body-sm font-medium hover:bg-surface-container-highest transition-colors">
                                  Details
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
