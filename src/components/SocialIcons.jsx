import React from "react";
// Importer les icônes spécifiques pour les réseaux sociaux
import { 
  AiFillGithub, 
  AiFillLinkedin, 
//   AiFillTwitterCircle, 
//   AiFillInstagram,
//   AiFillYoutube,
//   AiFillFacebook
} from "react-icons/ai";

// Composant réutilisable pour les icônes de réseaux sociaux
const SocialIcons = ({ className = "", iconSize = 20 }) => {
  // Configuration des réseaux sociaux
  const socialNetworks = [
    { name: 'github', icon: <AiFillGithub size={iconSize} />, url: 'https://github.com/LeaBouillot' },
    { name: 'linkedin', icon: <AiFillLinkedin size={iconSize} />, url: 'https://www.linkedin.com/in/lea-bouillot-developpeur-web/' },
    //{ name: 'twitter', icon: <AiFillTwitterCircle size={iconSize} />, url: 'https://twitter.com/votre-compte' },
    // Vous pouvez ajouter ou retirer des réseaux sociaux selon vos besoins
    // { name: 'instagram', icon: <AiFillInstagram size={iconSize} />, url: 'https://instagram.com/votre-compte' },
    // { name: 'facebook', icon: <AiFillFacebook size={iconSize} />, url: 'https://facebook.com/votre-page' },
    // { name: 'youtube', icon: <AiFillYoutube size={iconSize} />, url: 'https://youtube.com/c/votre-chaine' },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialNetworks.map((social) => (
        <a 
          key={social.name}
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-100 rounded-full hover:bg-indigo-100"
          aria-label={`Visiter ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;