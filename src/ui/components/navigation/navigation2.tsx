import { Logo } from "@/ui/design-systeme/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { Button } from "@/ui/design-systeme/button/button";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

export const Navigations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 border-orange-400 bg-orange-200">
      <Container className="py-2 flex items-center justify-between gap-7">
        <Link href="/">
          <div className="lg:flex items-end gap-4">
            <div className="hidden md:block">
              <Logo size="large" />
            </div>
            <div className="block md:hidden">
              <Logo size="medium" />
            </div>

            <Typography
              variant="body-sm"
              theme="primary"
              component="span"
              className="max-md:hidden  "
            >
              Association de Parents d’élèves de l’Enseignement Libre
            </Typography>
          </div>
        </Link>
        <div></div>
        <div className="flex items-center gap-4 xl:gap-7 ">
          <Typography
            theme="primary"
            variant="caption2"
            component="div"
            className="max-lg:text-caption4 space-x-2.5  xl:block flex items-center xl:space-x-8 "
          >
            <Link href="/design">contact</Link>
            <Link href="/#">Actualité</Link>
          </Typography>

          <div className="items-center gap-2 hidden sm:flex">
            <Button>Rejoindre</Button>
            <Button>Connexion</Button>
          </div>

          <div className="  items-center block sm:hidden ">
            <button className="focus:outline-none " onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className=" bg-orange-200 py-2  max-lg:text-caption4 xl:block  flex items-center ">
              {isMenuOpen && (
                <div className=" space-y-2 flex   flex-col">
                  {" "}
                  <Button size="small">Rejoindre</Button>
                  <Button size="small">Connexion</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
