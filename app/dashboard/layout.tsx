import type { Metadata } from "next";
import "./dashboard.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import BottomNav from "./components/bottomnav";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="id" className="">
      <body className="bg-slate-100 dark:bg-slate-900 min-h-screen flex transition-colors duration-300">
        {/* <!-- Backdrop --> */}
        <div id="backdrop" className="hidden fixed inset-0 z-30"></div>
        {/* <!-- ════════════════════════════════════════ SIDEBAR ══ --> */}
        <Sidebar></Sidebar>
        {/* <!-- ════════════════════════════════════════ MAIN ══ --> */}
        <main className="flex-1 lg:ml-64 pb-20 lg:pb-0">

          {/* <!-- Header --> */}
          <Header></Header>

          {/* <!-- Page body --> */}
          <div className="px-4 lg:px-8 py-5 lg:py-7 space-y-6">
            {children}
          </div>
        </main>

        {/* <!-- ════════════════════════════════════════ BOTTOM NAV ══ --> */}
        <BottomNav></BottomNav>
      </body>
    </html>
  );
}
