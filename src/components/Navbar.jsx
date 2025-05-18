import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg p-4 md:px-10 rounded-xl mb-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
<div className="flex items-center gap-3 text-xl font-bold text-gray-800">
  <img
    src={logo}
    alt="Logo"
    className="h-10 w-auto object-contain"
  />
  <Link to="/" className="hover:text-pink transition">
    Ann's Cupcake Botique
  </Link>
</div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/gallery" className="hover:text-pink">Gallery</Link>
        </nav>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-gray-800 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700 font-medium">
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-pink">
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
}
