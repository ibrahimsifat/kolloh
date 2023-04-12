interface LabelProps {
  label: string;
}
const Label = ({ label }: LabelProps) => {
  return (
    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
      {label}
    </label>
  );
};

export default Label;
