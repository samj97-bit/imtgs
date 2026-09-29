'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Scale, Brain } from 'lucide-react';

const features = [
  { icon: Brain,  label: 'AI Material Grading',    color: '#f97316' },
  { icon: Scale,  label: 'IoT Weight Verified',    color: '#2563eb' },
  { icon: Shield, label: 'Immutable Records',       color: '#059669' },
  { icon: Zap,    label: 'Offline-First Mobile',   color: '#7c3aed' },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '96px 0', background: '#0f172a' }}>
      {/* Background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div
        className="absolute -top-32 left-1/4 w-96 h-96 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-80 h-80 pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10.5px] font-mono font-bold tracking-widest uppercase mb-8"
            style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', color: '#f97316' }}>
            <Zap size={11} className="fill-orange-500" />
            Join the Field Validation Program
          </div>

          <h2
            className="font-display font-black text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.03em' }}
          >
            Start Verifying Every
            <span style={{ color: '#f97316' }}> Material.</span>
            <br />
            Build Unbreakable Trust.
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Join our field validation program. Get early access to IMTGS and help shape
            the future of material intelligence for your industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pilot"
              className="btn btn-lg flex items-center gap-2.5 font-bold"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#fff',
                boxShadow: '0 6px 24px rgba(249,115,22,0.35)',
                borderRadius: 14,
                padding: '14px 32px',
                fontSize: 15,
              }}
            >
              <Zap size={16} className="fill-white" />
              Request Free Pilot
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg flex items-center gap-2.5 font-bold"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: 14,
                padding: '14px 32px',
                fontSize: 15,
              }}
            >
              Talk to Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${f.color}1a` }}
              >
                <f.icon size={14} style={{ color: f.color }} />
              </div>
              <span className="text-slate-300 text-[13px] font-semibold">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
