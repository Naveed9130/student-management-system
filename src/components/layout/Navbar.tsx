import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b border-white/30 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Logo />

        <nav className="hidden gap-8 lg:flex">
          <a href="#" className="font-medium hover:text-blue-600">
            Home
          </a>

          <a href="#" className="font-medium hover:text-blue-600">
            Features
          </a>

          <a href="#" className="font-medium hover:text-blue-600">
            Pricing
          </a>

          <a href="#" className="font-medium hover:text-blue-600">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="secondary">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;