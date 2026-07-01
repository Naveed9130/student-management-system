import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  GraduationCap,
  CreditCard,
  Bell,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description:
      "Manage student records, admissions and profiles effortlessly.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    description:
      "Track daily attendance with powerful reports and analytics.",
  },
  {
    icon: GraduationCap,
    title: "Examinations",
    description:
      "Conduct exams, publish results and manage grades.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description:
      "Collect fees, generate invoices and payment history.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Send announcements instantly to students and parents.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Powerful dashboards with charts and institution insights.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            One platform to manage your entire institution.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;