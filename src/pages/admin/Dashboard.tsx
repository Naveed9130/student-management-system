import DashboardLayout from "../../layouts/DashboardLayout";
import AttendanceChart from "../../components/charts/AttendanceChart";
import StudentGrowthChart from "../../components/charts/StudentGrowthChart";
import RecentActivities from "../../components/dashboard/RecentActivities";
import RecentStudents from "../../components/tables/RecentStudents";

const Dashboard = () => {
  return (
   <DashboardLayout>
  <div className="space-y-8">

    {/* Heading */}

    {/* Cards */}

    {/* Charts */}

    <div className="grid gap-6 xl:grid-cols-2">
      <AttendanceChart />
      <StudentGrowthChart />
    </div>

    {/* Table + Activities */}

    <div className="grid gap-6 xl:grid-cols-2">
      <RecentStudents />
      <RecentActivities />
    </div>

  </div>
</DashboardLayout>
  );
};

export default Dashboard;