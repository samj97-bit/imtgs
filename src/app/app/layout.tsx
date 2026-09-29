import type { Metadata } from "next";
import DashSidebar from "@/components/dashboard/DashSidebar";
import DashTopbar from "@/components/dashboard/DashTopbar";

export const metadata: Metadata = {
  title: "IMTGS Dashboard — Material Intelligence Platform",
  description: "IMTGS SaaS dashboard for material grading, IoT verification, and transaction management.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-body min-h-screen flex" style={{fontFamily: 'Inter, sans-serif', background: '#f0f4f8', color: '#1e293b'}}>
      <DashSidebar />
      <div className="dash-main flex flex-col flex-1">
        <DashTopbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
