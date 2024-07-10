import React from "react";
import profilepic from "../assets/profilepic5.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-6xl text-gray-200">Hi ! I am Léa</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            {" "}
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Webdesigner", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>

        <div>
          <p>2 ans experience</p>
        </div>

        <div className="text-5xl flex justify-start gap-16 my-7 text-purple-500">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillInstagram />
        </div>

        <div className="relative inline-flex group my-3">
          <div></div>
          <a
            href="/"
            title="Download CV"
            role="button"
            className="relative inline-flex justify-center items-center"
          >
            Voir le CV
          </a>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
