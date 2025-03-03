import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom"; // Importation de Link pour la navigation

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Gestion de la navigation mobile
  const handleNav = () => {
    setNav(!nav);
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

  const navItems = ["Home", "Skills", "Projets", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-md text-gray-100"
          : "bg-gray-800 text-gray-200"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1240px] mx-auto h-20 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text">
          Portfolio <span className="font-light">Léa</span>
        </h1>

        {/* Navigation desktop */}
        <ul className="hidden space-x-1 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Utilisation de Link pour la navigation interne
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeSection === item
                    ? "bg-indigo-600/30 text-indigo-300 font-medium"
                    : "hover:bg-gray-700/70"
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton burger pour mobile */}
        <button
          onClick={handleNav}
          className="block p-2 rounded-lg md:hidden hover:bg-gray-700/70"
          aria-label="Menu"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>

        {/* Menu mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] sm:w-[60%] md:hidden bg-gradient-to-b from-gray-900 to-indigo-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            {/* Bouton fermer */}
            <button
              onClick={handleNav}
              className="absolute p-2 text-white bg-gray-800 rounded-full top-6 right-6 hover:bg-gray-700"
            >
              <AiOutlineClose size={16} />
            </button>

            {/* Contenu du menu */}
            <div className="px-8 py-20">
              <h1 className="pb-2 mb-12 text-3xl font-bold text-white border-b border-indigo-600">
                Portfolio{" "}
                <span className="font-light text-indigo-300">Léa</span>
              </h1>

              <ul className="space-y-6">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Utilisation de Link pour la navigation interne
                      className={`w-full text-left py-2 text-lg font-medium transition-all border-l-4 pl-3 ${
                        activeSection === item
                          ? "border-indigo-400 text-white"
                          : "border-transparent text-gray-300 hover:border-indigo-200 hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveSection(item);
                        setNav(false); // Fermer le menu mobile après un clic
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}

                {/* Contact avec style spécial */}
                <li className="pt-4">
                  <a
                    href="mailto:lea@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 font-medium text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    <AiOutlineMail className="text-xl" />
                    Contactez-moi
                  </a>
                </li>
              </ul>

              {/* Réseaux sociaux dans le menu mobile */}
              <div className="absolute left-0 right-0 px-8 bottom-16">
                <div className="flex justify-center space-x-4">
                  {["github", "linkedin", "twitter"].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-indigo-700"
                    >
                      <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
