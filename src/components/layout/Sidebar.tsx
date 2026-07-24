import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  CreditCard,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Students" },
  { icon: GraduationCap, label: "Teachers" },
  { icon: BookOpen, label: "Courses" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: CreditCard, label: "Fees" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="mb-10 text-2xl font-bold">EduFlow</h1>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-800"
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <button className="mt-10 flex items-center gap-3 rounded-xl p-3 hover:bg-red-600">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;