'use client';
import { motion } from 'framer-motion';
import { Plus, Wifi, WifiOff, Activity, Cpu, BatteryCharging, RefreshCw } from 'lucide-react';

const devices = [
  { id: 'IMT-042', name: 'Weighbridge Load Cell A', location: 'Andheri Yard, Mumbai', status: 'online', lastSync: '2 min ago', txns: 412, battery: 88, firmware: 'v2.4.1' },
  { id: 'IMT-038', name: 'Scale Terminal B1', location: 'Thane East', status: 'online', lastSync: '5 min ago', txns: 189, battery: 62, firmware: 'v2.4.1' },
  { id: 'IMT-051', name: 'AI Optical Camera Node', location: 'Navi Mumbai Port', status: 'online', lastSync: '1 min ago', txns: 234, battery: 95, firmware: 'v2.4.1' },
  { id: 'IMT-029', name: 'Weighbridge Sensor C', location: 'Kurla Recovery Hub', status: 'offline', lastSync: '4 hours ago', txns: 98, battery: 15, firmware: 'v2.1.9' },
  { id: 'IMT-018', name: 'Bench Scale D', location: 'Dharavi Recycling', status: 'online', lastSync: '8 min ago', txns: 167, battery: 74, firmware: 'v2.4.1' },
  { id: 'IMT-033', name: 'Platform Scale E', location: 'Dadar Scrap Yard', status: 'syncing', lastSync: 'Just now', txns: 89, battery: 52, firmware: 'v2.4.0' },
];

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black font-display text-slate-900">IoT Sensor Network & Hardware</h1>
          <p className="text-sm text-slate-500 font-medium">Real-time status of weighbridges, bench scales, and optical camera nodes</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/25 transition-all">
          <Plus size={15} strokeWidth={2.5} /> Provision New Device
        </button>
      </div>

      {/* Summary KPI grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Active Online Nodes', count: devices.filter(d=>d.status==='online').length, color: '#059669', icon: Wifi },
          { label: 'Syncing / Updating', count: devices.filter(d=>d.status==='syncing').length, color: '#f97316', icon: RefreshCw },
          { label: 'Offline Maintenance', count: devices.filter(d=>d.status==='offline').length, color: '#ef4444', icon: WifiOff },
        ].map((s) => (
          <div key={s.label} className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">{s.label}</div>
              <div className="font-display font-black text-3xl" style={{ color: s.color }}>{s.count}</div>
            </div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white" style={{ background: `${s.color}15`, color: s.color }}>
              <s.icon size={22} />
            </div>
          </div>
        ))}
      </div>

      {/* Device Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.map((device, i) => (
          <motion.div
            key={device.id}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="dash-card p-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-[10.5px] font-extrabold text-orange-600 px-2 py-0.5 rounded bg-orange-50 border border-orange-200">
                    {device.id}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2">{device.name}</h3>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">📍 {device.location}</div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold ${
                  device.status==='online' ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' :
                  device.status==='offline' ? 'text-rose-700 bg-rose-50 border border-rose-200' :
                  'text-amber-700 bg-amber-50 border border-amber-200'
                }`}>
                  {device.status === 'online' ? <Wifi size={11}/> : device.status === 'offline' ? <WifiOff size={11}/> : <RefreshCw size={11} className="animate-spin"/>}
                  {device.status.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                {/* Battery bar */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-semibold">
                    <span className="text-slate-400">Battery Telemetry</span>
                    <span className={device.battery < 20 ? 'text-rose-600 font-bold' : 'text-slate-900 font-bold'}>{device.battery}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden bg-slate-100">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${device.battery}%`,
                        background: device.battery < 20 ? '#ef4444' : device.battery < 50 ? '#f97316' : '#059669'
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-50 text-center">
                    <div className="text-[9px] text-slate-400 font-bold">TXNS</div>
                    <div className="font-extrabold text-slate-900">{device.txns}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 text-center">
                    <div className="text-[9px] text-slate-400 font-bold">LAST SYNC</div>
                    <div className="font-extrabold text-slate-900 truncate">{device.lastSync}</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 text-center">
                    <div className="text-[9px] text-slate-400 font-bold">FW</div>
                    <div className="font-extrabold text-slate-900">{device.firmware}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
