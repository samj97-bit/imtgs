'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const layers = [
  {
    id: 'field',
    label: 'Field Input Layer',
    inputs: ['Camera', 'Weight Sensor', 'GPS', 'Voice Input'],
    color: '#f97316',
    colorBg: '#fff7ed',
    colorBorder: '#fed7aa',
  },
  {
    id: 'edge',
    label: 'Edge / Gateway Layer',
    inputs: ['Local Pre-processing', 'Validation', 'Offline Queue'],
    color: '#8b5cf6',
    colorBg: '#f5f3ff',
    colorBorder: '#ddd6fe',
  },
  {
    id: 'ai',
    label: 'AI Engine Layer',
    inputs: ['Material Grading', 'Confidence Scoring', 'Anomaly Detection'],
    color: '#2563eb',
    colorBg: '#eff6ff',
    colorBorder: '#bfdbfe',
  },
  {
    id: 'trust',
    label: 'Trust & Ledger Layer',
    inputs: ['Digital Ledger', 'Traceability', 'Compliance Records', 'Analytics'],
    color: '#16a34a',
    colorBg: '#f0fdf4',
    colorBorder: '#bbf7d0',
  },
];

const roadmap = [
  { label: 'AI Material Grading',     status: 'live' },
  { label: 'IoT Weight Verification', status: 'live' },
  { label: 'Digital Transactions',    status: 'live' },
  { label: 'Offline Operation',       status: 'live' },
  { label: 'Traceability Records',    status: 'live' },
  { label: 'Compliance Reports',      status: 'live' },
  { label: 'Predictive Pricing',      status: 'roadmap' },
  { label: 'Anomaly Detection',       status: 'roadmap' },
  { label: 'Route Optimization',      status: 'roadmap' },
  { label: 'Verified Marketplace',    status: 'future' },
];

export default function TechSection() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 grid-overlay">
      <div className="container">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="section-badge mb-3">TECHNOLOGY ARCHITECTURE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Built at the intersection of AI, IoT and Industry 4.0.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A full-stack material intelligence system — from sensor to cloud.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Architecture diagram */}
          <div>
            <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">System Architecture</div>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <div key={layer.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-xl px-4 py-4 bg-white border border-slate-200 shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5"
                        style={{ background: layer.color }}
                      />
                      <div className="flex-1">
                        <div
                          className="font-mono text-[10px] font-bold mb-1.5 uppercase tracking-widest"
                          style={{ color: layer.color }}
                        >
                          {layer.label}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.inputs.map((inp) => (
                            <span
                              key={inp}
                              className="text-xs font-semibold px-2.5 py-1 rounded-md"
                              style={{
                                background: layer.colorBg,
                                border: `1px solid ${layer.colorBorder}`,
                                color: '#334155',
                              }}
                            >
                              {inp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 rounded-xl px-4 py-3 flex items-center gap-3 bg-green-50 border border-green-200 shadow-xs"
              >
                <div className="dot-live" />
                <div>
                  <div className="font-mono text-[10px] font-bold text-green-700 tracking-wider">
                    OUTPUT VERIFICATION
                  </div>
                  <div className="text-xs font-medium text-slate-700 mt-0.5">
                    Verified Transaction · Digital Record · Audit Analytics
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Capability Roadmap</div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="dot-live" />
                  <span className="font-mono text-[10px] font-bold text-green-700">TODAY — AVAILABLE NOW</span>
                </div>
              </div>
              <div className="px-4 py-3 space-y-2 border-b border-slate-200">
                {roadmap.filter((r) => r.status === 'live').map((r) => (
                  <div key={r.label} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <CheckCircle2 size={14} className="text-green-600 flex-shrink-0" />
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="dot-warn" />
                  <span className="font-mono text-[10px] font-bold text-orange-600">NEXT — IN DEVELOPMENT</span>
                </div>
              </div>
              <div className="px-4 py-3 space-y-2 border-b border-slate-200">
                {roadmap.filter((r) => r.status === 'roadmap').map((r) => (
                  <div key={r.label} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                    <div className="w-3.5 h-3.5 rounded-full border border-orange-400 border-dashed flex-shrink-0" />
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="dot-muted" />
                  <span className="font-mono text-[10px] font-bold text-slate-400">FUTURE — RESEARCH PHASE</span>
                </div>
                {roadmap.filter((r) => r.status === 'future').map((r) => (
                  <div key={r.label} className="flex items-center gap-2.5 text-xs font-medium text-slate-400">
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300 border-dotted flex-shrink-0" />
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl p-4 bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hardware Stack</div>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-slate-600">
                {['Load Cell', '→', 'HX711', '→', 'ESP32', '→', 'BT / Wi-Fi', '→', 'Mobile App', '→', 'Cloud'].map((t, i) => (
                  <span key={i} className={t === '→' ? 'text-slate-300' : 'font-semibold'}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
