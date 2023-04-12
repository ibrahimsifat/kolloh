import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

//internal import
import { categories } from "@/utils/data";
// import Category from '@component/category/Category';
import Link from "next/link";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const NavbarPromo = () => {
  return (
    <>
      <div className="hidden lg:block xl:block bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center ">
          <div className="inline-flex ">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className="md:flex space-x-10 items-center"
                  >
                    {categories.map((category) => (
                      <Popover
                        className="relative font-serif"
                        key={category.id}
                      >
                        <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none">
                          <span>{category.title}</span>
                          <IoChevronDownCircleOutline
                            className="ml-1 h-3 w-3 group-hover:text-emerald-600"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                              <div className="relative grid gap-2 px-6 py-6 ">
                                {category.subcategories.map((item) => (
                                  <span
                                    key={item.title}
                                    className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600 cursor-pointer"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-4 w-4"
                                      aria-hidden="true"
                                    />
                                    {/* <Link href={item.href}> */}
                                    <a className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                                      {item.title}
                                    </a>
                                    {/* </Link> */}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    ))}

                    <Link
                      href="/about-us"
                      className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                    >
                      About Us
                    </Link>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
