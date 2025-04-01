"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("bg-black", "text-white");
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Ikon CV */}
        <FaFileAlt className="text-white text-3xl" />

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "experience", "skills", "portfolio", "contact", ].map((section) => (
            <li key={section} className="text-white hover:text-gray-300 transition duration-200">
              <button onClick={() => handleNavClick(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Menu Mobile */}
        <button className="text-white text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["home", "about", "experience", "skills", "portfolio", "contact"].map((section) => (
          <li key={section} className="border-b border-gray-700 hover:bg-gray-700 transition duration-200">
            <button
              onClick={() => handleNavClick(section)}
              className="w-full text-left p-4 text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
