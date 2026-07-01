import { GraduationCap } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-blue-600 p-2 text-white shadow-lg">
        <GraduationCap size={28} />
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          EduFlow
        </h2>

        <p className="text-xs text-slate-500">
          Student Management
        </p>
      </div>
    </div>
  );
};

export default Logo;