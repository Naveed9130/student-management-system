import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Trusted by Schools & Universities
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Smart Student
              <span className="block text-blue-600">
                Management Platform
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Manage students, teachers, attendance, fees, examinations,
              courses, and reports from one beautiful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                <PlayCircle size={18} />
                <span className="ml-2">Watch Demo</span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
        >
          <div className="space-y-5">
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-blue-100 p-4">
                <h3 className="text-3xl font-bold text-blue-700">12K+</h3>
                <p className="text-sm text-slate-600">Students</p>
              </div>

              <div className="rounded-2xl bg-green-100 p-4">
                <h3 className="text-3xl font-bold text-green-700">520</h3>
                <p className="text-sm text-slate-600">Teachers</p>
              </div>

              <div className="rounded-2xl bg-violet-100 p-4">
                <h3 className="text-3xl font-bold text-violet-700">98%</h3>
                <p className="text-sm text-slate-600">Attendance</p>
              </div>
            </div>

            {/* Fake Chart */}
            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="mb-4 h-3 w-40 rounded bg-slate-300"></div>

              <div className="flex h-48 items-end justify-between gap-3">
                {[45, 90, 65, 120, 80, 150, 110].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                    }}
                    className="w-8 rounded-t-xl bg-blue-500"
                  />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Recent Admission</span>
                <ArrowRight size={18} />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-200"></div>

                <div>
                  <h4 className="font-semibold">John Anderson</h4>
                  <p className="text-sm text-slate-500">
                    B.Tech Computer Science
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;