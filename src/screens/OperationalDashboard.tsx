// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Operational Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface OperationalDashboardProps {}

export function OperationalDashboard(props: OperationalDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container h-screen left-0 w-64 z-50 flex flex-col py-lg px-md space-y-sm shrink-0 border-r border-surface-container-low">
      {/* Header */}
      <div className="flex items-center gap-md mb-md px-sm">
      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-outline-variant bg-surface-container-highest">
      <img alt="Greenhouse Sector Logo" className="w-full h-full object-cover" data-alt="A highly detailed, macro photograph of a vibrant green succulent plant leaf covered in microscopic dew drops, illuminated by bright, sterile LED grow lights in a modern agricultural facility. The lighting casts sharp, clinical highlights, emphasizing the precise, data-driven nature of the environment. The overall tone is cool, technological, and organic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XUx3Xlon__P9GP1Ke70PSxFGdrlxu-PQDZ8O5FFK8Eg_Nsu1ksypGifm6HFiK64R30X5uZjTMkYYh9CyKy42vOHyT6g8YV8iO-iF2PexlXGLh-d8f_I57bA7JJkyQjBt0PU1DdWJxthkG4Tr5Edse5oxr-ThBLF7z3aYg890wTTHtBYKvaXzb7WKZOqoomqRl18N7oZul0GS-X8EnH8BGijjw7V02uf5Fye7ttT_NoaYTzHmkIc8sOzRu2rGLwNTrp9taiKwcO1b" />
      </div>
      <div>
      <h1 className="font-display text-heading-md font-bold text-primary">Sector 04-B</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Primary Greenhouse</p>
      </div>
      </div>
      {/* CTA */}
      <button className="bg-primary-container text-on-primary-container rounded-xl py-2 px-4 w-full font-body-sm font-bold flex justify-center items-center gap-sm hover:opacity-90 transition-opacity mb-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
                  New Log Entry
              </button>
      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col space-y-unit overflow-y-auto">
      <a className="flex items-center gap-sm px-3 py-2 bg-secondary-container text-on-secondary-container rounded-xl font-bold cursor-pointer transition-all scale-98" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Overview
                  </a>
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">assignment</span>
                      Maintenance Board
                  </a>
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
                      System Health
                  </a>
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">history</span>
                      Activity Logs
                  </a>
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">tune</span>
                      Operational Config
                  </a>
      </nav>
      {/* Footer Links */}
      <div className="mt-auto flex flex-col space-y-unit pt-md border-t border-surface-container-highest">
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">contact_support</span>
                      Support
                  </a>
      <a className="flex items-center gap-sm px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all cursor-pointer" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
      </div>
      </aside>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar */}
      <header className="bg-surface-dim border-b border-outline-variant flex justify-between items-center w-full px-margin h-16 shrink-0 z-40">
      <div className="font-display text-heading-md font-bold text-on-surface tracking-tight">FloraControl Console</div>
      <div className="flex items-center gap-md">
      <button className="bg-error text-on-error border border-error-container px-3 py-1.5 rounded flex items-center gap-xs font-label-caps text-label-caps uppercase tracking-wider hover:bg-error-container hover:text-on-error-container transition-colors">
      <span className="material-symbols-outlined text-[16px]">dangerous</span>
                          Emergency Stop
                      </button>
      <div className="h-6 w-px bg-outline-variant mx-2"></div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest p-1.5 rounded transition-colors duration-200 cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">apps</span>
      </button>
      </div>
      <div className="w-8 h-8 rounded-full ml-sm border border-outline overflow-hidden bg-surface-container-highest shrink-0 cursor-pointer">
      <img alt="Operator Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a greenhouse operator, styled with a cool, desaturated color grading fitting a dark mode industrial interface. The lighting is soft but directional, highlighting the subject against a completely dark, minimalist background. The aesthetic is serious, corporate, and technological." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPP4sFA4PqEWYzC4i_zQIKfif0pN-XAgiRiNUyhbqywwJpSjGfHmpyiCRdQdWQbjwJPLRrVke5iQ-KkOe3OM9YsMHT-Tp5ZsyRqIphI5pET3MRxxCjzxffGNuYKA4HGKrHtHI2gMsCkrGYE86XnOgtIJPqH1jD0sb8BZs2ZyhP8vfFuvYDa0OW_vREZ566b3sOJG0ne7jtl1DTLRHXCaPFrMqQTQWmXRAM6sbULiuMcIt6nk5uzC8wa7Rc-s71Y1iUdrn91GcLPZw" />
      </div>
      </div>
      </header>
      {/* Dashboard Content (Bento Grid Layout) */}
      <main className="flex-1 overflow-y-auto p-margin bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-gutter">
      {/* Main Operational Graph (Spans 8 cols) */}
      <section className="col-span-12 lg:col-span-8 bg-surface-container border border-outline-variant rounded-xl p-md flex flex-col min-h-[360px]">
      <div className="flex justify-between items-start mb-md">
      <div>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Environmental Stability Index</h2>
      <div className="flex items-baseline gap-sm mt-1">
      <span className="font-display text-display text-on-surface">94.2%</span>
      <span className="text-primary font-mono-data text-mono-data flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 1.2%</span>
      </div>
      </div>
      <div className="flex gap-2">
      <button className="px-2 py-1 border border-outline-variant rounded text-on-surface-variant font-mono-data text-xs hover:bg-surface-container-highest">1H</button>
      <button className="px-2 py-1 border border-primary text-primary bg-primary/10 rounded font-mono-data text-xs">24H</button>
      <button className="px-2 py-1 border border-outline-variant rounded text-on-surface-variant font-mono-data text-xs hover:bg-surface-container-highest">7D</button>
      </div>
      </div>
      {/* Simulated Graph Area */}
      <div className="flex-1 relative flex items-end gap-1 mt-md border-b border-surface-container-highest pb-sm">
      {/* Abstract bars for visual representation */}
      <div className="w-full h-[60%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      <div className="w-full h-[75%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      <div className="w-full h-[65%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      <div className="w-full h-[85%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      <div className="w-full h-[90%] bg-primary/40 border-t-2 border-primary rounded-t-sm relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-surface-variant text-on-surface px-2 py-1 rounded text-xs font-mono-data whitespace-nowrap shadow-lg border border-outline-variant z-10">Now: Optimal</div>
      </div>
      <div className="w-full h-[80%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      <div className="w-full h-[70%] bg-surface-container-highest rounded-t-sm hover:bg-primary/30 transition-colors"></div>
      </div>
      <div className="flex justify-between text-on-surface-variant font-mono-data text-[10px] pt-2">
      <span>00:00</span>
      <span>06:00</span>
      <span>12:00</span>
      <span>18:00</span>
      <span>24:00</span>
      </div>
      </section>
      {/* System Alerts Panel (High Priority) */}
      <section className="col-span-12 lg:col-span-4 bg-surface-container border border-error-container rounded-xl p-md flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full pointer-events-none"></div>
      <div className="flex justify-between items-center mb-md z-10">
      <h2 className="font-label-caps text-label-caps text-error uppercase tracking-wider flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">warning</span> Active Alerts
                              </h2>
      <span className="bg-error text-on-error rounded-full w-6 h-6 flex items-center justify-center font-mono-data text-xs">2</span>
      </div>
      <div className="space-y-sm flex-1 z-10">
      <div className="bg-surface-variant/50 border border-error/30 p-sm rounded-lg">
      <div className="flex justify-between items-start mb-1">
      <span className="font-mono-data text-mono-data text-error">ERR-PMP-02</span>
      <span className="text-on-surface-variant font-mono-data text-[10px]">2m ago</span>
      </div>
      <p className="text-on-surface font-body-sm leading-tight">Nutrient line pressure drop detected in Zone C.</p>
      </div>
      <div className="bg-surface-variant/50 border border-tertiary/30 p-sm rounded-lg">
      <div className="flex justify-between items-start mb-1">
      <span className="font-mono-data text-mono-data text-tertiary">WARN-TEMP-1A</span>
      <span className="text-on-surface-variant font-mono-data text-[10px]">15m ago</span>
      </div>
      <p className="text-on-surface font-body-sm leading-tight">Ambient temperature exceeds threshold (+1.2°C).</p>
      </div>
      </div>
      <button className="mt-md w-full py-1.5 border border-outline-variant text-on-surface-variant rounded hover:bg-surface-container-highest transition-colors font-label-caps text-label-caps uppercase">Acknowledge All</button>
      </section>
      {/* Sensor Metrics (Glassmorphism inspired dark cards) */}
      <section className="col-span-12 lg:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-md">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-md">Key Environment Metrics</h2>
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface-dim p-sm rounded-lg border border-surface-container-highest">
      <div className="text-on-surface-variant text-xs flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">thermostat</span> Temp</div>
      <div className="font-mono-data text-lg text-on-surface">24.5 <span className="text-xs text-on-surface-variant">°C</span></div>
      </div>
      <div className="bg-surface-dim p-sm rounded-lg border border-surface-container-highest">
      <div className="text-on-surface-variant text-xs flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">water_drop</span> Humidity</div>
      <div className="font-mono-data text-lg text-primary">68.2 <span className="text-xs text-on-surface-variant">%</span></div>
      </div>
      <div className="bg-surface-dim p-sm rounded-lg border border-surface-container-highest">
      <div className="text-on-surface-variant text-xs flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">light_mode</span> DLI</div>
      <div className="font-mono-data text-lg text-tertiary">14.8 <span className="text-xs text-on-surface-variant">mol</span></div>
      </div>
      <div className="bg-surface-dim p-sm rounded-lg border border-surface-container-highest">
      <div className="text-on-surface-variant text-xs flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">co2</span> CO2</div>
      <div className="font-mono-data text-lg text-on-surface">850 <span className="text-xs text-on-surface-variant">ppm</span></div>
      </div>
      </div>
      </section>
      {/* Equipment Health */}
      <section className="col-span-12 lg:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-md">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-md">Equipment Status</h2>
      <div className="space-y-sm">
      <div className="flex items-center justify-between pb-2 border-b border-surface-container-highest">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <span className="text-on-surface">HVAC Main Unit</span>
      </div>
      <span className="bg-surface-dim text-on-surface-variant px-2 py-0.5 rounded text-xs font-mono-data border border-outline-variant">98% OEE</span>
      </div>
      <div className="flex items-center justify-between pb-2 border-b border-surface-container-highest">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <span className="text-on-surface">Irrigation Pump A</span>
      </div>
      <span className="bg-surface-dim text-on-surface-variant px-2 py-0.5 rounded text-xs font-mono-data border border-outline-variant">Active</span>
      </div>
      <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-sm">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
      <span className="text-on-surface">Ventilation Fan 3</span>
      </div>
      <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-xs font-mono-data border border-tertiary/30">Maint. Req</span>
      </div>
      </div>
      </section>
      {/* Quick Actions */}
      <section className="col-span-12 lg:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-md">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-md">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-sm">
      <button className="bg-surface-dim hover:bg-surface-container-highest border border-outline-variant text-on-surface p-sm rounded-lg flex flex-col items-center justify-center gap-1 transition-colors">
      <span className="material-symbols-outlined text-primary">water_drop</span>
      <span className="font-label-caps text-label-caps mt-1">Manual Irrig.</span>
      </button>
      <button className="bg-surface-dim hover:bg-surface-container-highest border border-outline-variant text-on-surface p-sm rounded-lg flex flex-col items-center justify-center gap-1 transition-colors">
      <span className="material-symbols-outlined text-tertiary">flare</span>
      <span className="font-label-caps text-label-caps mt-1">Override Lights</span>
      </button>
      <button className="bg-surface-dim hover:bg-surface-container-highest border border-outline-variant text-on-surface p-sm rounded-lg flex flex-col items-center justify-center gap-1 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant">air</span>
      <span className="font-label-caps text-label-caps mt-1">Purge Vents</span>
      </button>
      <button className="bg-surface-dim hover:bg-surface-container-highest border border-outline-variant text-on-surface p-sm rounded-lg flex flex-col items-center justify-center gap-1 transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant">document_scanner</span>
      <span className="font-label-caps text-label-caps mt-1">Run Diags</span>
      </button>
      </div>
      </section>
      </div>
      </main>
      </div>
    </>
  );
}
