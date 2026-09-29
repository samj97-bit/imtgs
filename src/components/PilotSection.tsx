'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Zap, Clock, Users, ChevronRight } from 'lucide-react';

const pilotSteps = [
  { id: '01', title: 'Site Assessment',       desc: 'We evaluate your facility, existing equipment, and daily transaction volume.',           color: '#f97316' },
  { id: '02', title: 'Device Setup',           desc: 'IMTGS IoT module retrofits onto your existing weighbridge — no replacement needed.',      color: '#2563eb' },
  { id: '03', title: 'Operator Onboarding',   desc: 'Your field team is trained on the mobile app — offline capable and multilingual.',        color: '#7c3aed' },
  { id: '04', title: 'Live Transactions',     desc: 'Begin recording fully verified transactions with dedicated support from our team.',       color: '#059669' },
  { id: '05', title: 'Performance Analysis',  desc: 'Detailed pilot report with metrics, learnings and recommended next steps.',              color: '#f97316' },
];

const eligible = [
  'Material aggregators',
  'Scrap yard operators',
  'Recovery units',
  'Processing facilities',
  'E-waste collection operations',
];

const benefits = [
  { icon: Zap,   label: '3 Months Free',  sub: 'No upfront cost',     color: '#f97316' },
  { icon: Clock, label: 'Fast Setup',     sub: '< 2 days deployment', color: '#2563eb' },
  { icon: Users, label: 'White-Glove',   sub: 'Dedicated support',   color: '#059669' },
];

export default function PilotSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '96px 0', background: '#f6f8fc' }}
    >
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-badge mb-5">PILOT PROGRAM</div>
          <h2
            className="font-display font-black text-slate-900 mb-5 leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', letterSpacing: '-0.03em' }}
          >
            Bring IMTGS to your operation.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Join our field validation program and get early access to the full IMTGS platform
            — with dedicated onboarding and zero upfront cost.
          </p>
        </motion.div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14"
        >
          {benefits.map((b, i) => (
            <div
              key={b.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.06)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${b.color}12` }}
              >
                <b.icon size={18} style={{ color: b.color }} />
              </div>
              <div className="font-display font-bold text-slate-900 text-sm mb-0.5">{b.label}</div>
              <div className="text-[11px] text-slate-400 font-medium">{b.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Eligibility */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl p-8 h-full" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}>
              <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-5">Who Can Participate</div>
              <ul className="space-y-3 mb-8">
                {eligible.map((e) => (
                  <li key={e} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                    </div>
                    <span className="text-[13.5px] font-medium text-slate-700">{e}</span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-2xl p-5 mb-6"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(249,115,22,0.02))', border: '1px solid rgba(249,115,22,0.18)' }}
              >
                <div className="text-[10px] font-mono font-bold text-orange-500 tracking-wider mb-2">PILOT TERMS</div>
                <ul className="space-y-1.5">
                  {[
                    'First 3 months completely free',
                    'No hardware purchase required',
                    'Dedicated onboarding specialist',
                    'Priority product feedback channel',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-[12.5px] text-slate-600 font-medium">
                      <ChevronRight size={12} className="text-orange-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn btn-primary w-full justify-center gap-2 font-bold">
                Apply for Pilot
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right: Onboarding Steps */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl p-8" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}>
              <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">Onboarding Journey</div>
              <div className="space-y-0">
                {pilotSteps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-xl font-mono text-[11px] font-black flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`, boxShadow: `0 4px 10px ${step.color}33` }}
                      >
                        {step.id}
                      </div>
                      {i < pilotSteps.length - 1 && (
                        <div className="w-px flex-1 my-2" style={{ background: `${step.color}30` }} />
                      )}
                    </div>
                    <div className="pb-6 flex-1 pt-1">
                      <div className="font-semibold text-[13.5px] text-slate-900 mb-1">{step.title}</div>
                      <p className="text-[12.5px] text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
