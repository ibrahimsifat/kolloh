import Image from "next/image";
import { AiTwotoneHeart } from "react-icons/ai";

export interface ICategoryCardProps {
  category: {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    url: string;
  };
}

const HomeCategoryCard: React.FC<ICategoryCardProps> = ({ category }) => {
  return (
    <div
      className="w-full border picture-item bg-[url('https://source.unsplash.com/random')] rounded-tr-full rounded-tl-full "
      data-groups='["branding"]'
    >
      <div className="group relative overflow-hidden bg-white dark:bg-slate-900  shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out  rounded-tr-full rounded-tl-full ">
        <div className="relative ">
          <Image
            width={550}
            height={550}
            src="/images/category.jpg"
            alt="image"
            className="rounded-tr-full rounded-tl-full "
          />
          <div className="absolute right-5 top-0 mt-6 mr-6 rtl:ml-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out border-2 rounded-xl">
            <div className="btn btn-icon text-lg dark:bg-slate-900 border-0 shadow dark:shadow-gray-800  text-red-500 hover:text-red-700 focus:text-green-500 rounded-full">
              <AiTwotoneHeart size={35} />
            </div>
          </div>
        </div>

        <p className="text-lg my-5 mx-auto text-center font-semibold hover:text-indigo-600 duration-500 ease-in-out">
          Deep Phantasy
        </p>
      </div>
    </div>
  );
};
export default HomeCategoryCard;
