import clsx from "clsx";
import Image from "next/image";

interface props {
  size?: "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: props) => {
  let sizeLogo: string;
  switch (size) {
    case "small":
      sizeLogo = "w-[100px] h-[100px]";

      break;
    case "medium":
      sizeLogo = "w-[120px] h-[120px]";

      break;
    case "large":
      sizeLogo = "w-[140px] h-[140px]";

      break;

    //default:
  }

  return (
    <div className={clsx(sizeLogo, "bg-gray-400 rounded-full relative ")}>
      <Image src="/assets/images/apel.jpeg" fill alt="logo apel" />
    </div>
  );
};
