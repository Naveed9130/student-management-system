import {
  UserPlus,
  CreditCard,
  BookOpen,
  CalendarCheck,
} from "lucide-react";

const activities = [
  {
    icon: <UserPlus size={18} />,
    title: "New Student Registered",
    time: "10 minutes ago",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <CreditCard size={18} />,
    title: "Fee Payment Received",
    time: "35 minutes ago",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Course Updated",
    time: "1 hour ago",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: <CalendarCheck size={18} />,
    title: "Attendance Submitted",
    time: "2 hours ago",
    color: "bg-orange-100 text-orange-600",
  },
];

const RecentActivities = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Recent Activities
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">
                {activity.title}
              </h4>

              <p className="text-sm text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;