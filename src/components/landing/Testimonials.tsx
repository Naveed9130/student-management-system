import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    review:
      "EduFlow transformed our institution. Attendance, examinations, and student management are now effortless.",
  },
  {
    name: "Rahul Sharma",
    role: "Faculty",
    review:
      "The dashboard is intuitive and saves hours of administrative work every week.",
  },
  {
    name: "Ayesha Khan",
    role: "Student",
    review:
      "I can check my attendance, grades, and notifications from one place. It's simple and fast.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            What People Say
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Trusted by students, teachers, and institutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;