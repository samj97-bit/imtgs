'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Camera, Brain, Scale, MapPin, FileCheck } from 'lucide-react';

const steps = [
  {
    id: '01',
    label: 'Capture',
    icon: Camera,
    color: '#f97316',
    colorBg: '#fff7ed',
    colorBorder: '#fed7aa',
    description: 'Field operator photographs the material using the IMTGS mobile app. GPS coordinates and timestamp are captured automatically.',
    note: 'Works on standard Android devices.',
    visual: (
      <div className="rounded-xl overflow-hidden shadow-xs" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
        <div className="relative" style={{ height: 120, background: '#f1f5f9' }}>
          <div className="absolute inset-0 grid-overlay-subtle opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl">📷</div>
          </div>
        </div>
        <div className="px-3 py-2.5 bg-white border-t border-slate-200">
          <div className="font-mono text-[10px] font-bold text-slate-400 tracking-wider">LOCATION CAPTURED</div>
          <div className="font-mono text-xs font-semibold text-slate-700 mt-0.5">19.0760°N 72.8777°E · 11:37:08</div>
        </div>
      </div>
    ),
  },
  {
    id: '02',
    label: 'Analyze',
    icon: Brain,
    color: '#2563eb',
    colorBg: '#eff6ff',
    colorBorder: '#bfdbfe',
    description: 'The AI model analyzes the image and returns a material classification, indicative grade, and a confidence score.',
    note: 'AI-assisted · Indicative grade only.',
    visual: (
      <div className="rounded-xl p-3.5 space-y-2 bg-white border border-slate-200 shadow-xs">
        <div className="flex justify-between items-center">
          <div className="font-mono text-[10px] font-bold text-slate-400">AI OUTPUT</div>
          <div className="badge badge-verified">94% confidence</div>
        </div>
        {[
          { l: 'MATERIAL TYPE', v: 'Ferrous Scrap', c: '#0f172a' },
          { l: 'GRADE',         v: 'B+',            c: '#f97316' },
          { l: 'ASSESSMENT',    v: 'Indicative',    c: '#64748b' },
        ].map((d) => (
          <div key={d.l} className="flex justify-between items-center py-1.5 border-b border-slate-100">
            <span className="text-[9px] font-mono font-bold text-slate-400">{d.l}</span>
            <span className="font-mono text-xs font-bold" style={{ color: d.c }}>{d.v}</span>
          </div>
        ))}
        <div className="font-mono text-[9px] font-medium text-slate-400 pt-1">
          Human review available · Not a laboratory test
        </div>
      </div>
    ),
  },
  {
    id: '03',
    label: 'Verify',
    icon: Scale,
    color: '#8b5cf6',
    colorBg: '#f5f3ff',
    colorBorder: '#ddd6fe',
    description: 'The IMTGS IoT interface captures the verified weight from your existing weighbridge with a device digital signature.',
    note: 'Retrofit compatible. No replacement needed.',
    visual: (
      <div className="rounded-xl p-4 text-center bg-white border border-slate-200 shadow-xs">
        <div className="text-[9px] font-mono font-bold text-slate-400 mb-1">SENSOR IMT-042</div>
        <div className="font-mono font-black text-3xl text-purple-700 tracking-tight">1,247.8</div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">KILOGRAMS</div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          {[['Timestamp','11:37:24'],['Calibration','✓ Valid']].map(([l,v]) => (
            <div key={l} className="rounded-md px-2 py-1.5 bg-purple-50 border border-purple-100">
              <div className="text-[9px] font-mono text-slate-400 mb-0.5">{l}</div>
              <div className="font-mono text-xs font-bold text-slate-800">{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: '04',
    label: 'Record',
    icon: MapPin,
    color: '#16a34a',
    colorBg: '#f0fdf4',
    colorBorder: '#bbf7d0',
    description: 'Material, grade, weight, GPS location, and timestamp are compiled into a single transaction record.',
    note: 'Offline-first. Syncs automatically when online.',
    visual: (
      <div className="rounded-xl p-3.5 space-y-1.5 bg-white border border-slate-200 shadow-xs">
        <div className="font-mono text-[10px] font-bold text-green-700">RECORD ASSEMBLED</div>
        {['Material: Ferrous Scrap','Grade: B+','Weight: 1,247.8 KG','GPS: 19.07°N 72.87°E','Time: 28 Sep · 11:37:24'].map((line) => (
          <div key={line} className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            {line}
          </div>
        ))}
        <div className="font-mono text-[10px] font-bold text-green-600 pt-1">
          OFFLINE MODE · Queued for sync
        </div>
      </div>
    ),
  },
  {
    id: '05',
    label: 'Generate',
    icon: FileCheck,
    color: '#f97316',
    colorBg: '#fff7ed',
    colorBorder: '#fed7aa',
    description: 'A digital transaction record and QR-linked verification certificate are generated for compliance and auditing.',
    note: 'PDF export · API available · QR certificate',
    visual: (
      <div className="rounded-xl p-4 bg-f0fdf4 border border-green-200 bg-white shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="font-mono text-[9px] font-bold text-green-700 tracking-wider">VERIFIED RECORD</div>
          <div className="font-mono text-xs font-bold text-orange-600">#IMT-82941</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3 text-xs font-medium text-slate-600">
          {['Material ✓','Grade ✓','Weight ✓','Location ✓','Timestamp ✓','Sensor ✓'].map((f) => (
            <div key={f} className="flex items-center gap-1.5">
              {f}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
          <div className="w-9 h-9 rounded bg-green-50 border border-green-200 flex items-center justify-center font-mono text-[9px] font-bold text-green-700">
            QR
          </div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Scan to verify authenticity</div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="section-badge mb-3">WORKFLOW PROCESS</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            Five steps. One verified record.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From material capture to compliance-ready record in under three minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-1.5">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActive(i)}
                className="w-full text-left flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-200 cursor-pointer shadow-xs"
                style={{
                  background: active === i ? '#ffffff' : '#ffffff',
                  border: `2px solid ${active === i ? step.color : '#e2e8f0'}`,
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: step.colorBg,
                    border: `1px solid ${step.colorBorder}`,
                  }}
                >
                  <step.icon size={15} style={{ color: step.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold" style={{ color: step.color }}>
                      {step.id}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {step.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 shadow-sm"
              >
                <div className="flex gap-1.5 mb-6">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-400"
                      style={{ background: i <= active ? s.color : '#e2e8f0' }}
                    />
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: s.color }}>Step {s.id}</div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                      {s.label}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {s.description}
                    </p>
                    <div
                      className="rounded-lg px-3 py-2 font-mono text-[10px] font-semibold"
                      style={{ background: s.colorBg, border: `1px solid ${s.colorBorder}`, color: s.color }}
                    >
                      {s.note}
                    </div>
                  </div>
                  <div>{s.visual}</div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200 justify-between">
                  <button
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                    className="btn btn-secondary text-xs disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                    disabled={active === steps.length - 1}
                    className="btn btn-primary text-xs"
                  >
                    Next step
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
