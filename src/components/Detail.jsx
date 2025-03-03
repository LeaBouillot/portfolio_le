import React from "react";
import { useParams } from "react-router-dom";

// Base de données des projets
const projectsDatabase = {
  "dopefolio": {
    title: "DOPEFOLIO",
    summary: "This page contains the case study of Dopefolio Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.",
    image: "/image/blog-1.svg",
    sections: [
      {
        title: "Project Overview",
        content: [
          "Dopefolio is now being used by thousands of developers globally and it has helped many people in landing jobs & opportunities which makes me happy that my creation is helping other people in building their careers.",
          "It has many other features like Dopefolio's repo contains a playground link which people can use to test the template with different theme colours to find their own preferred primary colour for the template.",
          "Feel free to check out the Project by visiting the Project Link."
        ]
      }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "SASS", "GIT", "Github"],
    projectLink: "https://github.com/username/dopefolio"
  },
  "mobile-app-development": {
    title: "MOBILE APP DEVELOPMENT",
    summary: "Case study for the Mobile App Development project that helps users discover and explore local restaurants and cuisines.",
    image: "/image/blog-1.svg",
    sections: [
      {
        title: "Project Overview",
        content: [
          "This mobile app was designed to help users discover local restaurants and cuisines with an intuitive interface.",
          "The app features geolocation, user reviews, and personalized recommendations based on dining history and preferences."
        ]
      },
      {
        title: "Design Process",
        content: [
          "The design process began with extensive user research to understand dining preferences and pain points.",
          "User flows and wireframes were created to ensure smooth navigation and intuitive experience."
        ]
      },
      {
        title: "Development Challenges",
        content: [
          "Integrating multiple APIs for restaurant data and reviews required creating a robust backend architecture.",
          "Performance optimization was critical to ensure the app loaded quickly even on slow network connections."
        ]
      }
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "GIT"],
    projectLink: "https://github.com/username/restaurant-finder-app"
  },
  // Ajoute les autres projets ici...
};

const Detail = () => {
  // Utilisation de useParams() pour récupérer l'ID dynamique du projet dans l'URL
  const { projectId } = useParams();

  // Obtenir les données du projet ou utiliser un projet par défaut si non trouvé
  const project = projectsDatabase[projectId] || projectsDatabase.dopefolio;

  return (
    <section className="min-h-screen py-24 mt-11">
      
      {/* En-tête du projet */}
      <div className="container max-w-4xl px-4 mx-auto mb-20 text-center bg-gradient-to-br from-white to-indigo-100">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 uppercase">{project.title}</h1>
        <p className="max-w-3xl mx-auto mb-12 text-gray-600">
          {project.summary}
        </p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-white transition-colors duration-300 bg-indigo-600 rounded-md font-xs hover:bg-indigo-700"
        >
          PROJECT LINK
        </a>
      </div>

      {/* Image du projet */}
      <div className="container max-w-4xl px-4 mx-auto mb-20">
        <div className="w-full overflow-hidden bg-gray-200 rounded-lg h-96">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Sections de contenu dynamiques */}
      {project.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="container max-w-4xl px-4 mx-auto mb-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">{section.title}</h2>
          <div className="space-y-6">
            {section.content.map((paragraph, paraIndex) => (
              <p key={paraIndex} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Technologies utilisées */}
      <div className="container max-w-4xl px-4 mx-auto mb-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Tools Used</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Voir en direct et retour */}
      <div className="container max-w-4xl px-4 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">See Live</h2>
        <div className="flex justify-center gap-4">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            PROJECT LINK
          </a>
          <a
            href="/projets"
            className="inline-block px-5 py-2 font-medium text-gray-700 transition-colors duration-300 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            GO BACK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Detail;
