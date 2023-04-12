import ColorsTypes from "@/types/ColorsType";

declare const LogoColor: Readonly<{
  dark: string;
  light: string;
}>;
interface LogoProps {
  color?: keyof typeof ColorsTypes;
}
const Logo: React.FC<LogoProps> = ({ color = "light" }) => {
  return <p className={`text-${color} text-bold`}>KOLLSH</p>;
};
