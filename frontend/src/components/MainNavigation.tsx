import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";

import LogoImage from "@/assets/Logo/logoopensource.png";
import { useScrolled } from "@/hooks";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const scrolled = useScrolled(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 Detect current route
  const location = useLocation();
  const isHome = location.pathname === "/";

  // 🔥 Determine if navbar should be "light" (white bg + dark text)
  const isLight = !isHome || scrolled;

  return (
    <>
      <nav
        className={`flex justify-between items-center px-4 sm:px-8 lg:px-20 fixed py-4 w-full z-20 transition-colors duration-300 ${
          isLight
            ? "bg-white shadow-xl text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={LogoImage}
            alt="Open Source Kigali"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-base">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary-colour font-semibold"
                  : `font-medium transition-colors duration-200 ${
                      isLight
                        ? "text-gray-900 hover:text-primary-colour"
                        : "text-white hover:text-[#93bbff]"
                    }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA button (desktop) */}
        <NavLink
          to="/contact?category=project"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-bold transition-colors duration-200"
          style={{ background: "#2b7fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6fef")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2b7fff")}
        >
          Contribute to OSK
        </NavLink>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-50 p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X
              className={`w-6 h-6 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            />
          ) : (
            <RxHamburgerMenu
              className={`w-6 h-6 transition-colors duration-300 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-black"
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA button (mobile) */}
          <NavLink
            to="/contact?category=project"
            onClick={() => setMobileOpen(false)}
            className="mt-8 flex items-center justify-center px-6 py-3 rounded-full text-white text-sm font-black"
            style={{ background: "#2b7fff" }}
          >
            Contribute to OSK
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;