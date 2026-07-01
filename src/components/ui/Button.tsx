import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`flex items-center rounded-xl px-6 py-3 font-semibold shadow-lg transition ${styles}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;