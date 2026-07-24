import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 py-24">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white">
            Ready to Modernize Your Institution?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Simplify admissions, attendance, examinations, fee management,
            faculty operations, and analytics with one intelligent platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button>
              Get Started
            </Button>

            <Button variant="secondary">
              Schedule Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;