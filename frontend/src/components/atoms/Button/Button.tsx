import ColorsTypes from "@/types/ColorsType";
import SizesTypes from "@/types/SizesTypes";

interface ButtonProps {
  label?: string;
  children: React.ReactNode;
  size?: keyof typeof SizesTypes;
  bg?: keyof typeof ColorsTypes;
  hoverColor?: keyof typeof ColorsTypes;
  text?: keyof typeof ColorsTypes;
  rounded?: keyof typeof SizesTypes;
  onClick?: (e: Event) => void;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  size = "md",
  bg = "secondary",
  hoverColor = "lightSecondary",
  text = "dark",
  rounded = "md",
  isFullWidth,
}) => {
  return (
    <button
      className={` 
      inline-flex items-center justify-center py-3 px-6 text-center text-md  hover:bg-opacity-90 lg:px-5 xl:px-6 space-x-2 font-bold bg-secondary
      ${` bg-${bg} `}
      ${` text-${size} `}
      ${` text-${text} `}
      ${` rounded-${rounded} `}
      ${` hover:bg-${hoverColor} `}
      ${isFullWidth && ` w-full `}
     
       `}
      title={label}
    >
      {children}
    </button>
  );
};
export default Button;
