import Select from "@/components/Molecules/Select/Select";
import ItemsCard from "@/components/Molecules/itemsCard/ItemsCard";
import LoadMoreBtn from "@/components/atoms/Button/LoadMoreBtn";
import { BiGridAlt, BiListUl } from "react-icons/bi";

const TopFilterBar = () => {
  const array = Array(10).fill("hello");
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-300 py-2 ">
        <div>
          filter
          <Select />
        </div>
        <Select />
        <div className="flex divide-x divide-gray-100 rounded border border-gray-100">
          <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
            <BiGridAlt size={23} />
          </button>

          <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
            <BiListUl size={23} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center mx-auto mt-4 flex-wrap gap-4">
        {array.map((product, index) => (
          <ItemsCard product={product} key={index} />
        ))}
      </div>
      <LoadMoreBtn />
    </div>
  );
};
export default TopFilterBar;

<div className="flex divide-x divide-gray-100 rounded border border-gray-100">
  <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    </svg>
  </button>

  <button className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  </button>
</div>;
