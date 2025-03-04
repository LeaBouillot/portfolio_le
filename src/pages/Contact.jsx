import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="px-8 py-16 mt-20 bg-gradient-to-br from-white to-indigo-100">
      <div className="container mx-auto mb-10 text-center">
        <h2 className="mb-4 text-4xl font-bold text-blue-gray-900">
          Contactez-moi
        </h2>
        <div className="w-10 h-1 mx-auto mb-10 bg-indigo-600"></div>
        <p className="w-full mx-auto text-gray-500 lg:w-5/12">
          Prêt à commencer ? N&apos;hésitez pas à nous contacter via le
          formulaire, et partons ensemble vers une aventure d&apos;innovation et
          de réussite.
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <a
            href="mailto:leadreamcoder@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiEnvelope className="w-6 h-6 text-indigo-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/lea-bouillot-developpeur-web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="w-6 h-6 text-indigo-600" />
          </a>
          <a
            href="https://github.com/LeaBouillot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>

      <div>
        <div className="container max-w-[700px] mx-auto border border-gray-200 rounded-lg shadow-lg bg-white">
          <div className="grid md:gap-10">
            <div className="col-span-4 p-8 md:p-16">
              <form action="#">
                {/* Nom et prénom */}
                <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="ex. Lucas"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="ex. Jones"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="ex. lucas@mail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                {/* Intérêt */}
                <div className="mb-8">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Quel est votre intérêt ?
                  </label>
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">Développement</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                      />
                      <span className="ml-2 text-gray-700">Design</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                      />
                      <span className="ml-2 text-gray-700">Support</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                      />
                      <span className="ml-2 text-gray-700">Autre</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Votre message
                  </label>
                  <textarea
                    placeholder="Entrez votre message ici..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="5"
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center">
                  <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg">
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
