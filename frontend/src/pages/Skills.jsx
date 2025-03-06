import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidGraduation } from "react-icons/bi";
import { FaPuzzlePiece } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaSymfony,
} from "react-icons/fa";

const cvUrl = "/path/to/your/cv.pdf";

const RESUME_ITEMS = [
  {
    icon: RiCodeBoxFill,
    children: "Titre Profesionelle Concepteur Développeur d'Applications",
  },
  { icon: FaPuzzlePiece, children: "Titre RNCP Graphiste & Web Designer " },
  { icon: BiSolidGraduation, children: "Licence Arts plastiques" },
];

const TECH_SKILLS = [
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaPhp, name: "PHP" },
  { icon: FaDatabase, name: "SQL" },
  { icon: FaSymfony, name: "Symfony" },
];
function TechSkill({ icon: Icon, name }) {
  return (
    <div className="flex flex-col items-center m-4">
      <Icon className="mb-2 text-4xl text-indigo-600" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}

function ResumeItem({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
        <Icon className="w-6 h-6 text-indigo-700" />
      </div>
      <p className="text-gray-800">{children}</p>
    </div>
  );
}

const Skills = () => {
  return (
    <section className="py-24 px-11 mt-11">
     
      <h2 className="mb-4 text-3xl font-bold text-center text-gray-900 uppercase">
        skills
      </h2>
      <div className="w-10 h-1 mx-auto mb-10 bg-indigo-600"></div>

      <div className="flex flex-wrap justify-center ">
        {TECH_SKILLS.map((skill, idx) => (
          <TechSkill key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
      
   <div className="bg-gradient-to-br from-white to-indigo-100">
      <div className="container max-w-[1000px] grid items-center w-full grid-cols-1 gap-16 mx-auto lg:grid-cols-2 mt-11 pt-11 pb-11">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-blue-gray-900">
            About me
          </h2>
          <p className="w-9/12 mt-3 mb-4 font-normal leading-relaxed text-gray-500">
            Je maîtrise JavaScript, React, Node.js, PHP, SQL et Symfony, des
            technologies qui me permettent de créer des applications
            performantes et évolutives. Mon expertise est également enrichie par
            un titre RNCP de Web Designer, me donnant une approche créative et
            visuelle pour concevoir des solutions web innovantes.
          </p>
          {/* Changed button to a link for downloading */}
          <a
            href="/path/to/cv.pdf" // Remplacez par le chemin réel de votre fichier CV
            download="Mon_CV.pdf" // Nom du fichier téléchargé
            target="_blank" // Ouvre le CV dans un nouvel onglet si cliqué
            rel="noopener noreferrer" // Protection pour les liens externes
            className="flex items-center gap-2 text-indigo-600 transition-colors duration-200 hover:text-gray-900"
          >
            Télécharger mon CV
            <AiOutlineArrowRight className="w-4 h-4 text-gray-900" />
          </a>
        </div>
        <div className="grid col-span-1 pr-0 gap-y-6 lg:ml-auto lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((item, idx) => (
            <ResumeItem key={idx} {...item} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
