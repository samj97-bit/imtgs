'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Clock, Zap } from 'lucide-react';

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'hello@imtgs.ai',          color: '#f97316' },
  { icon: Phone,   label: 'Phone',   value: '+91 98765 43210',          color: '#2563eb' },
  { icon: MapPin,  label: 'City',    value: 'Mumbai, India',             color: '#059669' },
  { icon: Clock,   label: 'Hours',   value: 'Mon–Sat, 9AM–7PM IST',     color: '#7c3aed' },
];

const inputStyle = {
  width: '100%',
  background: '#f8fafc',
  border: '1.5px solid #e2e8f0',
  borderRadius: 12,
  padding: '12px 16px',
  color: '#0f172a',
  fontSize: 14,
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f6f8fc' }}>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 grid-overlay overflow-hidden">
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(249,115,22,0.1) 0%, transparent 60%)' }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="section-badge mb-6">CONTACT US</div>
            <h1
              className="font-display font-black text-slate-900 mb-5 leading-tight"
              style={{ fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.03em' }}
            >
              Let's verify the next{' '}
              <span className="text-gradient-orange">transaction</span> together.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Reach out to discuss how IMTGS can work for your facility, or apply for our pilot program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* ── Form (3 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 rounded-3xl p-8"
              style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(15,23,42,0.08)' }}
            >
              <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">Send us a message</div>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name',     placeholder: 'John Doe',           type: 'text' },
                    { label: 'Organization',  placeholder: 'Acme Recovery Ltd',   type: 'text' },
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">{field.label}</label>
                      <input type={field.type} style={inputStyle} placeholder={field.placeholder}
                        onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#f97316'; (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; }}
                        onBlur={e => { (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'; (e.target as HTMLInputElement).style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Phone / Email</label>
                  <input type="text" style={inputStyle} placeholder="john@example.com or +91 98765 xxxxx"
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#f97316'; (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = '#e2e8f0'; (e.target as HTMLInputElement).style.boxShadow = 'none'; }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { label: 'Material Category', options: ['Metal & Scrap', 'E-Waste', 'Industrial By-product', 'Other'] },
                    { label: 'I am interested in', options: ['Pilot Program', 'Technology Demo', 'Partnership', 'Investment', 'General Enquiry'] },
                  ].map((field) => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">{field.label}</label>
                      <select style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = '#f97316'; (e.target as HTMLSelectElement).style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; }}
                        onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = '#e2e8f0'; (e.target as HTMLSelectElement).style.boxShadow = 'none'; }}
                      >
                        {field.options.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">Message</label>
                  <textarea
                    rows={4}
                    style={{ ...inputStyle, resize: 'none' }}
                    placeholder="Tell us about your operations, volume, and what problem you'd like to solve..."
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = '#f97316'; (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = '#e2e8f0'; (e.target as HTMLTextAreaElement).style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                    boxShadow: '0 6px 20px rgba(249,115,22,0.30)',
                    fontSize: 15,
                  }}
                >
                  <Zap size={16} className="fill-white" />
                  Start a Conversation
                  <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            {/* ── Contact info (2 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {/* Info cards */}
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${info.color}12` }}>
                    <info.icon size={18} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{info.label}</div>
                    <div className="font-semibold text-slate-900 text-[14px]">{info.value}</div>
                  </div>
                </motion.div>
              ))}

              {/* Response time */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="rounded-2xl p-6 mt-2"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.06), rgba(249,115,22,0.02))', border: '1px solid rgba(249,115,22,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="dot-live" />
                  <span className="text-[10.5px] font-mono font-bold text-orange-600 tracking-wider uppercase">Response Time</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We typically respond within <strong className="text-slate-900">24 business hours</strong>.
                  For urgent pilot enquiries, expect a call within the same day.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
