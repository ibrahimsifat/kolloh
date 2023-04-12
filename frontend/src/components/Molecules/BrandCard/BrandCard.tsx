import Image from "next/image";

interface BrandCardProps {
  brand: {};
  index: number;
}
const BrandCard: React.FC<BrandCardProps> = ({ brand, index }) => {
  return (
    <div
      // href="page-job-company-detail"
      className="group bg-white dark:bg-slate-900 p-6 rounded shadow-lg dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 border-4 border-white dark:border-slate-900 hover:border-b-indigo-600 dark:hover:border-b-indigo-600 text-center duration-500 ease-in-out"
    >
      <Image
        width={100}
        height={200}
        src={`/images/property/${index}.jpg`}
        className="h-16 w-16 mx-auto p-3 rounded-full bg-gray-50 dark:bg-slate-800 shadow-md dark:shadow-gray-800"
        alt=""
      />

      <div className="content mt-3">
        <span className="text-lg font-semibold group-hover:text-indigo-600 transition duration-500 block">
          CircleCI
        </span>

        <span className="text-base text-slate-400 block">
          <i className="uil uil-map-marker text-indigo-600 mr-1 rtl:ml-1"></i>{" "}
          U.S.A.
        </span>
      </div>
    </div>
  );
};
export default BrandCard;
