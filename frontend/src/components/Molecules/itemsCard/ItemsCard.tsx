import Time from "@/components/atoms/Time/Time";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { MdDateRange } from "react-icons/md";

interface ItemsCardProps {
  product: {};
}
const ItemsCard: React.FC<ItemsCardProps> = ({ product }) => {
  return (
    <div className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
      <div className="relative">
        <div>
          <Image
            width={550}
            height={550}
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt=""
            className=" inset-0 w-full opacity-100 group-hover:opacity-0"
          />

          <Image
            width={550}
            height={550}
            src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
            alt=""
            className="absolute inset-0 w-full  opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute top-3 right-3 rtl:left-3">
          <div className="btn btn-icon text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600 p-2">
            <AiFillHeart />
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="pb-3">
          <a
            href="property-detail.html"
            className="text-sm hover:text-indigo-600 font-medium ease-in-out duration-500"
          >
            10765 Hillshire Ave, Baton Rouge, LA 70810, USA
          </a>
        </div>
        <p className="font-bold text-xl ">$6000</p>

        <ul className="py-3 border-y border-gray-100 dark:border-gray-800 flex items-center list-none justify-between">
          <li className="flex items-center mr-4 rtl:ml-4">
            <ImLocation2 />
            <span>8000sqf</span>
          </li>
          <li className="flex items-center mr-4 rtl:ml-4">
            <MdDateRange />
            <Time date={new Date()} title="Item Release date" noYear />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ItemsCard;
