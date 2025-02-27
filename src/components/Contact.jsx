// import React from "react";
// import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

// const Contact = () => {
//   return (
//     <section className="px-8 py-16">
//       <div className="container mx-auto mb-20 text-center">
//         <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
//           Contactez-nous
//         </h1>
//         <p className="w-full mx-auto text-gray-500 lg:w-5/12">
//           Prêt à commencer ? N'hésitez pas à nous contacter via le formulaire,
//           et partons ensemble vers une aventure d'innovation et de réussite.
//         </p>
//       </div>

//       <div>
//         <div className="container mx-auto border border-gray-200 rounded-lg shadow-lg">
//           <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
//             {/* Section d'informations de contact */}
//             <div className="col-span-3 p-8 text-white bg-gray-900 rounded-lg md:p-16">
//               <h2 className="mb-4 text-2xl font-bold">Informations de contact</h2>
//               <p className="mb-8 text-base text-gray-400">
//                 Remplissez le formulaire et notre équipe vous répondra sous 24 heures.
//               </p>
//               <div className="flex items-center gap-5 mb-5">
//                 <AiFillGithub className="w-6 h-6 text-white" />
//                 <span className="text-lg">+1 (424) 535 3523</span>
//               </div>
//               <div className="flex items-center gap-5 mb-5">
//                 <AiFillLinkedin className="w-6 h-6 text-white" />
//                 <span className="text-lg">hello@mail.com</span>
//               </div>
//               <div className="flex items-center gap-5 mb-10">
//                 <AiFillInstagram className="w-6 h-6 text-white" />
//                 <span className="text-lg">Ouvrir un ticket</span>
//               </div>
//               <div className="flex items-center gap-5">
//                 <a href="#" className="text-white">
//                   <i className="text-lg fab fa-facebook" />
//                 </a>
//                 <a href="#" className="text-white">
//                   <i className="text-lg fab fa-instagram" />
//                 </a>
//                 <a href="#" className="text-white">
//                   <i className="text-lg fab fa-github" />
//                 </a>
//               </div>
//             </div>

//             {/* Section du formulaire */}
//             <div className="col-span-4 p-8 md:p-16">
//               <form action="#">
//                 {/* Nom et prénom */}
//                 <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Prénom
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="ex. Lucas"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Nom
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="ex. Jones"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="mb-8">
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="ex. lucas@mail.com"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                   />
//                 </div>

//                 {/* Intérêt */}
//                 <div className="mb-8">
//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Quel est votre intérêt ?
//                   </label>
//                   <div className="flex flex-col space-y-2">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="interest"
//                         className="text-gray-500 form-radio"
//                         defaultChecked
//                       />
//                       <span className="ml-2 text-gray-700">Design</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="interest"
//                         className="text-gray-500 form-radio"
//                       />
//                       <span className="ml-2 text-gray-700">Développement</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="interest"
//                         className="text-gray-500 form-radio"
//                       />
//                       <span className="ml-2 text-gray-700">Support</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="interest"
//                         className="text-gray-500 form-radio"
//                       />
//                       <span className="ml-2 text-gray-700">Autre</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="mb-8">
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Votre message
//                   </label>
//                   <textarea
//                     placeholder="Entrez votre message ici..."
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     rows="5"
//                   ></textarea>
//                 </div>

//                 {/* Bouton d'envoi */}
//                 <div className="flex justify-end">
//                   <button className="px-6 py-2 text-white bg-gray-900 rounded-lg">
//                     Envoyer le message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;