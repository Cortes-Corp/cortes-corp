import Sidebar from "../../components/Sidebar";
import { PieChart, Briefcase, Database } from "lucide-react";
import { usePathname } from "next/navigation";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen">
      <Sidebar items={sidebarItems}></Sidebar>
      <div className="flex-grow flex flex-col">{children}</div>
    </section>
  );
}

const sidebarItems = [
  {
    title: "analytics",
    icon: <PieChart></PieChart>,
  },
  {
    title: "agents",
    icon: <Briefcase></Briefcase>,
  },
  {
    title: "database",
    icon: <Database></Database>,
  },
];
