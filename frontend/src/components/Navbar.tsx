import { useState } from "react";
import LogoImage from "../assets/images/logoopensource.png";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<null | string>(null);

  // Main navlinks
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
  ];

  // Dropdown items
  const dropdowns = [
    {
      name: "Projects",
      items: ["Project 1", "Project 2", "Project 3"],
    },
    {
      name: "Resources",
      items: ["Resource 1", "Resource 2", "Resource 3"],
    },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="flex justify-between items-center px-20 bg-transparent fixed py-4 w-full z-20 text-white">

      {/* Logo section */}
      <Link to="/">
        <img className="size-16" src={LogoImage} alt="The logo of Open Source Kigali" />
      </Link> 

      {/*  nav links section */}
      <div className="hidden md:flex space-x-8 text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400 font-medium transition-colors duration-200"
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Dropdown links */}
        {dropdowns.map((dropdown) => (
          <div key={dropdown.name} className="relative">
            
            <button
              onClick={() => toggleDropdown(dropdown.name)}
              className="flex items-center gap-1 text-white hover:text-blue-400 cursor-pointer font-medium transition-colors duration-200"
            >
              {dropdown.name}
              {openDropdown === dropdown.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {/* Dropdown menu */}
            {openDropdown === dropdown.name && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-20">
                <ul className="flex flex-col">
                  {dropdown.items.map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Join button */}
     <PrimaryButton text='Join the community'/>

      {/* Mobile menu button */}
      <button className="md:hidden">
        <RxHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
