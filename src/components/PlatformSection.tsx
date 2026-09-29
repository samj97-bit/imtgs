'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Eye, Scale, Shield } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    id: '01',
    tag: 'See',
    icon: Eye,
    title: 'AI Material Intelligence',
    headline: 'Understand what you are handling.',
    description:
      'Upload or capture a photograph of the material. The AI model classifies the material type and provides an indicative quality grade with a confidence score. When confidence is low, the system flags the transaction for human review.',
    callout: 'AI-assisted · Indicative grading · Not a laboratory analysis',
    attributes: [
      'Material classification from image',
      'Indicative quality grade',
      'Confidence score display',
      'Low-confidence human review flag',
      'Supports multiple material categories',
    ],
    color: '#f97316',
    colorBg: '#fff7ed',
    colorBorder: '#fed7aa',
    visual: (
      <div className="space-y-3">
        <div
          className="rounded-xl overflow-hidden relative shadow-xs"
          style={{ height: 130, background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <div className="absolute inset-0 grid-overlay-subtle opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-1">🔩</div>
              <div className="font-mono text-[10px] font-bold text-slate-500">FERROUS SCRAP</div>
            </div>
          </div>
          {['top-2 left-2','top-2 right-2','bottom-2 left-2','bottom-2 right-2'].map((pos, i) => (
            <div key={i} className={`absolute w-3 h-3 ${pos}`} style={{
              borderTop:    i < 2  ? '2px solid #f97316' : 'none',
              borderBottom: i >= 2 ? '2px solid #f97316' : 'none',
              borderLeft:   i%2===0 ? '2px solid #f97316' : 'none',
              borderRight:  i%2===1 ? '2px solid #f97316' : 'none',
            }} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: 'MATERIAL', v: 'Ferrous', c: '#0f172a' },
            { l: 'GRADE',    v: 'B+',      c: '#f97316' },
            { l: 'CONFIDENCE', v: '94%',   c: '#16a34a' },
          ].map((d) => (
            <div key={d.l} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-center">
              <div className="text-[9px] font-mono font-bold text-slate-400 mb-0.5">{d.l}</div>
              <div className="font-mono text-xs font-bold" style={{ color: d.c }}>{d.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg px-3 py-2 text-[10px] font-mono font-semibold bg-orange-50 border border-orange-200 text-orange-700 text-center">
          Indicative grade · AI-assisted only
        </div>
      </div>
    ),
  },
  {
    id: '02',
    tag: 'Measure',
    icon: Scale,
    title: 'IoT Weight Verification',
    headline: 'Know exactly what was measured.',
    description:
      'The IMTGS IoT interface connects to your existing weighing infrastructure — no replacement required. Every weight reading is captured with a device signature, timestamp, and calibration status.',
    callout: 'Retrofit compatible · No full replacement required',
    attributes: [
      'Works with existing weighbridge/scales',
      'Device-signed weight readings',
      'Tamper-evident timestamp',
      'Calibration status display',
      'Offline-capable with auto-sync',
    ],
    color: '#2563eb',
    colorBg: '#eff6ff',
    colorBorder: '#bfdbfe',
    visual: (
      <div className="space-y-3">
        <div
          className="rounded-xl p-4 shadow-xs"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-[10px] font-bold text-slate-400">SENSOR IMT-042</div>
            <div className="flex items-center gap-1">
              <div className="dot-live" />
              <span className="font-mono text-[10px] font-bold text-green-600">CONNECTED</span>
            </div>
          </div>
          <div className="font-mono font-black text-3xl text-center mb-1 text-slate-900 tracking-tight">
            1,247.8
          </div>
          <div className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest mb-3">KILOGRAMS</div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {[
              { l: 'Timestamp', v: '11:37:24' },
              { l: 'Calibration', v: '✓ Valid' },
            ].map((d) => (
              <div key={d.l} className="bg-white border border-slate-200 rounded-md p-2">
                <div className="text-[9px] font-mono text-slate-400 mb-0.5">{d.l}</div>
                <div className="font-mono font-bold text-slate-800">{d.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg px-3 py-2 text-[10px] font-mono font-semibold bg-blue-50 border border-blue-200 text-blue-700 text-center">
          Sensor-verified · Device-signed reading
        </div>
      </div>
    ),
  },
  {
    id: '03',
    tag: 'Prove',
    icon: Shield,
    title: 'Digital Traceability',
    headline: 'Create evidence for every transaction.',
    description:
      'Combine material identity, weight, location, and timestamp into a single verified transaction record. Each record is assigned a unique transaction ID and can be exported as a QR-linked certificate.',
    callout: 'Immutable record · QR-linked certificate',
    attributes: [
      'Unique transaction ID per record',
      'Material + grade + weight combined',
      'GPS location and timestamp',
      'QR-linked certificate export',
      'PDF and API export formats',
    ],
    color: '#16a34a',
    colorBg: '#f0fdf4',
    colorBorder: '#bbf7d0',
    visual: (
      <div className="space-y-3">
        <div
          className="rounded-xl p-4 shadow-xs"
          style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-[9px] font-bold text-green-700 tracking-wider">VERIFIED RECORD</div>
            <div className="font-mono text-xs font-bold text-orange-600">#IMT-82941</div>
          </div>
          <div className="space-y-1.5 text-[11px]">
            {[
              ['Material', 'Ferrous Scrap'],
              ['Grade', 'B+'],
              ['Weight', '1,247.8 KG'],
              ['Timestamp', '28 Sep 2026 · 11:37'],
              ['Location', 'Verified via GPS'],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between">
                <span className="text-slate-500">{l}</span>
                <span className="font-semibold text-slate-800">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 flex items-center gap-2 border-t border-green-200">
            <div className="w-8 h-8 rounded bg-white border border-green-300 flex items-center justify-center font-mono text-[8px] font-bold text-green-700">
              QR
            </div>
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Scan to verify authenticity</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PlatformSection() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="section-badge mb-3">CORE PLATFORM</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            One platform. Three layers of trust.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every material transaction verified from three independent angles — visual assessment, sensor weight, and digital record.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-2">
            {capabilities.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => setActive(i)}
                className="w-full text-left rounded-xl p-4 transition-all duration-200 shadow-xs cursor-pointer"
                style={{
                  background: active === i ? '#ffffff' : '#ffffff',
                  border: `2px solid ${active === i ? c.color : '#e2e8f0'}`,
                }}
                whileHover={{ x: active === i ? 0 : 2 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: c.colorBg,
                      border: `1px solid ${c.colorBorder}`,
                    }}
                  >
                    <c.icon size={15} style={{ color: c.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[10px] font-bold" style={{ color: c.color }}>
                        {c.id}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {c.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug">
                      {c.headline}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 h-full bg-white border border-slate-200 shadow-sm"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: cap.color }}>{cap.tag}</div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {cap.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {cap.attributes.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cap.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="rounded-lg px-3 py-2 font-mono text-[10px] font-semibold"
                      style={{
                        background: cap.colorBg,
                        border: `1px solid ${cap.colorBorder}`,
                        color: cap.color,
                      }}
                    >
                      {cap.callout}
                    </div>
                  </div>

                  <div>{cap.visual}</div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                  <Link href="/platform" className="flex items-center gap-1.5 text-xs font-bold" style={{ color: cap.color }}>
                    Explore Details <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
