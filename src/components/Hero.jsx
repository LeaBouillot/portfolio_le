import React from "react";
import profilepic from "../assets/profilepic5.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="p-8 bg-white">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Texte principal */}
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-5xl text-blue-gray-900">
            Welcome to my Web
            <br /> Development Portfolio!
          </h1>
          <p className="mb-4 text-indigo-500 md:pr-16 xl:pr-28">
            Je m'appelle Léa Bouillot, et je suis développeuse web. Découvrez
            mon parcours en développement web, où créativité et performance se
            combinent pour créer des solutions sur mesure.
          </p>
          {/* envoyer email */}
          <a
            href="mailto:leadreamcoder@gmail.com"
            className="px-6 py-2 text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600"
          >
            Contactez moi
          </a>
          {/* <div className="grid">
  <p className="mb-2 font-medium text-gray-900">Contactez-moi</p>
  <div className="flex flex-col w-full gap-4 mb-2 md:flex-row">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-grow px-4 py-2 text-gray-700 border border-gray-300 rounded-lg"
    />
    <button className="px-4 py-2 text-white bg-indigo-500 rounded-lg md:w-auto">
      Envoyer
    </button>
  </div>
</div>       */}
        </div>

        {/* Image */}
        <img
          src={profilepic}
          alt="profile"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
};

export default Hero;
