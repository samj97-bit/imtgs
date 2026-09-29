'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Zap, Users, Globe, Shield } from 'lucide-react';

const values = [
  { icon: Shield,  label: 'Verifiability First', desc: 'Every claim is backed by sensor data, AI analysis, or a digital audit trail.', color: '#f97316' },
  { icon: Users,   label: 'Built for MSMEs',     desc: 'Designed for the people who actually move physical material — not just enterprises.',  color: '#2563eb' },
  { icon: Globe,   label: 'Open Standards',      desc: 'We believe in interoperability and avoiding lock-in for the communities we serve.',     color: '#059669' },
  { icon: Zap,     label: 'Offline-First',       desc: 'Works in low-connectivity field environments — data syncs when online.',               color: '#7c3aed' },
];

const team = [
  { name: 'Sajibur Rahman',   role: 'Founder & CEO',          initials: 'SR', color: '#f97316' },
  { name: 'Priya Menon',      role: 'Head of AI Research',    initials: 'PM', color: '#2563eb' },
  { name: 'Ankit Sharma',     role: 'IoT Engineering Lead',   initials: 'AS', color: '#059669' },
  { name: 'Fatima Al-Rashid', role: 'Operations & Pilots',    initials: 'FA', color: '#7c3aed' },
];

const metrics = [
  { value: '7+', label: 'Pilot Sites', color: '#f97316' },
  { value: '12K+', label: 'Transactions Recorded', color: '#2563eb' },
  { value: '4', label: 'Industry Sectors', color: '#059669' },
  { value: '3', label: 'Cities in India', color: '#7c3aed' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f6f8fc' }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20 grid-overlay"
        style={{ background: '#f6f8fc' }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%)' }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="section-badge mb-6">ABOUT IMTGS</div>
            <h1
              className="font-display font-black text-slate-900 mb-6 leading-tight"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.03em' }}
            >
              Building the digital{' '}
              <span className="text-gradient-blue">trust layer</span>{' '}
              for material recovery.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-8">
              IMTGS is a material intelligence platform that makes every scrap transaction,
              weight reading, and grade assessment verifiable, traceable, and digital.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pilot" className="btn btn-primary btn-lg flex items-center gap-2">
                Join Pilot Program <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <div style={{ background: '#0f172a' }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display font-black text-3xl mb-1" style={{ color: m.color }}>{m.value}</div>
                <div className="text-[11.5px] text-slate-400 font-bold uppercase tracking-wider">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Target, color: '#f97316',
                label: 'Our Mission',
                text: 'Make material recovery measurable, transparent and traceable through affordable frontier technology — accessible to every MSME, not just large enterprises.',
              },
              {
                icon: Eye, color: '#2563eb',
                label: 'Our Vision',
                text: 'A world where every recovered material carries a verifiable digital history — building trust from the weighbridge to the mill, and enabling a truly circular economy.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl p-8"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${card.color}12` }}
                >
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-3">{card.label}</h2>
                <p className="text-slate-600 leading-relaxed text-[15px]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header mb-14">
            <div className="section-badge">OUR PRINCIPLES</div>
            <h2>What guides how we build.</h2>
            <p>Four principles that shape every product decision at IMTGS.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 card-interactive"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${v.color}12` }}
                >
                  <v.icon size={18} style={{ color: v.color }} />
                </div>
                <h3 className="font-display font-bold text-[14.5px] text-slate-900 mb-2">{v.label}</h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20">
        <div className="container">
          <div className="section-header mb-14">
            <div className="section-badge">THE TEAM</div>
            <h2>People building IMTGS.</h2>
            <p>A small, focused team combining AI, hardware, and industry expertise.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`, boxShadow: `0 6px 16px ${member.color}30` }}
                >
                  {member.initials}
                </div>
                <div className="font-display font-bold text-slate-900 text-[14px] mb-1">{member.name}</div>
                <div className="text-[11.5px] text-slate-400 font-medium">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
