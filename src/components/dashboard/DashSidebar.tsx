'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, ArrowLeftRight, Package, Cpu, BarChart3,
  Settings, HelpCircle, ChevronRight, Zap, LogOut,
  Sparkles, Activity, ShieldCheck, Bell
} from 'lucide-react';

const navGroups = [
  {
    label: 'Main Operational',
    items: [
      { icon: LayoutDashboard, label: 'Overview',      href: '/app/dashboard', color: '#f97316' },
      { icon: ArrowLeftRight,  label: 'Transactions', href: '/app/transactions', color: '#2563eb', badge: '3' },
      { icon: Package,         label: 'Materials',    href: '/app/materials',    color: '#7c3aed' },
      { icon: Cpu,             label: 'IoT Devices',   href: '/app/devices',      color: '#059669', badge: 'Live' },
      { icon: BarChart3,       label: 'Reports',      href: '/app/reports',      color: '#0284c7' },
    ],
  },
  {
    label: 'System & Support',
    items: [
      { icon: HelpCircle, label: 'Documentation', href: '#', color: '#64748b' },
      { icon: Settings,   label: 'Settings',      href: '#', color: '#64748b' },
    ],
  },
];

export default function DashSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="dash-sidebar flex flex-col justify-between select-none"
      style={{
        fontFamily: "'Inter', sans-serif",
        width: 250,
        background: '#ffffff',
        borderRight: '1px solid #e2e8f0',
        boxShadow: '2px 0 12px rgba(15,23,42,0.03)',
      }}
    >
      <div>
        {/* ── Brand Logo ── */}
        <div className="px-5 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-orange-500/25"
              style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}
            >
              <svg width="19" height="19" viewBox="0 0 14 14" fill="none">
                <polygon points="7,1 13,4 13,10 7,13 1,10 1,4" stroke="white" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
                <circle cx="7" cy="7" r="1.8" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-black text-[16px] text-slate-900 leading-none tracking-tight group-hover:text-orange-600 transition-colors">
                IMTGS
              </div>
              <div className="font-mono text-[8.5px] font-extrabold text-orange-500 leading-none mt-1 tracking-widest uppercase opacity-90">
                Control Center
              </div>
            </div>
          </Link>
        </div>

        {/* ── Network Live Status ── */}
        <div className="px-4 py-3.5 border-b border-slate-100/80 bg-slate-50/50">
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10.5px] font-extrabold tracking-wider">AI SENSORS ONLINE</span>
            </div>
            <span className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-600 text-white">99.9%</span>
          </div>
        </div>

        {/* ── Navigation Links ── */}
        <nav className="px-3 py-4 space-y-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="px-3 mb-2 text-[10px] font-extrabold tracking-widest uppercase font-mono text-slate-400">
                {group.label}
              </div>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link href={item.href} className="block">
                        <motion.div
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-bold transition-all relative overflow-hidden ${
                            active
                              ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20 shadow-sm'
                              : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                          }`}
                        >
                          {active && (
                            <motion.div
                              layoutId="sidebarActivePill"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-orange-500"
                            />
                          )}

                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                              active ? 'bg-orange-500 text-white shadow-sm' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <item.icon size={16} />
                          </div>

                          <span className="flex-1">{item.label}</span>

                          {item.badge && (
                            <span
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                                item.badge === 'Live'
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-orange-500 text-white'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}

                          {active && <ChevronRight size={14} className="text-orange-500" />}
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div>
        {/* ── Upgrade Callout Card ── */}
        <div className="px-4 pb-3">
          <div className="rounded-2xl p-4 bg-gradient-to-br from-orange-50 to-amber-50/50 border border-orange-200/80 relative overflow-hidden shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Zap size={15} className="text-orange-600 fill-orange-500" />
              <span className="text-xs font-black text-orange-900">Enterprise Pilot</span>
            </div>
            <p className="text-[11.5px] text-slate-600 mb-3 leading-snug font-medium">
              3 months early access for MSME scrap yards.
            </p>
            <Link href="/pilot" className="block">
              <button className="w-full text-[12px] font-bold py-2 rounded-xl text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all">
                Claim Pilot
              </button>
            </Link>
          </div>
        </div>

        {/* ── User Profile Footer ── */}
        <div className="px-4 py-3.5 flex items-center gap-3 border-t border-slate-100 bg-slate-50/60">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-slate-900 truncate">Sajibur Admin</div>
            <div className="text-[10.5px] text-slate-400 truncate font-semibold font-mono">admin@imtgs.com</div>
          </div>
          <button className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors">
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}
