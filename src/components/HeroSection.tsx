'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Shield, Scale, Brain } from 'lucide-react';

const SCAN_STEPS = [
  { key: 'scan',   label: 'Scanning Material',     sub: 'AI Vision Active',        color: '#f97316' },
  { key: 'grade',  label: 'AI Assessment',          sub: 'Grade: B+ · 94% Confidence', color: '#2563eb' },
  { key: 'weight', label: 'Weight Verified',         sub: '1,247.8 KG · Sensor Signed', color: '#059669' },
  { key: 'record', label: 'Transaction Created',     sub: 'TXN #IMT-82941 · Immutable', color: '#7c3aed' },
];

function ScanningDot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ background: '#f97316', top: Math.random() * 80 + 10 + '%', left: Math.random() * 80 + 10 + '%' }}
      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 2, delay, ease: 'easeInOut' }}
    />
  );
}

function ProductMockup() {
  const [step, setStep] = useState(0);
  const [scanY, setScanY] = useState(0);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    setScanY(0); setConfidence(0);
    if (step === 0) {
      let y = 0, c = 0;
      const t = setInterval(() => {
        y += 2; c = Math.min(94, c + 2);
        setScanY(y); setConfidence(c);
        if (y >= 100) { clearInterval(t); setTimeout(() => setStep(1), 400); }
      }, 22);
      return () => clearInterval(t);
    }
    if (step >= 1 && step < 3) {
      const t = setTimeout(() => setStep(s => s + 1), 2000);
      return () => clearTimeout(t);
    }
    if (step === 3) {
      const t = setTimeout(() => setStep(0), 4000);
      return () => clearTimeout(t);
    }
  }, [step]);

  const currentStep = SCAN_STEPS[step];

  return (
    <div className="relative" style={{ maxWidth: 420, margin: '0 auto' }}>
      {/* Floating ambient glow */}
      <div
        className="absolute -inset-8 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${currentStep.color}22 0%, transparent 70%)`,
          transition: 'background 0.8s ease',
          filter: 'blur(20px)',
        }}
      />

      {/* Main Card */}
      <motion.div
        className="rounded-2xl overflow-hidden relative"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          boxShadow: '0 24px 60px rgba(15,23,42,0.10), 0 8px 20px rgba(15,23,42,0.06)',
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbfc' }}>
          <div className="flex gap-1.5">
            {['#f87171','#fbbf24','#34d399'].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="font-mono text-[10px] font-semibold text-slate-400 tracking-wider">
            IMTGS · SCAN INTERFACE v1.0
          </div>
          <div className="flex items-center gap-1.5">
            <span className="dot-live" />
            <span className="font-mono text-[10px] font-bold text-emerald-600">LIVE</span>
          </div>
        </div>

        {/* Scan Viewport */}
        <div className="relative" style={{ height: 180, background: '#f1f5f9', overflow: 'hidden' }}>
          <div className="absolute inset-0 grid-overlay-subtle opacity-50" />

          {/* Material visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-xl flex items-center justify-center shadow-sm"
              animate={{ scale: step === 0 ? [1, 1.02, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ width: 110, height: 84, background: '#ffffff', border: '1px solid #cbd5e1' }}
            >
              <div className="font-mono text-[10px] text-center text-slate-500">
                <div className="text-4xl mb-1">🔩</div>
                <div className="font-bold tracking-widest text-[9px]">MATERIAL</div>
              </div>
            </motion.div>
          </div>

          {/* Corner brackets */}
          {[
            { top: 16, left: 16,  borderTop: true,  borderLeft: true  },
            { top: 16, right: 16, borderTop: true,  borderRight: true },
            { bottom: 16, left: 16,  borderBottom: true, borderLeft: true  },
            { bottom: 16, right: 16, borderBottom: true, borderRight: true },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="absolute w-5 h-5"
              animate={{ opacity: step === 0 ? [1, 0.5, 1] : 1 }}
              transition={{ repeat: step === 0 ? Infinity : 0, duration: 1, delay: i * 0.1 }}
              style={{
                top: b.top, left: b.left, right: b.right, bottom: b.bottom,
                borderTop:    b.borderTop    ? `2px solid ${currentStep.color}` : 'none',
                borderBottom: b.borderBottom ? `2px solid ${currentStep.color}` : 'none',
                borderLeft:   b.borderLeft   ? `2px solid ${currentStep.color}` : 'none',
                borderRight:  b.borderRight  ? `2px solid ${currentStep.color}` : 'none',
                transition: 'border-color 0.5s ease',
              }}
            />
          ))}

          {/* Scan line */}
          {step === 0 && (
            <div
              className="absolute left-0 right-0"
              style={{
                top: `${scanY}%`,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${currentStep.color}, transparent)`,
                boxShadow: `0 0 12px ${currentStep.color}`,
              }}
            />
          )}

          {/* Floating scan dots */}
          {step === 0 && [0, 0.3, 0.6, 0.9].map((d, i) => <ScanningDot key={i} delay={d} />)}

          {/* Status bar */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2" style={{ background: 'rgba(15,23,42,0.82)', backdropFilter: 'blur(8px)' }}>
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-wider" style={{ color: currentStep.color }}>
                {currentStep.sub.toUpperCase()}
              </div>
              <div className="font-mono text-[10px] text-white/50">{step === 0 ? `${confidence}%` : '✓ DONE'}</div>
            </div>
          </div>
        </div>

        {/* Step progress indicators */}
        <div className="px-5 pt-4 pb-2 flex gap-1.5">
          {SCAN_STEPS.map((s, i) => (
            <div
              key={s.key}
              className="h-1 flex-1 rounded-full transition-all duration-600"
              style={{ background: i <= step ? currentStep.color : '#e2e8f0' }}
            />
          ))}
        </div>

        {/* Data Panel */}
        <div className="px-5 pb-5">
          <div className="text-[10px] font-mono font-bold mb-3 tracking-widest" style={{ color: currentStep.color }}>
            STEP {step + 1}/4 — {currentStep.label.toUpperCase()}
          </div>

          {step === 0 && (
            <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-2 rounded-full overflow-hidden bg-slate-100">
                  <motion.div className="h-full rounded-full" style={{ background: '#f97316', width: `${scanY}%` }} />
                </div>
                <span className="font-mono text-xs font-bold text-orange-600 w-8 text-right">{scanY}%</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">Analyzing visual patterns · Multi-layer classification</div>
            </motion.div>
          )}

          {step >= 1 && (
            <motion.div key="results" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <div className="grid grid-cols-3 gap-2 mb-2.5">
                {[
                  { l: 'MATERIAL', v: 'Ferrous', c: '#0f172a' },
                  { l: 'GRADE',    v: 'B+',      c: '#f97316' },
                  { l: 'CONF.',    v: '94%',     c: '#059669' },
                ].map((d) => (
                  <div key={d.l} className="text-center rounded-xl p-2" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div className="text-[8.5px] font-mono font-bold text-slate-400 mb-1">{d.l}</div>
                    <div className="font-mono font-black text-[11px]" style={{ color: d.c }}>{d.v}</div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">AI classification · indicative grade · ±0.5%</div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Floating Weight Card */}
      <motion.div
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="mt-3 rounded-xl px-4 py-3 flex items-center justify-between"
        style={{ background: '#ffffff', border: '1px solid #bfdbfe', boxShadow: '0 4px 16px rgba(37,99,235,0.08)' }}
      >
        <div>
          <div className="text-[9px] font-mono font-bold text-blue-400 tracking-wider mb-1">IoT SENSOR · IMT-042</div>
          <div className="font-mono font-black text-xl text-slate-900">1,247.8 <span className="text-xs font-semibold text-slate-400">KG</span></div>
        </div>
        <div className="flex items-center gap-2">
          <Scale size={14} className="text-blue-500" />
          <div className="badge-verified text-[10px]">Verified</div>
        </div>
      </motion.div>

      {/* Floating TXN Card */}
      <motion.div
        animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="mt-3 rounded-xl px-4 py-3"
        style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #a7f3d0' }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-[9px] font-bold text-emerald-700 tracking-wider">✓ TRANSACTION COMPLETE</div>
          <div className="font-mono text-[10px] font-bold text-orange-600">#IMT-82941</div>
        </div>
        <div className="grid grid-cols-3 gap-1 text-[9.5px] text-slate-600">
          {['Material ✓', 'Grade ✓', 'Weight ✓', 'GPS ✓', 'Time ✓', 'Sensor ✓'].map((f) => (
            <div key={f} className="flex items-center gap-1 font-medium">{f}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Animated stat counter ── */
function StatCounter({ value, suffix = '', color }: { value: string; suffix?: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="font-display font-black text-2xl leading-none mb-1" style={{ color }}>
        {value}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const stats = [
    { value: '94%',   label: 'AI Confidence',    color: '#f97316' },
    { value: '±0.1%', label: 'Weight Precision',  color: '#2563eb' },
    { value: '100%',  label: 'Traceable Records', color: '#059669' },
  ];

  const features = [
    { icon: Brain,  text: 'AI Material Grading',     color: '#f97316' },
    { icon: Scale,  text: 'IoT Weight Verification',  color: '#2563eb' },
    { icon: Shield, text: 'Digital Traceability',      color: '#059669' },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 100, paddingBottom: 80, background: '#f6f8fc' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(249,115,22,0.08) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(37,99,235,0.08) 0%, transparent 60%)',
        }}
      />

      <motion.div style={{ y, opacity }} className="container-wide w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-wrap items-center gap-2 mb-7"
            >
              <div className="section-badge">
                <Zap size={11} />
                AI · IoT · Material Intelligence
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10.5px] font-bold">
                <span className="dot-live" />
                Field Validation Active
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
            >
              Every Material.{' '}
              <span className="text-gradient-orange">Verified.</span>
              <br />
              Traceable.{' '}
              <span className="text-gradient-blue">Intelligent.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}
            >
              AI-powered material grading and IoT-verified transactions — eliminating disputes,
              building trust, and creating a fully digital supply chain for MSMEs.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold text-slate-700"
                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}
                >
                  <f.icon size={13} style={{ color: f.color }} />
                  {f.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.33 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/pilot" className="btn btn-primary btn-lg flex items-center gap-2">
                Request a Pilot
                <ArrowRight size={17} />
              </Link>
              <Link href="/platform" className="btn btn-secondary btn-lg flex items-center gap-2">
                <Brain size={16} />
                Explore Platform
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: '1px solid #e2e8f0' }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono font-black text-2xl mb-1 leading-none" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-[10.5px] font-bold text-slate-400 tracking-wider uppercase leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Product Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <ProductMockup />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 rounded-full bg-gradient-to-b from-slate-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}
