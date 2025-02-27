import React from "react";
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai"; // Changed ArrowRight to Download
import { FaChartBar, FaPuzzlePiece, FaMousePointer } from "react-icons/fa";

const RESUME_ITEMS = [
  {
    icon: FaChartBar,
    children: "Titre Profesionelle Concepteur Développeur d'Applications",
  },
  {
    icon: FaPuzzlePiece,
    children: "Titre RNCP Graphiste & Web Designer ",
  },
  {
    icon: FaMousePointer,
    children: "Licence Arts plastiques",
  },
];

function ResumeItem({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <p className="text-gray-800">{children}</p>
    </div>
  );
}

const Experience = () => {
  // Replace 'URL_OF_YOUR_CV' with the actual URL or path to your CV file
  const cvUrl = "/path/to/your/cv.pdf"; // Or an external URL

  return (
    <section className="px-8 py-24 bg-white">
      <div className="container grid items-center w-full grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold text-blue-gray-900">
            My Resume
          </h2>
          <p className="w-9/12 mt-3 mb-4 font-normal leading-relaxed text-gray-500">
          Je maîtrise JavaScript, React, Node.js, PHP, SQL et Symfony, des technologies qui me permettent de créer des applications performantes et évolutives. Mon expertise est également enrichie par un titre RNCP de Web Designer, me donnant une approche créative et visuelle pour concevoir des solutions web innovantes.
          </p>
          {/* Changed button to a link for downloading */}
          <a
  href="/path/to/cv.pdf" // Remplacez par le chemin réel de votre fichier CV
  download="Mon_CV.pdf" // Nom du fichier téléchargé
  target="_blank" // Ouvre le CV dans un nouvel onglet si cliqué
  rel="noopener noreferrer" // Protection pour les liens externes
  className="flex items-center gap-2 text-gray-600 transition-colors duration-200 hover:text-gray-900"
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
    </section>
  );
};

export default Experience;