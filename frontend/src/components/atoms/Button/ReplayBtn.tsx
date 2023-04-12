import { AiOutlineComment } from "react-icons/ai";

const ReplayBtn = () => {
  return (
    <button className="text-slate-700 hover:text-indigo-600 transition-all duration-500 ease-in-out ml-5 rtl:mr-5 flex  items-center">
      <AiOutlineComment /> Reply
    </button>
  );
};
export default ReplayBtn;
