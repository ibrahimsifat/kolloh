import ColorsTypes from "@/types/ColorsType";
import FontWeightTypes from "@/types/FontWeightTypes";
import SizesTypes from "@/types/SizesTypes";

interface TextProps {
  label?: string;
  children: React.ReactNode;
  color?: keyof typeof ColorsTypes;
  size?: keyof typeof SizesTypes;
  weight?: keyof typeof FontWeightTypes;
}

const Text: React.FC<TextProps> = ({
  weight = "regular",
  color = "black",
  size = "md",
  label,
  children,
}) => {
  return (
    <div>
      <span
        className={`font-${weight} text-${color}  text-${size}`}
        title={label}
      >
        {children}
      </span>
    </div>
  );
};
export default Text;
