import { useState, useEffect } from "react";
import LogoImage from "../assets/images/logoopensource.png";
import { Link, NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import PrimaryButton from "../UI/PrimaryButton";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Event", path: "/event" },
    { name: "Projects", path: "/projects" },
    { name: "Resources", path: "/resources" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`flex justify-between items-center px-4 sm:px-8 lg:px-20 fixed py-4 w-full z-50 transition-colors duration-300 bg-white ${
          scrolled
            ? "bg-white shadow-xl text-bold-black"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={LogoImage}
            alt="The logo of Open Source Kigali"
            className="h-10 sm:h-12 md:h-14 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-semibold"
                  : `${
                      scrolled
                        ? "text-bold-black hover:text-blue-500"
                        : "text-black hover:text-blue-400"
                    } font-medium`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:inline-flex bg-primary-colour px-6 py-3 rounded-full text-white">
          <NavLink to="/Login">Join the community</NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden z-50"
        >
          {mobileOpen ? (
            <IoClose
              className={`w-7 h-7 ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          ) : (
            <RxHamburgerMenu
              className={`w-7 h-7 ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-black"
            >
              {link.name}
            </NavLink>
          ))}

          <PrimaryButton to='/login'>
            Join the Community
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export default MainNavigation;