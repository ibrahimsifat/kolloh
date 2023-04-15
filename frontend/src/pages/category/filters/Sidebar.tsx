import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import Typography from "@/components/atoms/Text/Typography";
import { getCategories } from "@/network/categories";
import categories from "@/utils/data.json";
import {
  FilterListStyle,
  menuItemStyles,
  sideBarThemes,
} from "@/utils/filterStyles";
import { BiBook } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CategoryListCard from "../../../components/Molecules/categoryList/CategoryListCard";
import ColorsFilter from "./ColorsFIlter";

type Theme = "light" | "dark";

interface CategoryProps {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: null;
      prioty: null;
      featured: boolean;
      createdAt: string;
      updatedAt: string;
      locale: string;
      image: {
        data: null;
      };
      cover_image: {
        data: null;
      };
      subcategories: {};
      attribute_categories: {};
      localizations: {};
    };
  }[];
}
export interface CategoriesProps {
  categories: CategoryProps[];
}
export const Playground = () => {
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isMenuOpen2, setIsMenuOpen2] = useState<boolean>(true);
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>("light");

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRTL(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const Categories = categories.data;

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <Sidebar
        rtl={isRTL}
        breakPoint="sm"
        rootStyles={{
          color: sideBarThemes[theme].sidebar.color,
        }}
      >
        <div className="flex flex-col w-full h-full bg-white cursor-pointer ">
          <div className="w-full flex justify-end items-end h-16 px-6 py-4 bg-emerald-500 text-white border-b border-gray-100">
            {/* <h2
              className="font-semibold font-serif text-lg m-0 text-heading flex align-center"
              // onClick={() => toggleSidebar()}
            >
              <FaBars />
            </h2> */}
            <button
              // onClick={closeCategoryDrawer}
              className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
              aria-label="close"
              onClick={() => collapseSidebar()}
            >
              {collapsed ? <FaBars /> : <IoClose />}
            </button>
          </div>
          <div className="flex-1 mb-10">
            <Menu menuItemStyles={menuItemStyles} style={{ fontSize: "20px" }}>
              <SubMenu
                style={FilterListStyle}
                open={isMenuOpen}
                label="Categories"
                icon={collapsed && <BiBook />}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                suffix={Categories.length || 0}
              >
                {Categories.length > 0 ? (
                  Categories.map((category) => (
                    <CategoryListCard
                      key={category.id}
                      title={category.attributes.name}
                      // icon={category.icon}
                      nested={category.attributes.subcategories.data}
                    />
                  ))
                ) : (
                  <p>There is no category</p>
                )}
              </SubMenu>
              <SubMenu
                style={FilterListStyle}
                open={isMenuOpen2}
                label="Filters"
                icon={collapsed && <BiBook />}
                onClick={() => setIsMenuOpen2(!isMenuOpen2)}
                // suffix={Categories.length || 0}
              >
                <ColorsFilter />
              </SubMenu>
            </Menu>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<BiBook />} suffix={"New"}>
                Calendar
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Sidebar>

      <main>
        <div className="py-5 px-7 text-[#44596e]">
          <div className="mb-5">
            {broken && (
              <button
                // onClick={closeCategoryDrawer}
                className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
                aria-label="close"
                onClick={() => toggleSidebar()}
              >
                <FaBars />
              </button>
            )}
          </div>
          <div className="mb-14">
            <Typography variant="h4" fontWeight={600}>
              React Pro Sidebar
            </Typography>
            <Typography variant="body2">
              React Pro Sidebar provides a set of components for creating high
              level and customizable side navigation
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const categories = await getCategories();

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categories,
    },
  };
}
