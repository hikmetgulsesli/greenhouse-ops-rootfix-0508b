// AUTO-GENERATED from Stitch HTML — preserve visual intent, refine when needed
// Screen: Operator Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. Treat this as a design scaffold, not untouchable product code.
// 2. Preserve the Stitch visual intent, spacing, hierarchy, and controls.
// 3. Refactor className/layout when required to make local Vite/Tailwind/CSS render the design correctly.
// 4. Add useState/onClick/onChange handlers and replace placeholder data with props/state.

import { useState } from "react";

interface OperatorProfilePanelProps {}

export function OperatorProfilePanel(props: OperatorProfilePanelProps) {
  return (
    <>
      {/* Simulated background dashboard context to show the overlay effect clearly */}
      <div className="absolute inset-0 p-margin grid grid-cols-12 gap-gutter opacity-30 pointer-events-none filter blur-[2px]">
      <div className="col-span-8 bg-surface border border-outline-variant rounded-xl h-96"></div>
      <div className="col-span-4 bg-surface border border-outline-variant rounded-xl h-96"></div>
      </div>
      {/* Overlay Backdrop */}
      <div className="fixed inset-0 bg-background/80 z-40 backdrop-blur-sm flex justify-end">
      {/* Profile Panel / Side Drawer */}
      <aside className="w-full max-w-[400px] h-full bg-surface-container border-l border-outline-variant shadow-2xl flex flex-col z-50 transform transition-transform translate-x-0">
      {/* Header */}
      <header className="flex items-center justify-between p-margin border-b border-outline-variant bg-surface-container-high shrink-0">
      <h2 className="font-heading-md text-heading-md text-on-surface">Operator Profile</h2>
      <button aria-label="Close Profile Panel" className="p-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container-high">
      <span className="material-symbols-outlined block" data-icon="close">close</span>
      </button>
      </header>
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
      {/* Identity Section */}
      <section className="p-margin flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-surface-variant mb-md overflow-hidden ring-2 ring-outline-variant relative">
      <img alt="Operator Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a male greenhouse sector manager in his mid-30s. He is wearing a dark, functional corporate uniform suitable for technical agricultural work. The lighting is cool and clinical, reflecting the minimal, high-stakes environment of a modern, data-intensive greenhouse control room. The dark background emphasizes the stark, high-tech industrial setting of the corporate minimalism aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkup4iZ3R7eGkBB2fRNgkaCVTq2VvjoOzRMpIN6hC4-2UaYlUlJQCzRI6boCiCSYvamUN7lPD19uOcn-VYZbFQ0sZRoTITxf2mSlQNwcFQGtqXqQe0V9fuMLZcL_yyv2RLuTeIG0uVerCVVWY50YOCYDUrKqAz7q7da-sSHFklbT20pJFRNZoII30N7EpekEzWDcOSMjQBH0eODAHjl4f3pblyxniZp9neaK1uLdnv3n4j10RGa56VKJxc2gNJYw1tg7F-1k8JCNjX" />
      </div>
      <h3 className="font-heading-md text-heading-md text-on-surface mb-unit">Dr. Elias Thorne</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-sm">Sector Manager</p>
      <div className="px-sm py-xs bg-secondary-container rounded-DEFAULT inline-flex items-center gap-xs text-on-secondary-container border border-outline-variant/30">
      <span className="material-symbols-outlined text-[14px]" data-icon="badge">badge</span>
      <span className="font-mono-data text-mono-data">ID: OP-7724</span>
      </div>
      </section>
      <hr className="border-t border-outline-variant mx-margin" />
      {/* Settings / Toggles Section */}
      <section className="p-margin space-y-md">
      <h4 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Notification Preferences</h4>
      <div className="space-y-sm">
      {/* Toggle Item: System Alerts */}
      <div className="flex items-center justify-between p-md bg-surface rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-colors cursor-pointer">
      <div className="pr-sm">
      <p className="font-body-sm text-body-sm text-on-surface font-medium mb-unit">System Alerts</p>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Immediate push for critical environment failures</p>
      </div>
      {/* Active Toggle */}
      <button aria-checked={true} className="w-10 h-6 rounded-full bg-primary relative shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" role="switch">
      <div className="w-4 h-4 bg-on-primary rounded-full absolute right-1 top-1 shadow-sm transition-transform"></div>
      </button>
      </div>
      {/* Toggle Item: Maintenance Updates */}
      <div className="flex items-center justify-between p-md bg-surface rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-colors cursor-pointer">
      <div className="pr-sm">
      <p className="font-body-sm text-body-sm text-on-surface font-medium mb-unit">Maintenance Reminders</p>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Scheduled equipment downtime and service logs</p>
      </div>
      {/* Inactive Toggle */}
      <button aria-checked={false} className="w-10 h-6 rounded-full bg-surface-variant border border-outline relative shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" role="switch">
      <div className="w-4 h-4 bg-outline rounded-full absolute left-1 top-1 transition-transform"></div>
      </button>
      </div>
      {/* Toggle Item: Shift Summaries */}
      <div className="flex items-center justify-between p-md bg-surface rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-colors cursor-pointer">
      <div className="pr-sm">
      <p className="font-body-sm text-body-sm text-on-surface font-medium mb-unit">Shift Updates</p>
      <p className="font-body-xs text-body-xs text-on-surface-variant">Automated digests at shift handover</p>
      </div>
      {/* Active Toggle */}
      <button aria-checked={true} className="w-10 h-6 rounded-full bg-primary relative shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" role="switch">
      <div className="w-4 h-4 bg-on-primary rounded-full absolute right-1 top-1 shadow-sm transition-transform"></div>
      </button>
      </div>
      </div>
      </section>
      </div>
      {/* Footer / Action Area */}
      <footer className="p-margin border-t border-outline-variant bg-surface-container-high shrink-0 mt-auto">
      <button className="w-full py-md px-margin flex items-center justify-center gap-sm rounded-xl border border-error text-error hover:bg-error-container hover:text-on-error-container transition-colors focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-surface-container-high">
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
      <span className="font-body-sm text-body-sm font-medium">Terminate Session</span>
      </button>
      </footer>
      </aside>
      </div>
    </>
  );
}
