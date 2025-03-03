import React from "react";

const PROJECTS = [
  {
    id: 1,
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app-development",
  },
  {
    id: 2,
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    link: "/projects/landing-page-development",
  },
  {
    id: 3,
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app",
  },
  {
    id: 4,
    img: "/image/blog4.svg",
    title: "E-commerce Development",
    desc: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
    link: "/projects/e-commerce-development",
  },
  {
    id: 5,
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    link: "/projects/mobile-app",
  },
  {
    id: 6,
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
    link: "/projects/landing-page",
  },
];

// Project card component with side-by-side layout
const ProjectCard = ({ img, title, desc, link }) => (
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
      <a
        href={link}
        className="inline-block px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        CASE STUDY
      </a>
    </div>
  </div>
);

const Projets = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-100 mt-11">
      {/* Section Header with Underline */}
      <div className="container max-w-6xl px-4 mx-auto mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 uppercase">
          PROJECTS
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
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projets;
