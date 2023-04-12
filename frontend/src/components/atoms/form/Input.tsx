interface InputAreaProps {
  defaultValue?: string;
  name: string;
  type: string;
  placeholder?: string;
}
const Input: React.FC<InputAreaProps> = ({
  defaultValue,
  name,
  type,
  placeholder,
}) => {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      placeholder={placeholder}
      name={name}
      className="py-2 px-4 md:px-5 w-full appearance-none border-2 text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-50 border-gray-200 focus:outline-none focus:border-primary h-11 md:h-12"
    />
  );
};
export default Input;
