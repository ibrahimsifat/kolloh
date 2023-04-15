type Theme = "light" | "dark";

import { MenuItemStyles } from "react-pro-sidebar";
export const sideBarThemes = {
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
export const menuItemStyles: MenuItemStyles = {
  root: {
    fontSize: "13px",
    fontWeight: 400,
  },

  SubMenuExpandIcon: {
    fontWeight: 900,
    fontSize: "10px",
    width: "2px",
    height: "16px",

    span: {
      width: "10px",
      height: "10px",
    },
  },
};

export const FilterListStyle = {
  fontSize: "17px",
  fontWeight: "bold",
  color: "dark",
};
