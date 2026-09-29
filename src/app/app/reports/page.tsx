'use client';
import { motion } from 'framer-motion';
import { Download, Calendar, FileText, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { month: 'Mar', txns: 234, weight: 2210, revenue: 342000 },
  { month: 'Apr', txns: 198, weight: 1980, revenue: 298000 },
  { month: 'May', txns: 312, weight: 3120, revenue: 487000 },
  { month: 'Jun', txns: 289, weight: 2840, revenue: 412000 },
  { month: 'Jul', txns: 354, weight: 3560, revenue: 534000 },
  { month: 'Aug', txns: 401, weight: 4020, revenue: 612000 },
  { month: 'Sep', txns: 487, weight: 4870, revenue: 748000 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black font-display text-slate-900">Compliance & Audit Reports</h1>
          <p className="text-sm text-slate-500 font-medium">Export verified PDF audit trails and ESG compliance certificates</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-extrabold shadow-xs transition-colors">
            <Calendar size={14} /> Q3 FY2026
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all">
            <Download size={14} /> Export Audit Package
          </button>
        </div>
      </div>

      {/* Summary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Verified Txns', value: '2,275', change: '+24%', color: '#f97316' },
          { label: 'Material Processed', value: '22,600 T', change: '+18%', color: '#2563eb' },
          { label: 'Avg Quality Score', value: 'Grade B+', change: '+0.3 pts', color: '#059669' },
          { label: 'ESG Compliance Rating', value: '97.8%', change: '+2.1%', color: '#7c3aed' },
        ].map((kpi) => (
          <div key={kpi.label} className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{kpi.label}</div>
            <div className="font-display font-black text-2xl text-slate-900 mb-1">{kpi.value}</div>
            <div className="text-xs font-bold text-emerald-600">{kpi.change} vs previous period</div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
          <h3 className="font-display font-bold text-base text-slate-900 mb-1">Monthly Transaction Growth</h3>
          <p className="text-xs text-slate-500 font-medium mb-5">Verified transactions processed per month</p>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: 12, color: 'white', fontSize: 12 }} />
              <Bar dataKey="txns" name="Transactions" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
          <h3 className="font-display font-bold text-base text-slate-900 mb-1">Tonnes Processed Stream</h3>
          <p className="text-xs text-slate-500 font-medium mb-5">Cumulative weight verified per month</p>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: 12, color: 'white', fontSize: 12 }} />
              <Line type="monotone" dataKey="weight" name="Weight (T)" stroke="#059669" strokeWidth={3} dot={{ fill: '#059669', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Downloadable Audit PDF List */}
      <div className="dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
        <h3 className="font-display font-bold text-base text-slate-900 mb-4">Official Certified Audit Reports</h3>
        <div className="space-y-2">
          {[
            { name: 'September 2026 Transaction Audit & Verification Certificate', size: '2.4 MB', date: '28 Sep 2026', type: 'PDF' },
            { name: 'Q3 2026 Material Stream & ESG Compliance Summary', size: '4.1 MB', date: '30 Jun 2026', type: 'PDF' },
            { name: 'Regulatory Scrap Yard Compliance Report — FY 2026', size: '8.7 MB', date: '31 Mar 2026', type: 'PDF' },
            { name: 'IoT Telemetry Hardware Performance & Health Log', size: '1.2 MB', date: '28 Sep 2026', type: 'XLSX' },
          ].map((report) => (
            <motion.div
              key={report.name}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between py-3.5 px-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-orange-50/50 hover:border-orange-200 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-xs"
                  style={{ background: report.type === 'PDF' ? '#ef4444' : '#059669' }}
                >
                  {report.type}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {report.name}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {report.date} • {report.size}
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors">
                <Download size={14} /> Download File
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
