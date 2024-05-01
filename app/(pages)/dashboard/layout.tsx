import Sidebar from "../../components/Sidebar";
import {
  PieChart,
  Briefcase,
  Database,
  Settings2,
  Fingerprint,
  Phone,
  Clipboard
} from "lucide-react";
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
  // {
  //   title: "analytics",
  //   link: "analytics",
  //   icon: <PieChart></PieChart>},
  {
    title: "tasks",
link: "/tasks",
    icon: <Clipboard />,
  },
 
  {
    title: "Edit Website",
    link: "edit-website",
    icon: <Settings2 />,
  },
  {
    title: "Authentication",
    link: "authentication",
    icon: <Fingerprint></Fingerprint>,
  },
  {
    title: "database",
    link: "database",
    icon: <Database></Database>,
  },
];
