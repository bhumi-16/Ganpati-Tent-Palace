import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/aboutus" },
  {
    name: "Services",
    path: "/services",
    submenu: [
      {
        name: "Wedding Decoration",
        path: "/services/wedding/wedding-decoration",
      },
      { name: "Corporate Events", path: "/services/corporate" },
      { name: "Birthday Parties", path: "/services/birthday" },
      { name: "Theme Based Events", path: "/services/theme" },
      { name: "Bride-Groom Entry", path: "/services/entry" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact us", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for desktop dropdown
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#f6efe5] shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left links (desktop) */}
        <ul className="hidden lg:flex gap-6 items-center text-2xl font-bold text-royal relative tracking-wider">
          {links.slice(0, 3).map((link) => (
            <li
              key={link.name}
              className="relative cursor-pointer hover:opacity-80"
            >
              <div
                onMouseEnter={() => link.submenu && setOpenDropdown(link.name)}
                onMouseLeave={() => link.submenu && setOpenDropdown(null)}
              >
                <Link to={link.path}>{link.name}</Link>

                {/* Dropdown Menu */}
                {link.submenu && openDropdown === link.name && (
                  <ul className="absolute left-0 top-full mt-2 w-56 bg-white text-sm text-black shadow-lg rounded-md z-50">
                    {link.submenu.map((sublink) => (
                      <li
                        key={sublink.name}
                        className="hover:bg-gray-100 px-4 py-2"
                      >
                        <Link to={sublink.path}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Ganpati Tent Palace"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Right links (desktop) */}
        <ul className="hidden lg:flex gap-6 items-center text-2xl font-bold text-royal tracking-wider">
          {links.slice(3).map((link) => (
            <li key={link.name} className="cursor-pointer hover:opacity-80">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-royal"></span>
            <span className="block h-0.5 w-6 bg-royal"></span>
            <span className="block h-0.5 w-6 bg-royal"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div ref={menuRef} className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-base font-bold text-royal bg-[#f6efe5] rounded-md p-4 shadow-md">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>

                {/* Submenu for mobile */}
                {link.submenu && (
                  <ul className="pl-4 mt-2 text-sm space-y-1">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
