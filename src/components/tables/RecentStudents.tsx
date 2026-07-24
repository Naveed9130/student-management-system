import { CheckCircle, Clock } from "lucide-react";

const students = [
  {
    id: 1,
    name: "John Anderson",
    course: "Computer Science",
    attendance: "95%",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    course: "Information Technology",
    attendance: "91%",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    course: "Electronics",
    attendance: "88%",
    status: "Pending",
  },
  {
    id: 4,
    name: "Emma Johnson",
    course: "Mechanical",
    attendance: "97%",
    status: "Active",
  },
];

const RecentStudents = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">
          Recent Students
        </h2>

        <button className="text-sm font-semibold text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Student</th>
              <th className="py-3 text-left">Course</th>
              <th className="py-3 text-left">Attendance</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b transition hover:bg-slate-50"
              >
                <td className="py-4 font-medium">
                  {student.name}
                </td>

                <td>{student.course}</td>

                <td>{student.attendance}</td>

                <td>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {student.status === "Active" ? (
                      <CheckCircle size={16} />
                    ) : (
                      <Clock size={16} />
                    )}

                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentStudents;