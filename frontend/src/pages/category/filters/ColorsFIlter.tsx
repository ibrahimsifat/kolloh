import { Button } from "@/components/atoms/Button";
import { useState } from "react";

const ColorsFilter = () => {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    leather: false,
    cotton: false,
    fabric: false,
    crocodile: false,
    wool: false,
    large: false,
    medium: false,
    small: false,
    mini: false,
    luxesignatire: false,
    luxelondon: false,
  });

  const {
    leather,
    cotton,
    fabric,
    crocodile,
    wool,
    large,
    medium,
    small,
    mini,
    luxesignatire,
    luxelondon,
  } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {
    setCheck({
      ...check,
      leather: false,
      cotton: false,
      fabric: false,
      crocodile: false,
      wool: false,
      large: false,
      medium: false,
      small: false,
      mini: false,
      luxesignatire: false,
      luxelondon: false,
    });
  };

  return (
    <div id="filterSection" className="py-3 px-4 bg-gray-50 w-full ">
      {/* Colors Section */}
      <div>
        <div className="  flex gap-4 flex-wrap">
          <Color text="gray-600" bg="blue-600" label="Blue" />
          <Color text="gray-600" bg="red-600" label="Red" />
          <Color text="gray-600" bg="indigo-600" label="Indigo" />
          <Color text="gray-600" bg="black " label="Black " />
          <Color text="gray-600" bg="purple-600" label="Purple" />
          <Color text="gray-600" bg="gray-600" label="Grey" />
        </div>
      </div>

      <hr className=" bg-gray-200 lg:w-6/12 w-full  my-8" />

      <div className="px-0 mt-10 w-full ">
        <Button onClick={applyFilters} isFullWidth>
          Apply Filter
        </Button>
      </div>
    </div>
  );
};

export default ColorsFilter;

const Color = ({
  bg,
  text,
  label,
}: {
  bg: string;
  text: string;
  label: string;
}) => {
  return (
    <div className=" flex space-x-2 justify-center items-center">
      <div className={` w-4 h-4 rounded-full bg-${bg} shadow`}></div>
      <p className={` text-base leading-4 text-${text} font-normal`}>{label}</p>
    </div>
  );
};
