import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  MenuItemStyles,
  Sidebar,
  SubMenu,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";

import SidebarHeader from "./SidebarHeader";

import Typography from "@/components/atoms/Text/Typography";
import { BiBook } from "react-icons/bi";

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
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

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },

    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

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
        breakPoint="lg"
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div className="flex flex-col h-full">
          <SidebarHeader className="mb-8 mt-5" />
          <div className="flex-1 mb-10">
            <div className="px-8 mb-3">
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles} style={{ fontSize: "20px" }}>
              <SubMenu
                style={{ fontSize: "20px" }}
                open={isMenuOpen}
                label="Charts"
                icon={<BiBook />}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                suffix={6}
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
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
              <button className="sb-button" onClick={() => toggleSidebar()}>
                Toggle
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
