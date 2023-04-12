import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

interface ItemsCardProps {
  category: {};
}
const ItemsCard: React.FC<ItemsCardProps> = ({ category }) => {
  return (
    <div className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
      <div className="relative">
        <Image width={550} height={550} src="/images/category.jpg" alt="" />

        <div className="absolute top-3 right-3 rtl:left-3">
          <div className="btn btn-icon text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600 p-2">
            <AiFillHeart />
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="pb-6">
          <a
            href="property-detail.html"
            className="text-sm hover:text-indigo-600 font-medium ease-in-out duration-500"
          >
            10765 Hillshire Ave, Baton Rouge, LA 70810, USA
          </a>
        </div>
        <p className="flex justify-between items-center list-none w-fit mx-auto">
          $6000
        </p>

        <ul className="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none justify-between">
          <li className="flex items-center mr-4 rtl:ml-4">
            <ImLocation2 />
            <span>8000sqf</span>
          </li>

          <li className="flex items-center">
            <i className="uil uil-bath text-2xl mr-2 rtl:ml-2 text-indigo-600"></i>
            <span>4 Baths</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ItemsCard;
