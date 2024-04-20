import { Box } from "@/ui/design-systeme/box/box";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Link from "next/link";

import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { LoginForm } from "./login-form";

export const LoginView = () => {
  return (
    <Container className="relative  grid grid-cols-1 md:grid-cols-2 md:gap-20 md:mb-32">
      <div className=" flex md:items-center md:relative md:w-full  ">
        <div className=" w-full h-[531px] mb-12  ">
          <Image
            fill
            src="/assets/images/character-2.png"
            alt="Illustration bonhomme"
            className="object-scale-down max-sm:-mt-12"
          />
        </div>
      </div>
      <div className="  bg-white w-full flex items-end md:items-center max-sm:mb-2 ">
        <Box padding_y="py-5 " padding_x="px-4 md:px-2 lg:px-12">
          <div className="flex items-center justify-beetwen gap-6 md:gap-4 lg:space-x-12  lg:gap-20 ">
            <Typography variant="h5" component="h1">
              Connexion
            </Typography>
            <div className=" md:flex md:items-center  max-sm:text-center md:gap-2 ">
              <Typography variant="caption4" component="h2" theme="gray">
                Tu n&apos;as pas de compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">S&apos;inscrire</Link>
              </Typography>
            </div>
          </div>
          <LoginForm />
        </Box>
      </div>
    </Container>
  );
};
