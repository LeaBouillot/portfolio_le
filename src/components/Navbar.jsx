import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1">
      <h1 className="w-full text-3xl font-bold primary-color ml-4">
        Portfolio Léa
      </h1>
      <ul>
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <li className="p-2">Skill</li>
        <li className="p-2">Projet</li>
        <li className="p-2">Contact</li>
      </ul>
      {/* mebu burger masqué */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
