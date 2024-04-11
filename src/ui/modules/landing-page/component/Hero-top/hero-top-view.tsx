import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <>
      <Container className="relative top-4  bg-primary-200  rounded">
        <div className="w-full max-w-xl space-y-7  py-6">
          <Typography
            variant="h1"
            component="h1"
            className=" mx-w-xl  max-sm:text-lg max-sm:font-bold max-sm:text-center"
          >
            Votre école Sainte-Marguerite
          </Typography>
          <Image
            src="/assets/images/ecole.jpg"
            alt="illustration ecole Sainte-Marguerite"
            width={650}
            height={434}
            className="absolute  right-0 p-4 -top-4 z-0 max-sm:relative "
          />

          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="m-w-xl text-justify "
          >
            L’enseignement privé catholique de la ville de Saint-Benoît, compte
            parmi ses établissements l’École Primaire Privée Sainte-Marguerite.
            Pour prendre en charge de manière efficace ses 444 élèves et leur
            dispenser son enseignement de niveau primaire Sous-contrat
            d’association. L’association des parents d’élèves de l&apos;école
            Sainte Marguerite est heureuse de vous accueillir et vous souhaite
            la bienvenue ! N&apos;hésitez pas à consulter cette section
            régulièrement pour connaître les événements organisés par
            l&apos;APEL au sein de l&apos;école.
          </Typography>
        </div>
      </Container>
      <Container className="relative  mt-16 top-4 py-50 mb-8  bg-primary-200 rounded">
        <div className="relative ">
          <div className="w-full ">
            <Typography
              variant="h1"
              component="h1"
              className=" mx-w-xl mt-6 flex-col absolute  inset-y-0 right-60 max-sm:mx-w-xl  max-sm:text-lg  max-sm:font-bold max-sm:inset-y-0 max-sm:right-40  "
            >
              Votre APEL
            </Typography>
          </div>

          <div className=" left-0 py-1 z-0  ">
            <Image
              src="/assets/images/apel.jpeg"
              alt="illustration logo APEL"
              width={550}
              height={334}
              className="mt-8 py-4 max-sm:mt-12"
            />
          </div>
          <div className="w-full max-w-xl  flex-col absolute mt-16 inset-y-0 right-0 max-sm:relative max-sm:mt-2">
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="m-w-xl   mt-14 text-justify max-sm:py-4 max-sm:mt-2 "
            >
              L’A.P.E.L. (Association de Parents d’élèves de l’Enseignement
              Libre) est une association “type Loi de 1901”, composée de parents
              d’élèves élus. Le groupe a des temps de réunions en commun avec
              l’O.G.E.C. Les deux associations travaillent ensemble, œuvrent
              pour le bien commun de l’établissement. Tous les parents sont
              membres de l’association. Les parents volontaires peuvent se
              présenter au conseil pour être élus lors de l’assemblée générale
              annuelle et participer à l’organisation des événements dans
              l’école.
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
};
