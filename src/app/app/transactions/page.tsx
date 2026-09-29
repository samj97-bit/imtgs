'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Plus, CheckCircle2, Clock, ShieldAlert, ArrowUpRight, MapPin, Scale } from 'lucide-react';

const allTxns = [
  { id: '#IMT-82941', material: 'Ferrous Scrap (HMS 1)', grade: 'B+', weight: '1,247 kg', value: '₹42,800', location: 'Andheri Yard, Mumbai', sensor: 'IMT-042', time: '28 Sep 11:37', confidence: 94, verified: true },
  { id: '#IMT-82940', material: 'Copper Wire Bright', grade: 'A', weight: '382 kg', value: '₹1,91,000', location: 'Thane East Terminal', sensor: 'IMT-038', time: '28 Sep 10:22', confidence: 97, verified: true },
  { id: '#IMT-82939', material: 'Aluminium Extrusion', grade: 'B', weight: '621 kg', value: '₹87,500', location: 'Navi Mumbai Port', sensor: 'IMT-051', time: '28 Sep 09:15', confidence: 91, verified: true },
  { id: '#IMT-82938', material: 'Mixed PCB E-Waste', grade: 'C+', weight: '189 kg', value: '₹18,900', location: 'Kurla Recovery Hub', sensor: 'IMT-029', time: '28 Sep 08:44', confidence: 78, verified: false },
  { id: '#IMT-82937', material: 'Stainless Steel 304', grade: 'A-', weight: '934 kg', value: '₹1,68,120', location: 'Bhiwandi Depot', sensor: 'IMT-042', time: '27 Sep 16:30', confidence: 96, verified: true },
  { id: '#IMT-82936', material: 'Lead Battery Scrap', grade: 'B-', weight: '456 kg', value: '₹36,480', location: 'Dharavi Recycling', sensor: 'IMT-018', time: '27 Sep 14:10', confidence: 88, verified: true },
  { id: '#IMT-82935', material: 'Brass Fittings', grade: 'A', weight: '312 kg', value: '₹2,80,800', location: 'Dadar Scrap Yard', sensor: 'IMT-033', time: '27 Sep 11:05', confidence: 95, verified: true },
];

export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = allTxns.filter(t => {
    const matchSearch = t.material.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || (filter === 'verified' && t.verified) || (filter === 'pending' && !t.verified);
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black font-display text-slate-900">Transaction Audit Ledger</h1>
          <p className="text-sm text-slate-500 font-medium">Immutable chain-of-custody records signed by AI & IoT hardware</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-extrabold shadow-xs transition-colors">
            <Download size={14} /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all">
            <Plus size={15} strokeWidth={2.5} /> Record Transaction
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Audit Logs', value: allTxns.length, color: '#2563eb', desc: '100% telemetry synced' },
          { label: 'Verified & Anchored', value: allTxns.filter(t=>t.verified).length, color: '#059669', desc: 'SHA-256 cryptographic seal' },
          { label: 'Pending Human Review', value: allTxns.filter(t=>!t.verified).length, color: '#f97316', desc: 'Confidence threshold <80%' },
        ].map((s) => (
          <div key={s.label} className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{s.label}</div>
            <div className="font-display font-black text-3xl" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-slate-500 font-medium mt-1">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Filter & Search Bar */}
      <div className="dash-card p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 border border-slate-200/90 flex-1 min-w-[240px]">
          <Search size={15} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by TXN ID or material name..."
            className="text-xs font-semibold outline-none bg-transparent w-full text-slate-800"
          />
        </div>

        <div className="flex items-center gap-1.5">
          {['all', 'verified', 'pending'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold capitalize transition-all ${
                filter === f
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Table */}
      <div className="dash-card bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 font-mono text-[10.5px] text-slate-500 uppercase tracking-wider font-black">
                <th className="px-5 py-4">TXN ID</th>
                <th className="px-5 py-4">Material & Grade</th>
                <th className="px-5 py-4">Verified Weight</th>
                <th className="px-5 py-4">Market Value</th>
                <th className="px-5 py-4">Yard Location</th>
                <th className="px-5 py-4">AI Score</th>
                <th className="px-5 py-4">Timestamp</th>
                <th className="px-5 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filtered.map((txn, i) => (
                <motion.tr
                  key={txn.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="hover:bg-orange-50/40 transition-colors cursor-pointer group"
                >
                  <td className="px-5 py-4 font-mono font-extrabold text-orange-600">{txn.id}</td>
                  <td className="px-5 py-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <span>{txn.material}</span>
                      <span className="px-2 py-0.5 rounded-md bg-orange-100/70 text-orange-700 font-mono font-bold text-[10px]">
                        {txn.grade}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-700">{txn.weight}</td>
                  <td className="px-5 py-4 font-extrabold text-slate-900">{txn.value}</td>
                  <td className="px-5 py-4 text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-slate-400" /> {txn.location}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-14 rounded-full overflow-hidden bg-slate-100">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${txn.confidence}%`,
                            background: txn.confidence > 90 ? '#059669' : txn.confidence > 80 ? '#f97316' : '#ef4444'
                          }}
                        />
                      </div>
                      <span className="font-mono font-bold text-[11px] text-slate-700">{txn.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-400 font-mono font-semibold text-[11px]">{txn.time}</td>
                  <td className="px-5 py-4 text-right">
                    {txn.verified ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10.5px] font-bold">
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10.5px] font-bold">
                        <Clock size={12} /> Pending
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
