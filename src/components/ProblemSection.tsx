'use client';
import { motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

const before = [
  'Manual weight estimate',
  'Visual quality guess',
  'Verbal negotiation',
  'Paper or WhatsApp record',
  'Dispute — no evidence',
  'Missing documentation',
];

const after = [
  'Material capture — camera',
  'AI-assisted grade assessment',
  'Sensor-verified weight',
  'Digital transaction record',
  'Immutable traceability log',
  'Compliance-ready documentation',
];

function FlowColumn({
  title,
  tag,
  items,
  isAfter = false,
}: {
  title: string;
  tag: string;
  items: string[];
  isAfter?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className="px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase"
          style={{
            background: isAfter ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${isAfter ? '#bbf7d0' : '#fecaca'}`,
            color: isAfter ? '#16a34a' : '#ef4444',
          }}
        >
          {tag}
        </div>
        <div className="text-lg font-bold text-slate-900">
          {title}
        </div>
      </div>

      <div className="space-y-0">
        {items.map((item, i) => (
          <div key={item}>
            <motion.div
              initial={{ opacity: 0, x: isAfter ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl px-4 py-3 shadow-xs"
              style={{
                background: isAfter ? '#ffffff' : '#ffffff',
                border: `1px solid ${isAfter ? '#bbf7d0' : '#fee2e2'}`,
              }}
            >
              <div
                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold"
                style={{
                  background: isAfter ? '#f0fdf4' : '#fef2f2',
                  color: isAfter ? '#16a34a' : '#ef4444',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </motion.div>
            {i < items.length - 1 && (
              <div
                className="w-px h-3 ml-7"
                style={{
                  background: isAfter ? '#bbf7d0' : '#fecaca',
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div
        className="mt-4 rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-xs"
        style={{
          background: isAfter ? '#f0fdf4' : '#fef2f2',
          border: `1px solid ${isAfter ? '#bbf7d0' : '#fecaca'}`,
        }}
      >
        {isAfter ? (
          <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
        ) : (
          <X size={16} className="text-red-500 flex-shrink-0" />
        )}
        <span className="text-xs font-semibold" style={{ color: isAfter ? '#15803d' : '#b91c1c' }}>
          {isAfter ? 'Compliance-ready verified record' : 'Lost record — no digital evidence'}
        </span>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  return (
    <section className="py-24 grid-overlay bg-white border-y border-slate-200">
      <div className="container">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="section-badge mb-3">THE INDUSTRY CHALLENGE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
            The physical material industry runs on paper, trust, and memory.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Manual workflows create disputes, missing records, and untraceable transactions.
            IMTGS replaces that broken workflow with a verifiable digital layer.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl mx-auto">
          <FlowColumn
            title="Traditional Process"
            tag="UNVERIFIED"
            items={before}
          />

          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-px flex-1 bg-slate-200" />
            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-orange-50 border border-orange-200 my-4 shadow-xs">
              <ArrowRight size={16} className="text-orange-500" />
            </div>
            <div className="w-px flex-1 bg-slate-200" />
          </div>

          <FlowColumn
            title="IMTGS Platform"
            tag="VERIFIED WORKFLOW"
            items={after}
            isAfter
          />
        </div>
      </div>
    </section>
  );
}
