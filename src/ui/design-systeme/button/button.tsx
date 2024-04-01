import { IconProps } from "@/types/icon-props";
import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?:
    | "accent"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "success"
    | "danger";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;

  action?: Function;
  type?: "button" | "submit";
  fullWith?: boolean;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,

  type = "button",
  fullWith = false,

  action = () => {},
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "accent": //default
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded ";

      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded ";

      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded ";

      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border border- gray-500 text-gray-600 rounded cursor-not-allowed ";

      break;
    case "success":
      variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded ";

      break;
    case "danger":
      variantStyles =
        "bg-alert-danger hover:bg-alert-danger/75 text-white rounded ";

      break;
    case "ico":
      if (iconTheme === "accent") {
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
    default:
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? " flex items-center justify-center w-[30px] h-[30px]"
          : "px-[14px] py-[10px]"
      } `;
      icoSize = 18;
      break;
    case "medium": //Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? " flex items-center justify-center w-[50px] h-[50px]"
          : "px-[16px] py-[12px]"
      } `;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium${
        variant === "ico"
          ? " flex items-center justify-center w-[60px] h-[60px]"
          : " px-[16px]  py-[18px]"
      } `;
      icoSize = 24;
      break;

    default:
      break;
  }
  return (
    <>
      <button
        type="button"
        className={clsx(variantStyles, icoSize, sizeStyles)}
        onClick={() => console.log("click")}
        disabled={disabled}
      >
        {" "}
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </button>
    </>
  );
};