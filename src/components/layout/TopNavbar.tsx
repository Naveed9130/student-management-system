import {
  Bell,
  Moon,
  Search,
  Settings,
  User,
  CheckCircle,
  GraduationCap,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";

const TopNavbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  return (
<header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white px-8 shadow-sm transition-colors dark:bg-slate-900 dark:border-slate-700">
      {/* Left Side */}
      <div className="flex items-center gap-5">

<h1 className="text-2xl font-bold text-slate-800 dark:text-white">          Dashboard
        </h1>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />

         <input
  type="text"
  placeholder="Search students..."
  className="w-80 rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
/>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Dark Mode */}
       <button
  onClick={toggleTheme}
  className="rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-slate-700"
>
  <Moon
    className={
      theme === "dark"
        ? "text-yellow-400"
        : "text-slate-700"
    }
  />
</button>

        {/* Notifications */}
        <div className="relative">

  <button
    onClick={() => setShowNotifications(!showNotifications)}
    className="relative rounded-xl p-3 transition hover:bg-gray-100"
  >
    <Bell size={20} />

    <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
  </button>

  {showNotifications && (
    <div className="absolute right-0 mt-3 w-80 rounded-2xl border bg-white p-4 shadow-2xl">

      <h3 className="mb-4 text-lg font-bold">
        Notifications
      </h3>

      <div className="space-y-4">

        <div className="flex gap-3">
          <GraduationCap className="text-blue-600" />
          <div>
            <p className="font-medium">
              New Student Registered
            </p>
            <span className="text-sm text-gray-500">
              John Anderson
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle className="text-green-600" />
          <div>
            <p className="font-medium">
              Attendance Updated
            </p>
            <span className="text-sm text-gray-500">
              Today
            </span>
          </div>
        </div>

      </div>

    </div>
  )}

</div>

        {/* Settings */}
        <button className="rounded-xl p-3 transition hover:bg-gray-100">
          <Settings size={20} />
        </button>

        {/* Profile */}
        <div className="relative">

  <button
    onClick={() => setShowProfile(!showProfile)}
    className="flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100"
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
      <User size={18} />
    </div>

    <div className="text-left">
      <h4 className="font-semibold">
        Naveed
      </h4>

      <p className="text-sm text-gray-500">
        Administrator
      </p>
    </div>

    <ChevronDown size={18} />
  </button>

  {showProfile && (
    <div className="absolute right-0 mt-3 w-56 rounded-2xl border bg-white p-2 shadow-2xl">

      <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-gray-100">
        <User size={18} />
        My Profile
      </button>

      <button className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-gray-100">
        <Settings size={18} />
        Settings
      </button>

      <hr className="my-2" />

      <button className="flex w-full items-center gap-3 rounded-xl p-3 text-red-600 hover:bg-red-50">
        <LogOut size={18} />
        Logout
      </button>

    </div>
  )}

</div>

      </div>

    </header>
  );
};

export default TopNavbar;