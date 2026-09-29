'use client';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Activity, Scale, Layers } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

// ─── Demo Data ───
const areaData = [
  { month: 'Jan', transactions: 142, weight: 12.4, verified: 138 },
  { month: 'Feb', transactions: 189, weight: 18.2, verified: 181 },
  { month: 'Mar', transactions: 234, weight: 22.1, verified: 228 },
  { month: 'Apr', transactions: 198, weight: 19.8, verified: 195 },
  { month: 'May', transactions: 312, weight: 31.2, verified: 308 },
  { month: 'Jun', transactions: 289, weight: 28.4, verified: 282 },
  { month: 'Jul', transactions: 354, weight: 35.6, verified: 349 },
  { month: 'Aug', transactions: 401, weight: 40.2, verified: 396 },
  { month: 'Sep', transactions: 1284, weight: 348.2, verified: 1256 },
];

const pieData = [
  { name: 'Ferrous Metal', value: 45, color: '#f97316' },
  { name: 'Non-Ferrous', value: 28, color: '#2563eb' },
  { name: 'E-Waste', value: 17, color: '#7c3aed' },
  { name: 'Industrial', value: 10, color: '#059669' },
];

const barData = [
  { day: 'Mon', metal: 42, ewaste: 28, industrial: 15 },
  { day: 'Tue', metal: 58, ewaste: 35, industrial: 22 },
  { day: 'Wed', metal: 31, ewaste: 19, industrial: 18 },
  { day: 'Thu', metal: 67, ewaste: 42, industrial: 29 },
  { day: 'Fri', metal: 74, ewaste: 38, industrial: 31 },
  { day: 'Sat', metal: 45, ewaste: 25, industrial: 12 },
  { day: 'Sun', metal: 29, ewaste: 14, industrial: 8 },
];

const recentTxns = [
  { id: '#82941', material: 'Ferrous Scrap (HMS 1)', grade: 'B+', weight: '1,247 kg', value: '₹42,800', time: '11:37 AM', verified: true, conf: 94 },
  { id: '#82940', material: 'Copper Wire Bright', grade: 'A', weight: '382 kg', value: '₹1,91,000', time: '10:22 AM', verified: true, conf: 97 },
  { id: '#82939', material: 'Aluminium Extrusion', grade: 'B', weight: '621 kg', value: '₹87,500', time: '09:15 AM', verified: true, conf: 91 },
  { id: '#82938', material: 'Mixed PCB E-Waste', grade: 'C+', weight: '189 kg', value: '₹18,900', time: '08:44 AM', verified: false, conf: 78 },
  { id: '#82937', material: 'Stainless Steel 304', grade: 'A-', weight: '934 kg', value: '₹1,68,120', time: 'Yesterday', verified: true, conf: 96 },
];

const priceWidgets = [
  { symbol: 'Ferrous Metal', price: '₹24,800', change: '+3.12%', up: true, color: '#f97316', unit: 'Per Tonne' },
  { symbol: 'Copper Wire', price: '₹5,82,000', change: '+5.86%', up: true, color: '#2563eb', unit: 'Per Tonne' },
  { symbol: 'Aluminium Grade B', price: '₹1,12,500', change: '+1.68%', up: true, color: '#7c3aed', unit: 'Per Tonne' },
  { symbol: 'Lead Battery Scrap', price: '₹96,400', change: '+1.54%', up: true, color: '#059669', unit: 'Per Tonne' },
];

// ─── Stat Card Component ───
function StatCard({ title, value, change, up, color, icon: Icon, progress }: {
  title: string; value: string; change: string; up: boolean; color: string; icon: any; progress: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">{title}</span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
          style={{ background: `${color}15`, color: color }}
        >
          <Icon size={20} />
        </div>
      </div>
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-1 tracking-tight">{value}</div>
      <div className="flex items-center gap-1.5 text-xs font-bold">
        <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md ${up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </span>
        <span className="text-slate-400 font-medium">vs last month</span>
      </div>

      <div className="mt-4 h-1.5 rounded-full overflow-hidden bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </motion.div>
  );
}

// ─── Custom Tooltip ───
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl px-4 py-3 text-xs shadow-2xl bg-slate-900 border border-slate-800 text-white font-mono">
      <div className="font-bold mb-1.5 text-slate-400 border-b border-slate-800 pb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.name} className="flex items-center justify-between gap-4 py-0.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-slate-300">{p.name}:</span>
          </div>
          <span className="font-extrabold text-white">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden flex flex-wrap items-center justify-between gap-6 border border-slate-800">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/20 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
            <Activity size={13} className="animate-pulse" /> SYSTEM READY — YARD #01 MUMBAI
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Good morning, Sajibur 👋
          </h1>
          <p className="text-slate-400 text-sm max-w-lg font-medium">
            AI material classification engines and IoT load cell telemetry are actively running with <strong className="text-emerald-400 font-bold">99.9% accuracy</strong> today.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-center">
            <div className="text-slate-400 font-bold">TODAY&apos;S VOLUME</div>
            <div className="text-lg font-black text-white">48.2 Tonnes</div>
          </div>
        </div>
      </div>

      {/* Live Market Commodity Ticker Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {priceWidgets.map((item) => (
          <div key={item.symbol} className="dash-card p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-xs"
                style={{ background: item.color }}
              >
                {item.symbol[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{item.symbol}</div>
                <div className="text-[10px] text-slate-400 font-mono font-semibold">{item.unit}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-extrabold text-sm text-slate-900">{item.price}</div>
              <div className="text-[10.5px] font-mono font-bold text-emerald-600 flex items-center gap-0.5 justify-end">
                ↑ {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Metric Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Transactions" value="1,284" change="+12.4%" up icon={Activity} color="#f97316" progress={84} />
        <StatCard title="Material Verified" value="3,482 T" change="+8.2%" up icon={Scale} color="#2563eb" progress={76} />
        <StatCard title="Verification Rate" value="97.8%" change="+2.1%" up icon={CheckCircle2} color="#059669" progress={98} />
        <StatCard title="Active Sensors" value="14 Online" change="+3 new" up icon={Cpu} color="#7c3aed" progress={92} />
      </div>

      {/* Analytics Charts Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Area Chart */}
        <div className="lg:col-span-2 dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">Verified Transaction Volume</h3>
              <p className="text-xs text-slate-500 font-medium">Monthly material audit logs vs raw weight stream (Tonnes)</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-slate-600">Transactions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-600 font-medium">Verified</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="txnGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="verGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="transactions" name="Transactions" stroke="#f97316" strokeWidth={3} fill="url(#txnGrad)" />
              <Area type="monotone" dataKey="verified" name="Verified" stroke="#059669" strokeWidth={3} fill="url(#verGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Material Mix Donut Chart */}
        <div className="dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Material Share</h3>
            <p className="text-xs text-slate-500 font-medium mb-4">Volume distribution by material classification</p>

            <ResponsiveContainer width="100%" height={170}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: 12, color: 'white', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 mt-4 pt-3 border-t border-slate-100">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                  <span className="font-semibold text-slate-700">{d.name}</span>
                </div>
                <span className="font-mono font-bold text-slate-900">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Transactions Table & Weekly Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions Table */}
        <div className="lg:col-span-2 dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">Live Transaction Stream</h3>
              <p className="text-xs text-slate-500 font-medium">Sensor signed transactions processed today</p>
            </div>
            <a href="/app/transactions" className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors">
              View All Ledger <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="space-y-2">
            {recentTxns.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/70 hover:bg-orange-50/50 border border-slate-100 hover:border-orange-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-mono text-xs font-extrabold text-orange-600 shadow-xs group-hover:scale-105 transition-transform">
                    {txn.id}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {txn.material}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium flex items-center gap-2 mt-0.5">
                      <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 font-mono font-bold text-[9.5px]">{txn.grade}</span>
                      <span>• {txn.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-right">
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">{txn.weight}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">{txn.value}</div>
                  </div>
                  <div>
                    {txn.verified ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10.5px] font-bold">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10.5px] font-bold">
                        <ShieldAlert size={12} /> Audit Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity Bar Breakdown */}
        <div className="dash-card p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">Weekly Breakdown</h3>
            <p className="text-xs text-slate-500 font-medium mb-4">Volume per day across material classes</p>

            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={barData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="metal" name="Ferrous" fill="#f97316" radius={[4, 4, 0, 0]} maxBarSize={12} />
                <Bar dataKey="ewaste" name="E-Waste" fill="#2563eb" radius={[4, 4, 0, 0]} maxBarSize={12} />
                <Bar dataKey="industrial" name="Industrial" fill="#059669" radius={[4, 4, 0, 0]} maxBarSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            {[
              { label: 'Ferrous Metal', bar: 78, color: '#f97316', value: '847 Tonnes' },
              { label: 'Non-Ferrous & E-Waste', bar: 52, color: '#2563eb', value: '421 Tonnes' },
              { label: 'Industrial By-Products', bar: 34, color: '#059669', value: '214 Tonnes' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-600">{item.label}</span>
                  <span className="font-mono font-bold text-slate-900">{item.value}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-slate-100">
                  <div className="h-full rounded-full" style={{ background: item.color, width: `${item.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
