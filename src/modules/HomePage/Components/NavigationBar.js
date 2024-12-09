import Link from "next/link";
import { useState } from "react";

const NavigationBar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "Home", href: "./" },
    { name: "About", href: "./About" },
    { name: "Productions", href: "./Productions" },
    { name: "Other Works", href: "./OtherWorks" },
    { name: "Gallery", href: "./Gallery" },
    { name: "FAQs", href: "./FAQs" },
    { name: "Contact Us", href: "./ContactUs" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex items-center justify-between max-w-[1000px] mx-auto h-16 px-4">
        {/* Logo */}
        <div>
          <img className="w-28 h-auto" src="/skils-LOGO.png" alt="Logo" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div
                className={`px-4 text-lg pb-2 ${
                  currentPage === item.name
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-white"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col space-y-2 py-4 px-4">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <div
                  className={`text-lg pb-2 ${
                    currentPage === item.name
                      ? "text-red-600 border-b-2 border-red-600"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
