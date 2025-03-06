import React from "react";
import { listProjets } from "../api/listProjets"; // Importez la liste des projets
import { Link } from "react-router-dom";

// Project card component with side-by-side layout
const ProjectCard = ({ id, img, title, desc, projectLink }) => (
  <div className="grid items-center grid-cols-1 gap-10 p-6 bg-white rounded-lg shadow-md lg:grid-cols-2">
    <div className="w-full">
      <img
        src={img}
        alt={title}
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <div className="flex space-x-4">
        <Link
          to={`/projets/${id}`} // Modifier ici pour utiliser l'ID du projet
          className="inline-block px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          DÉTAILS DU PROJET
        </Link>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 font-medium text-indigo-600 transition-colors duration-300 border border-indigo-600 rounded-md hover:bg-indigo-100"
        >
          GITHUB
        </a>
      </div>
    </div>
  </div>
);

const Projets = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-100 mt-11">
      {/* Section Header with Underline */}
      <div className="container max-w-6xl px-4 mx-auto mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 uppercase">
          PROJETS
        </h2>
        <div className="w-10 h-1 mx-auto mb-10 bg-indigo-600"></div>
        <p className="max-w-3xl mx-auto text-gray-600">
          Que vous ayez une idée d&apos;application mobile à concrétiser ou un
          site web qui a besoin d&apos;un rafraîchissement, je suis là pour
          transformer vos rêves numériques en réalité.
        </p>
      </div>
      {/* Projects Grid - each project in its own container */}
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="flex flex-col space-y-16">
          {listProjets.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;