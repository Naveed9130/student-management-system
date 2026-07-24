import {
  GraduationCap,
  Users,
  IndianRupee,
  BookOpen,
} from "lucide-react";

import StatCard from "../cards/StatCard";

const DashboardCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
        title="Revenue"
        value="₹12.5L"
        icon={<IndianRupee size={28} />}
        color="bg-orange-500"
      />

      <StatCard
        title="Courses"
        value="128"
        icon={<BookOpen size={28} />}
        color="bg-violet-600"
      />
    </div>
  );
};

export default DashboardCards;