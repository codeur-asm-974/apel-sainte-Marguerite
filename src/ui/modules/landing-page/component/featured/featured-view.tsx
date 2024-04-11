import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-systeme/button/button";
import { Typography } from "@/ui/design-systeme/typography/typography";
import Image from "next/image";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturedListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  Description: string;
}

const featuresData: FeaturedListInterface[] = [
  {
    imagePath: "/assets/images/enfant.jpg",
    imageAlt: "Ilustration enfant",
    title: "Accueil",
    Description:
      "Nous acceuillons les nouvelles familles a travers de reunion d'echange afin de mieux les informer ",
  },
  {
    imagePath: "/assets/images/reunion3.png",
    imageAlt: "Ilustration reunion",
    title: "Representant",
    Description:
      "Nous représentons les familles au conseil d’établissement et auprès de l’organisme de gestion de l'établissement",
  },
  {
    imagePath: "/assets/images/cirque.png",
    imageAlt: "Ilustration cirque",
    title: "Organisation",
    Description:
      "nous sommes charger de l'organisation d'événements tout au long de l'année et de l'accompagnement des temps forts de la vie de l'école (fête de Noël,distribution chocolat de pâques kermesse de l’école...)",
  },
  {
    imagePath: "/assets/images/bus2.jpg",
    imageAlt: "Ilustration bus",
    title: "Participation ",
    Description:
      "Nous participons de l'organisation/la participation à diverses activités et manifestations en collaboration avec l’équipe enseignante ( gouter recreative, carnaval, sorties scolaires/spectacles...)",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7 "
    >
      <div className="relative w-[140px] h-[140px] rounded-full mb-6 p-10 ">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="rounded-full blur-xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="rounded-full"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.Description}
      </Typography>
    </div>
  ));

  return (
    <>
      <div className="relative bg-secondary-200 top-16 mb-20 max-sm:top-10">
        <Container className="grid grid-cols-1  md:grid-cols-12 md:gap-24 py-24 max-sm:py-20">
          <div className=" col-span-12 md:col-span-5">
            <div className="max-sm:-mt-8">
              <Typography
                variant="h2"
                component="h2"
                className="mb-5 max-sm:text-lg max-sm:font-bold max-sm:text-center "
              >
                Rôle et missions de l&apos;APEL
              </Typography>
              <Typography
                variant="lead"
                component="p"
                theme="gray"
                className="mb-8"
              >
                Une association au service de l&apos;école et des parents
                L&apos;APEL représente toutes les familles, dans leurs
                diversités, leurs identités sociales, culturelles, politiques,
                philosophiques ou religieuses et qui ont délibérément choisi de
                confier leurs enfants à un établissement catholique
                d’enseignement.
              </Typography>
              <div></div>
            </div>
            <div className="mb-8 text-center">
              <Button baseUrl="/#" icon={{ icon: RiArrowDropRightLine }}>
                votre Espace
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 col-span-12 md:col-span-7 gap-6 md:gap-7  ">
            {featuredList}
          </div>
        </Container>
      </div>
      <Container className="py-14 relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <Image
          src="/assets/images/apel2.jpg"
          alt=""
          width={130}
          height={130}
          className="max-sm:-mt-10"
        />
        <Typography
          variant="h2"
          component="h1"
          theme="secondary"
          className=" text-center  "
        >
          Rejoignez notre équipe et agissons pour nos enfants
        </Typography>
      </Container>
    </>
  );
};
