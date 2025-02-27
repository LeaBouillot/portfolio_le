import React from "react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app-development", // Lien vers le projet
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    link: "/projects/landing-page-development",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce Development",
    desc: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    link: "/projects/e-commerce-development",
  },
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    link: "/projects/landing-page",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce Development",
    desc: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    link: "/projects/e-commerce",
  },
];

const ProjectCard = ({ img, title, desc, link }) => (
  <a
    href={link}
    className="flex flex-col items-center p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
  >
    <img src={img} alt={title} className="w-24 h-24 mb-4" />
    <h3 className="mb-2 text-lg font-semibold text-blue-gray-900">{title}</h3>
    <p className="text-gray-500">{desc}</p>
  </a>
);

const About = () => {
  return (
    <section className="px-8 bg-white py-28"> {/* Fond blanc ajouté */}
      {/* Section Header */}
      <div className="container max-w-[1240px] mx-auto mb-20 text-center">
        <h2 className="mb-4 text-4xl font-bold text-blue-gray-900">Mes Projets</h2>
        <p className="w-full px-4 mx-auto text-gray-500 lg:w-6/12">
          Que vous ayez une idée d'application mobile à concrétiser ou un site web qui a besoin d'un rafraîchissement, je suis là pour transformer vos rêves numériques en réalité.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container max-w-[1240px] mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default About;