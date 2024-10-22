import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    label: "Home",
    url: "/",
  },
  {
    title: "History",
    label: "History",
    url: "/history",
  },
  {
    title: "Credits",
    label: "Credits",
    url: "/credits",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed mt-1 top-0 left-1/2 transform -translate-x-1/2 w-auto px-3 py-1 transition-all duration-300 rounded-xl z-10 ${
        isScrolled ? "bg-[#252527] shadow-lg" : "bg-transparent "
      }`}
    >
      <nav className="flex space-x-4">
        {navItems.map((navs) => {
          return (
            <Link
              to={navs.url}
              className="relative text-base block px-2 transition hover:text-[#6C24B5] text-white "
              key={navs.label}
            >
              {navs.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
