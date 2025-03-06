import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";

const Contact = () => {
  // États pour chaque champ du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Développement");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // URL du backend mise à jour pour le port 5002
      const backendUrl = 'http://localhost:5002/api/contact';
      
      // Faire une requête à votre API backend
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          interest,
          message,
          toEmail: 'leadreamcoder@gmail.com' 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Réinitialiser le formulaire
        setFirstName("");
        setLastName("");
        setEmail("");
        setInterest("Développement");
        setMessage("");
      } else {
        console.error('Erreur de serveur:', data.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            href="mailto:lea@gmail.com"
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
              {submitStatus === 'success' && (
                <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg">
                  Votre message a été envoyé avec succès !
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg">
                  Une erreur s'est produite. Veuillez réessayer plus tard.
                </div>
              )}
              <form onSubmit={handleSubmit}>
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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                        checked={interest === "Développement"}
                        onChange={() => setInterest("Développement")}
                      />
                      <span className="ml-2 text-gray-700">Développement</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                        checked={interest === "Design"}
                        onChange={() => setInterest("Design")}
                      />
                      <span className="ml-2 text-gray-700">Design</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                        checked={interest === "Support"}
                        onChange={() => setInterest("Support")}
                      />
                      <span className="ml-2 text-gray-700">Support</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="interest"
                        className="text-gray-500 form-radio"
                        checked={interest === "Autre"}
                        onChange={() => setInterest("Autre")}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
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