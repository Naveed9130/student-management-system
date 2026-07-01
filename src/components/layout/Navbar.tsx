import { Menu } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Logo />

        <nav className="hidden gap-8 font-medium text-slate-700 lg:flex">
          <a href="#" className="transition hover:text-blue-600">
            Home
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Features
          </a>

          <a href="#" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>

        <div className="hidden lg:block">
          <Button text="Login" />
        </div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;