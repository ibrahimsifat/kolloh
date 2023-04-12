import Image from "next/image";
interface AvatarProps {
  src: string;
  size: string;
  style?: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, size, style }) => {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      className={`h-${size} w-${size} rounded-full shadow ${style}`}
      alt=""
    />
  );
};
export default Avatar;
