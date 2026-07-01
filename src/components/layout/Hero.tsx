import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold leading-tight text-slate-900"
          >
            Smart Student
            <span className="block text-blue-600">Management System</span>
          </motion.h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A modern platform for schools, colleges, and universities to manage
            students, attendance, examinations, fees, and analytics in one
            place.
          </p>

          <div className="mt-10 flex gap-5">
            <Button text="Get Started" />
            <Button text="Live Demo" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
        >
          <div className="flex h-[450px] items-center justify-center rounded-2xl bg-slate-100">
            Dashboard Preview
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;