import { AppLinks } from "@/types/app-links";

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
    label: "Apel Academique",
    baseUrl: "https://www.apel.fr/",
    type: "external",
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
    baseUrl: "/connexion/mot-de-passe-perdu",
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
