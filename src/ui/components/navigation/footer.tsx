import { footerLinks } from "./app-links";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { FooterLinks } from "@/types/app-links";
import { v4 as uuidv4 } from "uuid";
import { ActivLink } from "./active-link";
import { LinkTypes } from "@/lib/link-type";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="   bg-gray-700">
      <Container className="max-sm:inline max-sm:space-y-10 flex justify-between pt-16">
        <div className=" flex flex-col items-center gap-1">
          <a href="https://www.apel.fr/" target="_blank">
            <Image
              src="/assets/svg/apel-academique.svg"
              alt="Logo apel Academique"
              width={229}
              height={216}
            />
            <Typography
              variant="caption1"
              theme="white"
              weight="medium"
              className="max-sm:place-content-center"
            >
              Apel Academique
            </Typography>
          </a>
        </div>
        <div className=" max-sm:place-content-center max-sm:-space-x-6 max-sm:ml-10 flex lg:gap-9 ">
          {footerNavigationList}
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-orange-600" />
        <div className="    flex items-center  ">
          <div className=" flex gap-8">
            <Typography className="" variant="caption4" theme="white">
              {`Copyright © ${currentYear}  Association de Parents d’élèves de l’Enseignement Libre`}
            </Typography>

            <Typography className="" variant="caption4" theme="white">
              <a href="/#" target="_blank" className="underline ">
                Mention légales
              </a>
            </Typography>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActivLink href={link.baseUrl}>{link.label}</ActivLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="orange" variant="caption3" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
