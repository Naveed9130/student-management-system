import { GraduationCap, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-blue-600 p-3">
                <GraduationCap size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  EduFlow
                </h2>

                <p className="text-slate-400">
                  Student Management System
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              A modern SaaS platform designed for schools,
              colleges and universities to manage students,
              teachers, attendance, examinations, fees and
              analytics efficiently.
            </p>

            <div className="mt-8 flex gap-4">
<FaFacebookF
  size={20}
  className="cursor-pointer transition hover:text-blue-500"
/>

<FaLinkedinIn
  size={20}
  className="cursor-pointer transition hover:text-blue-500"
/>

<FaGithub
  size={20}
  className="cursor-pointer transition hover:text-blue-500"
/>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="mb-5 text-lg font-bold">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-white cursor-pointer">
                Features
              </li>

              <li className="hover:text-white cursor-pointer">
                Pricing
              </li>

              <li className="hover:text-white cursor-pointer">
                Analytics
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-bold">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white cursor-pointer">
                About
              </li>

              <li className="hover:text-white cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@eduflow.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 9876543210
              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 EduFlow. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
};

export default Footer;