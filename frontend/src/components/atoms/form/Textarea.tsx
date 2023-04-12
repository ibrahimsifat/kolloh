import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // any custom props
}
const Textarea = () => {
  const textAreaProps: TextAreaProps = {
    id: "myTextarea",
    rows: 4,
    className:
      "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 focus:border-primary dark:focus:border-primary",
    placeholder: "Enter text here...",
    required: true,
  };
  return <textarea {...textAreaProps}></textarea>;
};
export default Textarea;
