import { ChangeEvent, FormEvent, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(searchInput);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  return (
    <form className="relative max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        value={searchInput}
        onChange={handleInputChange}
        type="text"
        id="search"
        name="search"
        className="pt-3 pr-40 rtl:pl-40 pb-4 pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900/60 shadow dark:shadow-gray-800 border-none focus:ring-2 focus:ring-primary focus:outline-none  duration-200"
        placeholder="Anything you want..."
      />
      <button
        type="submit"
        className="btn absolute top-[2px] right-[3px] rtl:left-[3px] h-[46px] bg-primary hover:bg-dark_primary text-white rounded-full md:px-4 px-2"
      >
        <BiSearchAlt size={40} />
      </button>
    </form>
  );
};
export default SearchBar;
