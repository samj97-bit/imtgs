import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const productLinks = [
  { label: 'Platform Overview', href: '/platform' },
  { label: 'How It Works',      href: '/how-it-works' },
  { label: 'Technology',        href: '/technology' },
  { label: 'Solutions',         href: '/solutions' },
  { label: 'Impact',            href: '/impact' },
];
const companyLinks = [
  { label: 'About IMTGS',    href: '/about' },
  { label: 'Pilot Program',  href: '/pilot' },
  { label: 'Contact Us',     href: '/contact' },
];
const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use',   href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1c', color: '#94a3b8' }}>
      {/* Main footer body */}
      <div className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  boxShadow: '0 4px 12px rgba(249,115,22,0.28)',
                }}
              >
                <svg width="17" height="17" viewBox="0 0 14 14" fill="none">
                  <polygon points="7,1 13,4 13,10 7,13 1,10 1,4" stroke="white" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="1.8" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-black text-white text-base leading-none tracking-tight group-hover:text-orange-400 transition-colors">
                  IMTGS
                </div>
                <div className="font-mono text-[8.5px] font-bold leading-none mt-1 tracking-widest uppercase text-orange-500">
                  Material Intelligence
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Building the digital trust layer for material recovery —
              AI grading, IoT verification, and full traceability for MSMEs.
            </p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[10.5px] font-bold mb-6"
              style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(5,150,105,0.25)', color: '#34d399' }}>
              <span className="dot-live" />
              Platform in Field Validation
            </div>

            {/* Contact */}
            <div className="space-y-2">
              {[
                { icon: Mail, text: 'hello@imtgs.ai' },
                { icon: Phone, text: '+91 98765 43210' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[12.5px] text-slate-500">
                  <Icon size={12} className="text-slate-600 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-5">Product</div>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-5">Company</div>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-5">Legal</div>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-5">Stay Updated</div>
            <p className="text-[12.5px] text-slate-500 mb-4 leading-relaxed">
              Get product updates and pilot program announcements.
            </p>
            <Link
              href="/pilot"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-[12.5px] font-bold text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                boxShadow: '0 4px 14px rgba(249,115,22,0.25)',
              }}
            >
              Join Pilot Program <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-slate-600">
            <span>© 2026 IMTGS. All rights reserved.</span>
            <span className="hidden sm:block">·</span>
            <span className="hidden sm:block">Intelligent Material Traceability & Grading System</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="font-mono text-[10px] text-slate-600 font-bold">v0.9 · DEMO BUILD</div>
            <div
              className="px-2.5 py-1 rounded-full font-mono text-[9px] font-bold"
              style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}
            >
              BETA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
