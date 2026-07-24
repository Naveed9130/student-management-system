import { GraduationCap, Users, BookOpen, IndianRupee } from "lucide-react";

import StatCard from "../cards/StatCard";
import AttendanceChart from "../charts/AttendanceChart";
import RecentStudents from "../tables/RecentStudents";

const DashboardPreview = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Powerful Dashboard
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Manage your entire institution from one intelligent dashboard.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Students"
            value="12,560"
            icon={<GraduationCap size={28} />}
            color="bg-blue-600"
          />

          <StatCard
            title="Teachers"
            value="520"
            icon={<Users size={28} />}
            color="bg-green-600"
          />

          <StatCard
            title="Courses"
            value="128"
            icon={<BookOpen size={28} />}
            color="bg-violet-600"
          />

          <StatCard
            title="Revenue"
            value="₹12.5L"
            icon={<IndianRupee size={28} />}
            color="bg-orange-500"
          />

        </div>

        {/* Chart + Table */}

        <div className="grid gap-8 xl:grid-cols-5">

          <div className="xl:col-span-3">
            <AttendanceChart />
          </div>

          <div className="xl:col-span-2">
            <RecentStudents />
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;