import { useState, useEffect} from "react";
import LogoImage from '../../assets/images/logoopensource.png'
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<null | string>(null);
  const [scrolled, setScrolled] = useState(false)

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

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav
  className={`flex justify-between items-center px-4 sm:px-8 lg:px-20 fixed py-4 w-full z-20  transition-colors duration-300 ${
    scrolled ? "bg-white  shadow-xl text-bold-black" : "bg-transparent text-white"
  }`}
>

      {/* Logo section */}
        <Link to="/" className="flex items-center">
  <img
    src={LogoImage}
    alt="The logo of Open Source Kigali"
    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
  />
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
    : `${
        scrolled
          ? "text-bold-black hover:text-blue-500"
          : "text-white hover:text-blue-400"
      } font-medium transition-colors duration-200`
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
              className={`flex items-center gap-1 cursor-pointer font-medium transition-colors duration-200 ${
    scrolled ? "text-bold-black hover:text-blue-500" : "text-white hover:text-blue-400"
  }`}
            >
              {dropdown.name}
              {openDropdown === dropdown.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {/* Dropdown menu */}
            {openDropdown === dropdown.name && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-bold-black shadow-lg rounded-md z-20">
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
     <div className="hidden md:inline-flex items-center justify-center bg-primary-colour px-6 py-4 rounded-full text-white text-base">
  <NavLink to="/Login">Contribute to OSK</NavLink>
</div>

      

      {/* Mobile menu button */}
      <button className="md:hidden z-50">
  <RxHamburgerMenu
    className={`w-7 h-7 transition-colors duration-300 ${scrolled ? "text-bold-black" : "text-white"}`}
  />
</button>
    </nav>
  );
};

export default Navbar;
