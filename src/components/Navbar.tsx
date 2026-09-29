'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Menu, X, ArrowRight, Brain, Scale, Shield,
  FileCheck, Layers, Cpu, Sparkles, LayoutDashboard, Zap,
  Activity, CheckCircle2, Flame
} from 'lucide-react';

interface NavChild {
  label: string;
  href: string;
  desc: string;
  icon: any;
  color: string;
  tag?: string;
}
interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const primaryNav: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'AI Material Grading',     href: '/platform',  desc: 'Computer vision quality classification & confidence scoring', icon: Brain,     color: '#f97316', tag: 'AI Vision'  },
      { label: 'IoT Weight Verification', href: '/platform',  desc: 'Sensor-signed weighbridge telemetry & digital timestamps',   icon: Scale,     color: '#2563eb', tag: 'Telemetry' },
      { label: 'Digital Traceability',    href: '/platform',  desc: 'Immutable chain-of-custody logs from yard to mill',           icon: Shield,    color: '#059669', tag: 'Ledger'    },
      { label: 'Audit & Compliance',      href: '/platform',  desc: 'Automated compliance certificates and PDF export',            icon: FileCheck, color: '#7c3aed', tag: 'Reports'   },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Metal & Scrap Recovery',  href: '/solutions', desc: 'Ferrous & non-ferrous classification & grade records',         icon: Layers,    color: '#f97316' },
      { label: 'E-Waste Management',      href: '/solutions', desc: 'Component identification & regulatory compliance',              icon: Cpu,       color: '#2563eb' },
      { label: 'Industrial By-Products',  href: '/solutions', desc: 'Batch tracking for industrial waste recovery streams',          icon: Sparkles,  color: '#059669' },
    ],
  },
  { label: 'Technology',   href: '/technology'   },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Impact',       href: '/impact'       },
  { label: 'About',        href: '/about'        },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileExpanded(null); }, [pathname]);

  const handleMouseEnter = (label: string, hasDropdown: boolean) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredNav(label);
    if (hasDropdown) setOpenDropdown(label);
    else setOpenDropdown(null);
  };

  const handleMouseLeave = () => {
    setHoveredNav(null);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* ── Desktop Navbar Header ── */}
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        style={{ paddingTop: 16, paddingLeft: 20, paddingRight: 20 }}
      >
        <motion.div
          className="pointer-events-auto w-full transition-all duration-300 relative"
          style={{
            maxWidth: 1320,
            borderRadius: scrolled ? 22 : 28,
            background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: scrolled ? '1.5px solid rgba(203, 213, 225, 0.95)' : '1.5px solid rgba(226, 232, 240, 0.85)',
            boxShadow: scrolled
              ? '0 16px 40px -12px rgba(15, 23, 42, 0.18), 0 6px 16px -4px rgba(15, 23, 42, 0.08)'
              : '0 8px 30px -10px rgba(15, 23, 42, 0.10)',
            padding: scrolled ? '12px 28px' : '16px 36px',
          }}
        >
          <div className="flex items-center justify-between gap-6">
            {/* ── Brand Logo (Enlarged & Animated) ── */}
            <Link href="/" className="flex items-center gap-3.5 flex-shrink-0 group">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg shadow-orange-500/25"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                }}
              >
                {/* Glowing aura */}
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg width="22" height="22" viewBox="0 0 14 14" fill="none">
                  <polygon points="7,1 13,4 13,10 7,13 1,10 1,4" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="2" fill="white"/>
                </svg>
              </motion.div>
              <div>
                <div className="font-display font-black text-[20px] text-slate-900 leading-none tracking-tight group-hover:text-orange-600 transition-colors">
                  IMTGS
                </div>
                <div className="font-mono text-[9px] font-extrabold text-orange-500 leading-none mt-1.5 tracking-widest uppercase opacity-95">
                  Material Intelligence
                </div>
              </div>
            </Link>

            {/* ── Navigation Links (Enlarged + Animated Dynamic Sliding Pill) ── */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 relative" aria-label="Main navigation">
              {primaryNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) || (item.children?.some(c => c.href === pathname));
                const hasDropdown = !!item.children;
                const isOpen = openDropdown === item.label;
                const isHovered = hoveredNav === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label, hasDropdown)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={item.href} className="block">
                      <motion.div
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl text-[15px] font-extrabold transition-all duration-200 select-none z-10 ${
                          isActive
                            ? 'text-white'
                            : isOpen
                            ? 'text-orange-600'
                            : isHovered
                            ? 'text-slate-950'
                            : 'text-slate-700'
                        }`}
                      >
                        {/* ── Animated Active Gradient Background Pill ── */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTabBackground"
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 shadow-lg shadow-orange-500/30 -z-10"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}

                        {/* ── Animated Hover Highlight Pill ── */}
                        {!isActive && isHovered && (
                          <motion.div
                            layoutId="hoverTabBackground"
                            className="absolute inset-0 rounded-2xl bg-slate-100/90 border border-slate-200/60 -z-10 shadow-sm"
                            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                          />
                        )}

                        {/* ── Dropdown Open Background ── */}
                        {!isActive && !isHovered && isOpen && (
                          <div className="absolute inset-0 rounded-2xl bg-orange-50 border border-orange-200/80 -z-10" />
                        )}

                        {/* Active indicator glowing dot */}
                        {isActive && (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 1.8 }}
                            className="w-2 h-2 rounded-full bg-white shadow-sm"
                          />
                        )}

                        <span>{item.label}</span>

                        {hasDropdown && (
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown
                              size={15}
                              className={`stroke-[2.5] ${
                                isActive
                                  ? 'text-white/90'
                                  : isOpen
                                  ? 'text-orange-600'
                                  : 'text-slate-400'
                              }`}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    </Link>

                    {/* ── Dropdown Menu (Animated Stagger) ── */}
                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
                          onMouseLeave={handleMouseLeave}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 rounded-3xl overflow-hidden z-50"
                          style={{
                            width: 360,
                            background: '#ffffff',
                            border: '1.5px solid #e2e8f0',
                            boxShadow: '0 24px 60px -12px rgba(15,23,42,0.22), 0 6px 20px -4px rgba(15,23,42,0.1)',
                          }}
                        >
                          <div className="p-3">
                            <div className="flex items-center justify-between px-3 py-2 mb-1.5 border-b border-slate-100">
                              <span className="font-mono text-[10.5px] font-black text-slate-400 uppercase tracking-widest">{item.label} Suite</span>
                              <Sparkles size={13} className="text-orange-500 animate-pulse" />
                            </div>
                            {item.children?.map((child, index) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: index * 0.04 }}
                              >
                                <Link
                                  href={child.href}
                                  className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-orange-50/70 transition-all group"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.15, rotate: 4 }}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform"
                                    style={{ background: `${child.color}15`, color: child.color }}
                                  >
                                    <child.icon size={19} />
                                  </motion.div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="text-[14px] font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                                        {child.label}
                                      </span>
                                      {child.tag && (
                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-orange-100/80 text-orange-700">
                                          {child.tag}
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-[12px] text-slate-500 mt-0.5 leading-snug">
                                      {child.desc}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/90 flex items-center justify-between">
                            <span className="text-[12px] font-semibold text-slate-500">Explore full capability matrix</span>
                            <Link href={item.href} className="text-[12px] font-extrabold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition-colors">
                              View Suite <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* ── Action CTAs (Right - Larger + Animated) ── */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {/* AI Status Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12px] font-extrabold shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>AI Live</span>
              </motion.div>

              <Link href="/app/dashboard">
                <motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl text-[14.5px] font-extrabold text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 transition-all border border-slate-200/60"
                >
                  <LayoutDashboard size={16} className="text-slate-500" />
                  Sign In
                </motion.div>
              </Link>

              <Link href="/pilot">
                <motion.div
                  whileHover={{ scale: 1.05, y: -1.5 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[14.5px] font-extrabold text-white shadow-lg transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 6px 20px rgba(249,115,22,0.38)',
                  }}
                >
                  <Zap size={15} className="fill-white animate-bounce" />
                  Request Pilot
                  <ArrowRight size={15} />
                </motion.div>
              </Link>
            </div>

            {/* ── Mobile Menu Toggle Button ── */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-3 rounded-2xl text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Mobile Drawer (Enlarged + Animated) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-50 overflow-y-auto"
              style={{
                top: 84, left: 14, right: 14,
                maxHeight: 'calc(100vh - 104px)',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 28,
                boxShadow: '0 28px 64px -12px rgba(15,23,42,0.3)',
              }}
            >
              <div className="p-5 space-y-2">
                {primaryNav.map((item) => {
                  const isActive = pathname === item.href;
                  const hasChildren = !!item.children;
                  const isExpanded = mobileExpanded === item.label;

                  return (
                    <div key={item.label}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={() => !hasChildren && setMobileOpen(false)}
                          className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-2xl text-[16px] font-extrabold transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                              : 'text-slate-800 hover:bg-slate-100'
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                        {hasChildren && (
                          <button
                            className={`p-4 rounded-2xl transition-colors ${isActive ? '' : 'hover:bg-slate-100'}`}
                            onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          >
                            <ChevronDown
                              size={19}
                              className={`text-slate-500 transition-transform stroke-[2.5] ${isExpanded ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50/80 rounded-2xl my-1.5">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-[14px] font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${child.color}15`, color: child.color }}
                                  >
                                    <child.icon size={16} />
                                  </div>
                                  <span>{child.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTAs */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/60 flex flex-col gap-3 rounded-b-[28px]">
                <Link
                  href="/app/dashboard"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-extrabold text-slate-800 bg-white border border-slate-200 shadow-sm hover:bg-slate-100 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <LayoutDashboard size={18} className="text-slate-600" /> Sign In to Dashboard
                </Link>
                <Link
                  href="/pilot"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-[15px] font-extrabold text-white shadow-lg shadow-orange-500/30"
                  style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Zap size={18} className="fill-white" /> Request a Field Pilot
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
