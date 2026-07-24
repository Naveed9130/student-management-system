import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", students: 8500 },
  { month: "Feb", students: 9000 },
  { month: "Mar", students: 9800 },
  { month: "Apr", students: 10400 },
  { month: "May", students: 11100 },
  { month: "Jun", students: 11800 },
  { month: "Jul", students: 12560 },
];

const StudentGrowthChart = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        Student Growth
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="studentFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              fill="url(#studentFill)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentGrowthChart;