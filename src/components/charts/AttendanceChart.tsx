import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", attendance: 82 },
  { month: "Feb", attendance: 86 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 91 },
  { month: "May", attendance: 90 },
  { month: "Jun", attendance: 94 },
  { month: "Jul", attendance: 96 },
];

const AttendanceChart = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Attendance Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;