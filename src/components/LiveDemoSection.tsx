'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  CheckCircle2, QrCode, ArrowRight, Play, Pause, RotateCcw,
  Zap, ShieldCheck, Scale, Brain, Cpu, Activity, Camera,
  FileCheck2, Lock, Eye, RefreshCw, ChevronRight, Terminal
} from 'lucide-react';

type SimState = 'scan' | 'grade' | 'weight' | 'verify' | 'complete';

const stepsInfo: { id: SimState; title: string; subtitle: string; icon: any; color: string }[] = [
  { id: 'scan',     title: '1. Vision Scan',    subtitle: 'Computer Vision Optical Scan',  icon: Camera,       color: '#f97316' },
  { id: 'grade',    title: '2. AI Classification', subtitle: 'Neural Material Grading',    icon: Brain,        color: '#2563eb' },
  { id: 'weight',   title: '3. Telemetry Weight', subtitle: 'Sensor Weighbridge Sync',   icon: Scale,        color: '#7c3aed' },
  { id: 'verify',   title: '4. Chain Verification', subtitle: 'Cryptographic Validation', icon: ShieldCheck, color: '#059669' },
  { id: 'complete', title: '5. Immutable Record', subtitle: 'Verified Digital Certificate', icon: FileCheck2,  color: '#ea580c' },
];

export default function LiveDemoSection() {
  const [state, setSimState] = useState<SimState>('scan');
  const [isPlaying, setIsPlaying] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [weightValue, setWeightValue] = useState(1240.0);
  const [hashProgress, setHashProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'visual' | 'logs' | 'telemetry'>('visual');

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const order: SimState[] = ['scan', 'grade', 'weight', 'verify', 'complete'];
    const idx = order.indexOf(state);
    const nextState = order[(idx + 1) % order.length];
    const duration = state === 'complete' ? 5000 : 3200;

    const timer = setTimeout(() => {
      setSimState(nextState);
    }, duration);

    return () => clearTimeout(timer);
  }, [state, isPlaying]);

  // Scan progress simulator
  useEffect(() => {
    if (state !== 'scan') { setScanProgress(0); return; }
    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      setScanProgress(Math.min(current, 100));
      if (current >= 100) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [state]);

  // Weight stabilizer simulation
  useEffect(() => {
    if (state !== 'weight') return;
    let target = 1247.85;
    let current = 1240.0;
    const interval = setInterval(() => {
      current += (target - current) * 0.25;
      setWeightValue(Number(current.toFixed(2)));
      if (Math.abs(target - current) < 0.05) {
        setWeightValue(1247.85);
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [state]);

  // Hash generator simulation
  useEffect(() => {
    if (state !== 'verify') { setHashProgress(0); return; }
    let h = 0;
    const interval = setInterval(() => {
      h += 10;
      setHashProgress(Math.min(h, 100));
      if (h >= 100) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <section className="py-24 grid-overlay bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Activity size={13} className="animate-pulse" />
            LIVE INTERACTIVE ENGINE
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            See a <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Transaction</span> in Real Time
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Experience how IMTGS instantly grades scrap material, verifies weight telemetry, and anchors an immutable audit log.
          </p>
        </motion.div>

        {/* Main Interactive Terminal Container */}
        <div className="max-w-5xl mx-auto">
          {/* Top Control Bar & Step Stepper */}
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-t-3xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-2xl">
            {/* Step Navigation Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
              {stepsInfo.map((s, i) => {
                const isActive = state === s.id;
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => { setSimState(s.id); setIsPlaying(false); }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex-shrink-0 ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-[1.03]'
                        : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={14} style={{ color: isActive ? '#ffffff' : s.color }} />
                    <span className="hidden sm:inline">{s.title}</span>
                    <span className="sm:hidden">{i + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-bold transition-colors"
                title={isPlaying ? 'Pause auto simulation' : 'Play auto simulation'}
              >
                {isPlaying ? <Pause size={13} className="text-orange-400" /> : <Play size={13} className="text-emerald-400" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={() => { setSimState('scan'); setIsPlaying(true); }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Reset simulation"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-slate-950 border-x border-b border-slate-800 rounded-b-3xl shadow-2xl overflow-hidden relative min-h-[460px] flex flex-col justify-between">
            {/* Window Header Status Stream */}
            <div className="bg-slate-900/60 px-6 py-3 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  SENSOR STREAM ACTIVE
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400 hidden sm:inline">LATENCY: <strong className="text-slate-200">12ms</strong></span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="hidden md:inline">FREQ: <strong className="text-slate-200">240Hz</strong></span>
                <span className="text-slate-600 hidden md:inline">|</span>
                <span className="text-orange-400 font-bold uppercase">SECURE SHA-256</span>
              </div>
            </div>

            {/* Main Interactive Screen Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {/* STEP 1: VISION SCAN */}
                {state === 'scan' && (
                  <motion.div
                    key="scan"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                  >
                    {/* Simulated Camera Viewport */}
                    <div className="md:col-span-7 relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 h-64 sm:h-72 flex items-center justify-center group shadow-inner">
                      {/* Grid Camera Lines overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                      {/* Laser Scanner Line */}
                      <motion.div
                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent z-20"
                        style={{ boxShadow: '0 0 15px rgba(249, 115, 22, 0.9)' }}
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                      />

                      {/* Animated Bounding Box overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-10 border-2 border-dashed border-orange-500/70 rounded-xl pointer-events-none flex flex-col justify-between p-3"
                      >
                        <div className="flex justify-between items-start font-mono text-[10px] text-orange-400 font-bold bg-slate-950/80 px-2 py-1 rounded w-max">
                          AI CAM #01 — TARGET DETECTED
                        </div>
                        <div className="flex justify-between items-end font-mono text-[10px] text-emerald-400 font-bold bg-slate-950/80 px-2 py-1 rounded w-max">
                          CONFIDENCE: {scanProgress}%
                        </div>
                      </motion.div>

                      {/* Material Specimen Visual */}
                      <div className="relative text-6xl sm:text-7xl filter drop-shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse">
                        ⚙️
                      </div>

                      {/* HUD Corner Reticles */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-orange-500" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-orange-500" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-orange-500" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-orange-500" />
                    </div>

                    {/* Scan Details & Metrics */}
                    <div className="md:col-span-5 space-y-4">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                        <Camera size={14} /> STEP 01 — OPTICAL ANALYSIS
                      </div>
                      <h3 className="text-2xl font-bold text-white">Scanning Scrap Payload</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Computer vision models isolate density, edge geometry, contamination artifacts, and metallic surface reflection.
                      </p>

                      {/* Progress bar */}
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-xs font-mono font-bold text-slate-300">
                          <span>SCAN STATUS</span>
                          <span className="text-orange-400">{scanProgress}% COMPLETE</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/80">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                            style={{ width: `${scanProgress}%` }}
                          />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                        <span>FPS: 60.0</span>
                        <span>RESOLUTION: 3840×2160</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: AI CLASSIFICATION */}
                {state === 'grade' && (
                  <motion.div
                    key="grade"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                  >
                    <div className="md:col-span-5 space-y-4">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                        <Brain size={14} /> STEP 02 — NEURAL CLASSIFIER
                      </div>
                      <h3 className="text-2xl font-bold text-white">Material Grade Assessed</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        AI model compares structural composition against 50,000+ calibrated field datasets to assign grade and price index.
                      </p>

                      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                          94%
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold text-blue-400">HIGH CONFIDENCE MATCH</div>
                          <div className="text-sm font-semibold text-white">HMS 1 / Heavy Melting Scrap</div>
                        </div>
                      </div>
                    </div>

                    {/* Breakdown Cards */}
                    <div className="md:col-span-7 grid grid-cols-2 gap-3">
                      {[
                        { title: 'CLASSIFICATION', val: 'Ferrous Heavy Scrap', sub: 'Sub-grade 88-A', color: '#f97316' },
                        { title: 'QUALITY GRADE', val: 'Grade A+', sub: 'Clean melt profile', color: '#10b981' },
                        { title: 'CONTAMINATION', val: '1.2% (Low)', sub: 'Within tolerance', color: '#3b82f6' },
                        { title: 'ESTIMATED VALUE', val: '$468.50 / Ton', sub: 'Live Index Sync', color: '#a855f7' },
                      ].map((card, i) => (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="p-4 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden"
                        >
                          <div className="text-[10px] font-mono font-bold text-slate-500 mb-1">{card.title}</div>
                          <div className="text-lg font-bold" style={{ color: card.color }}>{card.val}</div>
                          <div className="text-xs text-slate-400 mt-1">{card.sub}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TELEMETRY WEIGHT */}
                {state === 'weight' && (
                  <motion.div
                    key="weight"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                  >
                    <div className="md:col-span-6 text-center md:text-left space-y-4">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                        <Scale size={14} /> STEP 03 — IOT WEIGHBRIDGE TELEMETRY
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cryptographic Weight Sync</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Hardware tamper-proof load cells sign weight data with digital certificates directly at scale interface.
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                          <div className="text-[9px] font-mono text-slate-500 font-bold">GROSS</div>
                          <div className="text-sm font-bold text-slate-200">3,420.0 kg</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                          <div className="text-[9px] font-mono text-slate-500 font-bold">TARE</div>
                          <div className="text-sm font-bold text-slate-200">2,172.15 kg</div>
                        </div>
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
                          <div className="text-[9px] font-mono text-purple-400 font-bold">NET MASS</div>
                          <div className="text-sm font-bold text-purple-300">1,247.85 kg</div>
                        </div>
                      </div>
                    </div>

                    {/* Weight Display Gauge */}
                    <div className="md:col-span-6 bg-slate-900 rounded-3xl p-6 border border-purple-500/30 text-center shadow-2xl relative overflow-hidden">
                      <div className="absolute top-3 right-4 font-mono text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> STABLE
                      </div>
                      <div className="text-xs font-mono font-bold text-purple-400 mb-2 tracking-widest uppercase">
                        SENSOR LOAD CELL #IMT-042
                      </div>

                      <div className="font-mono text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-indigo-300 my-3">
                        {weightValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-slate-400 font-mono text-xs font-bold tracking-widest">KILOGRAMS NET</div>

                      <div className="mt-4 pt-4 border-t border-slate-800 font-mono text-[11px] text-slate-500 flex justify-between items-center">
                        <span>HW SIGN: ed25519:9f8a...3b21</span>
                        <span className="text-purple-400 font-bold">VERIFIED ✓</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CHAIN VERIFICATION */}
                {state === 'verify' && (
                  <motion.div
                    key="verify"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-2xl mx-auto w-full space-y-5"
                  >
                    <div className="text-center space-y-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        <ShieldCheck size={14} /> STEP 04 — CRYPTOGRAPHIC VERIFICATION
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cross-Checking Security Matrix</h3>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { title: 'AI Material Grade Signature', detail: 'Ferrous Scrap HMS 1 (Confidence 94%)' },
                        { title: 'Weight Telemetry & Sensor Stamp', detail: '1,247.85 KG verified by IMT-042' },
                        { title: 'Yard Operator Authentication', detail: 'Signed by Operator ID #4892' },
                        { title: 'Geospatial GPS Coordinate Lock', detail: '19.0760° N, 72.8777° E (Mumbai Terminal)' },
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white">{item.title}</div>
                            <div className="text-xs text-slate-400 font-mono mt-0.5">{item.detail}</div>
                          </div>
                          <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center font-mono text-xs text-emerald-400 font-bold">
                      HASH GENERATED: 0x7f4a9b2c1e8d3a5f6e...98e2 (100% MATCH)
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: IMMUTABLE PASS CERTIFICATE */}
                {state === 'complete' && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xl mx-auto w-full text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
                      <CheckCircle2 size={36} />
                    </div>

                    <div>
                      <div className="font-mono text-xs font-bold text-emerald-400 tracking-widest uppercase mb-1">
                        TRANSACTION SEALED & IMMUTABLE
                      </div>
                      <h3 className="text-3xl font-black text-white">TXN #IMT-82941-2026</h3>
                    </div>

                    {/* Summary Pass Card */}
                    <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 text-left space-y-3 shadow-xl">
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div>
                          <span className="text-slate-500 block">MATERIAL TYPE</span>
                          <span className="text-white font-bold text-sm">Ferrous Scrap (HMS 1)</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">VERIFIED NET WEIGHT</span>
                          <span className="text-emerald-400 font-bold text-sm">1,247.85 KG</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">CONFIDENCE SCORE</span>
                          <span className="text-blue-400 font-bold text-sm">94.8% AI Match</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">TIMESTAMP</span>
                          <span className="text-slate-300 font-bold text-sm">28 SEP 2026 11:37 UTC</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href="/pilot"
                        className="flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all"
                      >
                        <Zap size={16} /> Request Live Field Pilot <ArrowRight size={15} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
