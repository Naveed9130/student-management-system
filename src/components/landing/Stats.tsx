import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const stats = [
    { end: 12560, suffix: "+", label: "Students" },
  { end: 520, suffix: "+", label: "Faculty" },
  { end: 128, suffix: "+", label: "Courses" },
  { end: 98, suffix: "%", label: "Student Satisfaction" },
];

    

const Stats = () => {

        const { ref } = useInView({
  triggerOnce: true,
  threshold: 0.4,
});

  return (
    <section ref={ref} className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Trusted by Educational Institutions
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Helping schools and universities manage thousands of students every day.
          </p>
        </motion.div>

        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur-md"
            >
           <h3 className="text-5xl font-extrabold text-white">
  {item.end}
  {item.suffix}
</h3>

              <p className="mt-3 text-lg text-blue-100">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;