'use client';
import { motion } from 'framer-motion';
import { Plus, Search, Layers, TrendingUp, TrendingDown, ChevronRight, Tag } from 'lucide-react';
import { useState } from 'react';

const materials = [
  { name: 'Ferrous Scrap (HMS 1)', category: 'Metal', totalTxns: 412, totalWeight: '1,842 T', avgGrade: 'B+', lastRate: '₹24,800/T', trend: '+3.2%', up: true },
  { name: 'Copper Wire Bright', category: 'Metal', totalTxns: 89, totalWeight: '234 T', avgGrade: 'A', lastRate: '₹5,82,000/T', trend: '+5.8%', up: true },
  { name: 'Aluminium Extrusion', category: 'Metal', totalTxns: 167, totalWeight: '421 T', avgGrade: 'B', lastRate: '₹1,12,500/T', trend: '+1.7%', up: true },
  { name: 'Mixed E-Waste PCB', category: 'E-Waste', totalTxns: 234, totalWeight: '389 T', avgGrade: 'C+', lastRate: '₹18,900/T', trend: '-1.2%', up: false },
  { name: 'Lead Battery Scrap', category: 'E-Waste', totalTxns: 78, totalWeight: '156 T', avgGrade: 'B-', lastRate: '₹96,400/T', trend: '+1.5%', up: true },
  { name: 'Stainless Steel 304', category: 'Metal', totalTxns: 145, totalWeight: '312 T', avgGrade: 'A-', lastRate: '₹1,68,120/T', trend: '+2.9%', up: true },
  { name: 'Brass Fittings Grade A', category: 'Metal', totalTxns: 92, totalWeight: '128 T', avgGrade: 'A', lastRate: '₹2,80,800/T', trend: '+4.1%', up: true },
  { name: 'Populated Circuit Boards', category: 'E-Waste', totalTxns: 56, totalWeight: '42 T', avgGrade: 'B', lastRate: '₹45,000/T', trend: '+2.3%', up: true },
];

export default function MaterialsPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = materials.filter(m => {
    const matchCat = activeCat === 'All' || m.category === activeCat;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black font-display text-slate-900">Material Registry & Classification</h1>
          <p className="text-sm text-slate-500 font-medium">Standardized commodity grades and real-time market rate index</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all">
          <Plus size={15} strokeWidth={2.5} /> Register New Material
        </button>
      </div>

      {/* Filter bar */}
      <div className="dash-card p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 border border-slate-200/90 flex-1 min-w-[240px]">
          <Search size={15} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search material catalog..."
            className="text-xs font-semibold outline-none bg-transparent w-full text-slate-800"
          />
        </div>

        <div className="flex items-center gap-1.5">
          {['All', 'Metal', 'E-Waste', 'Industrial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeCat === cat
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.04 }}
            className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {m.category}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono font-bold text-xs border border-emerald-200">
                  {m.avgGrade}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors leading-snug mb-3">
                {m.name}
              </h3>

              <div className="space-y-2 text-xs py-2 border-y border-slate-100 font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Transactions</span>
                  <span className="font-extrabold text-slate-900">{m.totalTxns}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Volume</span>
                  <span className="font-extrabold text-slate-900">{m.totalWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Index</span>
                  <span className="font-extrabold text-slate-900">{m.lastRate}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">30-Day Index Trend</span>
              <span className={`inline-flex items-center gap-0.5 font-bold font-mono ${m.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                {m.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {m.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
