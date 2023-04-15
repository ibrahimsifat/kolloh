import { useState } from "react";
import {
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoRemoveSharp,
} from "react-icons/io5";
interface CategoryListCardProps {
  title: string;
  nested: [
    {
      id: number;
      attributes: {
        name: string;
        slug: string;
        prioty: number;
        createdAt: string;
        updatedAt: string;
        locale: string;
        is_brand: boolean;
      };
    }
  ];
}

const CategoryListCard: React.FC<CategoryListCardProps> = ({
  title,
  nested,
}) => {
  const [show, setShow] = useState(false);
  const showCategory = () => setShow(!show);

  return (
    <>
      <a
        onClick={showCategory}
        className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
        role="button"
      >
        {/* <Image
        //   src={icon}
          width={18}
          height={18}
          alt={title}
          aria-hidden="true"
        /> */}

        <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
          {title}
          <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </span>
        </div>
      </a>
      {show ? (
        <ul className="pl-6 pb-3 pt-1 -mt-1">
          {nested.length > 0 &&
            nested.map((subcategory) => (
              <li key={subcategory.id}>
                <a
                  // onClick={() => handleSubCategory(subcategory.id)}
                  className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                >
                  <span className="text-xs text-gray-500 pr-1">
                    <IoRemoveSharp />
                  </span>
                  {subcategory.attributes.name}
                </a>
              </li>
            ))}
        </ul>
      ) : null}
    </>
  );
};
export default CategoryListCard;
