import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-gray-200 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1">
      <h1 className="ml-4 text-3xl font-bold primary-color">Portfolio Léa</h1>
      <ul className="hidden md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Skill</li>
        <li className="p-2">Projet</li>
        <li className="p-2">Contact</li>
      </ul>
      {/* mebu burger masqué */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* menu burger */}
      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 text-4xl primary-color">Portfolio Léa</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">Skill</li>
          <li className="p-2">Projet</li>
          <li className="p-2">    <a
      href="mailto:lea@gmail.com"
      className="flex items-center gap-2 text-indigo-500 transition duration-300 hover:text-indigo-600"
    >
      <AiOutlineMail className="text-xl" /> {/* Icône d'enveloppe */}
      Envoyer un email
    </a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
