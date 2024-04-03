import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
  {
    label: "Acceuil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Actualité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "action",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerUsersLinks: AppLinks[] = [
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal",
  },
  {
    label: "Mot de passe oublier",
    baseUrl: "/connexion/mots-de-passe-perdu",
    type: "external",
  },
];

export const footerLinks = [
  {
    label: "Pages",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateur",
    links: footerUsersLinks,
  },
]; // Add closing square bracket here
