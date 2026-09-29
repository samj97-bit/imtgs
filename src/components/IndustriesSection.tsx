'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, FileCheck, Shield, BarChart3 } from 'lucide-react';

const industries = [
  {
    id: 'metal',
    emoji: '🔩',
    category: 'Metal & Scrap',
    description: 'AI-assisted grading for ferrous and non-ferrous scrap. Sensor-verified weight recording with full chain-of-custody documentation.',
    capabilities: ['Multi-grade ferrous classification', 'Non-ferrous identification', 'Verified weight per lot', 'Transaction traceability'],
    stat: { value: '45%', label: 'of volume' },
    color: '#f97316',
    colorBg: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
    colorBorder: '#fed7aa',
  },
  {
    id: 'ewaste',
    emoji: '💻',
    category: 'E-Waste',
    description: 'Structured material identification and recovery documentation for electronic waste. Chain-of-custody records for regulatory compliance.',
    capabilities: ['Material category identification', 'Component-level record', 'Recovery chain tracking', 'Compliance documentation'],
    stat: { value: '28%', label: 'of volume' },
    color: '#2563eb',
    colorBg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    colorBorder: '#bfdbfe',
  },
  {
    id: 'industrial',
    emoji: '🏭',
    category: 'Industrial By-Products',
    description: 'Digital documentation and material movement visibility for industrial waste streams. Batch tracking and process-level recording.',
    capabilities: ['Batch and lot tracking', 'Process documentation', 'Movement records', 'Material characterization'],
    stat: { value: '27%', label: 'of volume' },
    color: '#059669',
    colorBg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    colorBorder: '#a7f3d0',
  },
];

const impactItems = [
  { icon: FileCheck, metric: 'Digital Records',       description: 'Every transaction captured with a digital timestamp, replacing paper-based documentation.',     color: '#f97316' },
  { icon: Shield,    metric: 'Verified Weight',        description: 'Sensor-signed weight readings reduce disputes caused by manual estimation errors.',              color: '#2563eb' },
  { icon: TrendingUp,metric: 'Material Traceability',  description: 'A clear chain-of-custody from collection point to processing facility — always.',              color: '#059669' },
  { icon: BarChart3, metric: 'Compliance Ready',       description: 'Structured records designed to support regulatory, audit, and ESG reporting requirements.',    color: '#7c3aed' },
];

export default function IndustriesSection() {
  return (
    <>
      {/* ── Industries ── */}
      <section className="py-24" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header mb-16">
            <div className="section-badge">SECTOR SOLUTIONS</div>
            <h2>Built for industries that move physical material.</h2>
            <p>Three material recovery sectors. One consistent verification layer powering every transaction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
                style={{ border: `1px solid ${ind.colorBorder}`, boxShadow: '0 4px 20px rgba(15,23,42,0.06)' }}
              >
                {/* Card header */}
                <div
                  className="px-6 py-7 relative overflow-hidden"
                  style={{ background: ind.colorBg }}
                >
                  <div className="text-5xl mb-3">{ind.emoji}</div>
                  <div
                    className="inline-block px-3 py-1 rounded-lg mb-2 font-mono text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: '#ffffff', color: ind.color, border: `1px solid ${ind.colorBorder}` }}
                  >
                    {ind.category}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="font-display font-black text-2xl" style={{ color: ind.color }}>{ind.stat.value}</div>
                    <div className="text-[11.5px] text-slate-500 font-semibold mt-0.5">{ind.stat.label}</div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white px-6 py-5 flex flex-col justify-between h-full">
                  <p className="text-[13.5px] text-slate-600 leading-relaxed mb-5">{ind.description}</p>
                  <ul className="space-y-2 mb-6">
                    {ind.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-[12.5px] font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/solutions"
                    className="flex items-center gap-1.5 text-[12.5px] font-bold pt-4"
                    style={{ color: ind.color, borderTop: `1px solid ${ind.colorBorder}` }}
                  >
                    Explore solution <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="py-24" style={{ background: '#f6f8fc' }}>
        <div className="container">
          <div className="section-header mb-16">
            <div className="section-badge">OPERATIONAL IMPACT</div>
            <h2>Measurable operational outcomes.</h2>
            <p>Not generic sustainability claims. Concrete improvements to how material businesses operate every day.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {impactItems.map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-interactive rounded-2xl p-6"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}12` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div className="font-display font-bold text-slate-900 text-[15px] mb-2">{item.metric}</div>
                <p className="text-[12.5px] text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
