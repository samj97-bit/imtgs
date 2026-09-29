'use client';
import { useState } from 'react';
import { Bell, Mail, Share2, Search, Plus, Filter, Download, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const pageNames: Record<string, { title: string; sub: string }> = {
  '/app/dashboard':    { title: 'Dashboard Overview', sub: 'Real-time Material Intelligence & Telemetry' },
  '/app/transactions': { title: 'Transaction Ledger', sub: 'Immutable AI & weight verification audit log' },
  '/app/materials':    { title: 'Material Catalog',   sub: 'Registry classification & live market pricing index' },
  '/app/devices':      { title: 'IoT Device Network',  sub: 'Weighbridges & optical camera sensor status' },
  '/app/reports':      { title: 'Analytics & Reports', sub: 'Compliance reports & downloadable audit PDFs' },
};

export default function DashTopbar() {
  const pathname = usePathname();
  const page = pageNames[pathname] ?? { title: 'Dashboard', sub: 'Material Intelligence Platform' };
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between gap-4 px-6 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
    >
      {/* Left: Page Title & Breadcrumb */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="font-display font-black text-[17px] text-slate-900 leading-none">{page.title}</h1>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
          </span>
        </div>
        <div className="text-[11.5px] text-slate-500 font-semibold mt-1 leading-none">{page.sub}</div>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 border border-slate-200/90 w-64 focus-within:border-orange-500 focus-within:bg-white transition-all shadow-xs">
          <Search size={14} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Search TXN #, material, yard..."
            className="text-xs outline-none bg-transparent w-full font-semibold text-slate-800 placeholder:text-slate-400"
          />
          <kbd className="hidden lg:block font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 font-bold">
            ⌘K
          </kbd>
        </div>

        {/* Date Filter Range Toggle */}
        <div className="hidden lg:flex items-center gap-1 rounded-xl p-1 bg-slate-100/80 border border-slate-200/90">
          {['1D', '7D', '1M', '1Y'].map((d) => (
            <button
              key={d}
              className={`text-[11.5px] font-extrabold px-3 py-1 rounded-lg transition-all ${
                d === '1M'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-slate-200 hidden md:block" />

        {/* Manual Refresh Button */}
        <button
          onClick={handleRefresh}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
          title="Refresh Data"
        >
          <RefreshCw size={17} className={isRefreshing ? 'animate-spin text-orange-500' : ''} />
        </button>

        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
          >
            <Bell size={17} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white" />
          </button>

          {showNotif && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-3 z-50 animate-scale-in">
              <div className="flex justify-between items-center px-2 py-1.5 border-b border-slate-100 mb-2">
                <span className="text-xs font-bold text-slate-900">Notifications</span>
                <span className="text-[10px] font-mono font-bold text-orange-600">3 NEW</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">TXN #IMT-82941 Verified</div>
                    <div className="text-[11px] text-slate-500">1,247 kg Ferrous scrap anchored at 11:37 AM</div>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 flex items-start gap-2">
                  <Sparkles size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">AI Calibration Complete</div>
                    <div className="text-[11px] text-slate-500">Model v2.4 confidence improved by +1.4%</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* New Transaction CTA */}
        <button
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all"
        >
          <Plus size={15} strokeWidth={2.5} />
          New Transaction
        </button>
      </div>
    </header>
  );
}
