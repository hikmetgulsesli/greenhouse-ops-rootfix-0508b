// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Get Started - Empty State
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface GetStartedEmptyStateProps {}

export function GetStartedEmptyState(props: GetStartedEmptyStateProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile, Visible on Web) */}
      <nav className="hidden md:flex flex-col h-full py-lg px-md space-y-sm bg-surface-container dark:bg-surface-container docked h-screen left-0 w-64 z-50 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant">
      <div className="mb-lg px-md">
      <h1 className="font-display text-heading-md font-bold text-primary">FloraControl Console</h1>
      </div>
      <div className="flex items-center space-x-md mb-lg px-md py-sm bg-surface-container-highest rounded-xl">
      <img alt="Greenhouse Sector Logo" className="w-10 h-10 rounded-full border border-outline-variant object-cover" data-alt="A macro shot of a single green leaf with dew drops, highly detailed, dramatic lighting, symbolizing organic growth in a high-tech greenhouse environment. Focus on texture and deep green tones. Minimalist and corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG_yioZTqH4Yais1ir3xB9MpVcB0wtKamh6xooHI1Z70jW-yPJF6XDGI_Idhtq_d5Plf6VO0MkE-UNYp7Lar0_48jKg9lXFmhafxj0K1lCtJtohpNP97ZwGQeALm4Sau3qDMIMhujQq4BORnl7WSk7b3B2tVMXZBWuklhLXC7Qxg7pxvV9fAwoFsxt2nzo1fBcf_rRDDk0zVn9O7q1vl8xnPlUV8fl3_KNJdT_ZppJSYHCIw5W0t92f1W8jMCVtYkwqxa2RZFuPIgh" />
      <div>
      <p className="font-label-caps text-label-caps text-on-surface">Sector 04-B</p>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Primary Greenhouse</p>
      </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container font-body-sm text-body-sm py-sm rounded-lg mb-lg hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 flex items-center justify-center space-x-sm">
      <span className="material-symbols-outlined text-[18px]">add</span>
      <span>New Log Entry</span>
      </button>
      <div className="flex-1 space-y-unit">
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-body-sm text-body-sm">Overview</span>
      </a>
      <a className="flex items-center space-x-md px-md py-sm bg-secondary-container text-on-secondary-container rounded-xl font-bold hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>assignment</span>
      <span className="font-body-sm text-body-sm">Maintenance Board</span>
      </a>
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">precision_manufacturing</span>
      <span className="font-body-sm text-body-sm">System Health</span>
      </a>
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">history</span>
      <span className="font-body-sm text-body-sm">Activity Logs</span>
      </a>
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">tune</span>
      <span className="font-body-sm text-body-sm">Operational Config</span>
      </a>
      </div>
      <div className="mt-auto pt-lg border-t border-outline-variant space-y-unit">
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">contact_support</span>
      <span className="font-body-sm text-body-sm">Support</span>
      </a>
      <a className="flex items-center space-x-md px-md py-sm rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all scale-98 active:scale-95 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-body-sm text-body-sm">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* TopNavBar (Visible on Mobile and Web) */}
      <header className="flex justify-between items-center w-full px-margin h-16 bg-surface-dim dark:bg-surface-dim docked full-width top-0 z-40 border-b border-outline-variant dark:border-outline-variant flat no shadows">
      <div className="flex items-center md:hidden">
      <span className="font-display text-heading-md font-bold text-on-surface dark:text-on-surface">FloraControl Console</span>
      </div>
      <div className="hidden md:flex items-center space-x-md flex-1">
      <div className="relative w-64">
      <span className="material-symbols-outlined absolute left-sm top-1/2 transform -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
      <input className="w-full bg-surface-container-highest border border-outline-variant rounded-lg pl-xl pr-sm py-sm text-body-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder-on-surface-variant" placeholder="Search logs, systems..." type="text" />
      </div>
      </div>
      <div className="flex items-center space-x-gutter">
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 p-sm rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 p-sm rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors duration-200 p-sm rounded-full cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined">apps</span>
      </button>
      <div className="h-6 w-px bg-outline-variant mx-sm"></div>
      <button className="text-error font-body-sm text-body-sm border border-error rounded-lg px-sm py-xs hover:bg-error-container hover:text-on-error-container transition-colors duration-200">
                          Emergency Stop
                      </button>
      <img alt="Operator Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer" data-alt="A professional headshot of an agricultural technology operator. Neutral expression, corporate lighting. The background is a slightly blurred, high-tech control room environment with subtle blue and dark grey tones matching the UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDMNcLz6eI5NdKSlk-CVhexeVq5VCdeU1J9t1gGFdGWS7cgbItPpZzu-tEmflkifmmH6DNvYcBgvBeEN6lMUURLm8Qs_QaKJ3yj0qoRI9tVz-HJ5ONDR0S9y0dBNqDM_gh1nHeLIhCGyRbsIjgC8-nlc_qnCwRCQLKYS7CC3x7NkdIZFuCLQg9jrYaOcC5UznHjCEbY1FuxPxKCJvcN4O-rOZdeKfjmHZejpMIni21TMKJKL6tNG7EOA_R6BIDcU0t-iDAB6JGoukI" />
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-margin flex items-center justify-center">
      <div className="max-w-md w-full bg-surface rounded-xl border border-outline-variant p-xl flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mb-lg">
      <span className="material-symbols-outlined text-on-surface-variant text-[40px]">add_circle</span>
      </div>
      <h2 className="font-display text-heading-md text-on-surface mb-sm">No Maintenance Tasks Found</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl max-w-sm">
                          There are currently no active logs or tasks for Sector 04-B. Begin by creating a new maintenance plan or logging an immediate action.
                      </p>
      <button className="bg-primary-container text-on-primary-container font-body-sm text-body-sm px-lg py-md rounded-lg hover:bg-primary hover:text-on-primary transition-colors duration-200 flex items-center space-x-sm w-full justify-center">
      <span className="material-symbols-outlined text-[18px]">add</span>
      <span>Create First Task</span>
      </button>
      </div>
      </main>
      </div>
    </>
  );
}
