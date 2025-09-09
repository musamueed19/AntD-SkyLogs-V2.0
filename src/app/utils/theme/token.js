import { theme } from "antd";

// 🌞 Light Theme
export const lightTheme = {
  token: {
    colorPrimary: "#3558BE", // primary brand color
    borderRadius: 2,
  },
  algorithm: theme.defaultAlgorithm,
  components: {
    Menu: {
      itemBg: "#3558BE", // background
      itemColor: "#ffffff", // text
      itemHoverBg: "#4a6fd6",
      itemHoverColor: "#ffffff",
      itemSelectedBg: "#f1f1f1",
      itemSelectedColor: "#3558BE",
    },
  },
};

// 🌙 Dark Theme
export const darkTheme = {
  token: {
    colorPrimary: "#3558BE",
    borderRadius: 2,
  },
  algorithm: theme.darkAlgorithm,
  components: {
    Menu: {
      itemBg: "#141414", // dark background
      itemColor: "#ffffff", // white text
      itemHoverBg: "#3558BE",
      itemHoverColor: "#ffffff",
      itemSelectedBg: "#3558BE",
      itemSelectedColor: "#ffffff",
    },
  },
};





export const themeToken = {
  token: {
    colorPrimary: "#3558BE", // brand color
    borderRadius: 2,
  },

  // Let AntD handle light/dark
  algorithm: [theme.defaultAlgorithm, theme.darkAlgorithm],

  components: {
    Menu: {
      // Base: text will adapt to mode
      itemColor: "rgba(255,255,255,0.95)",

      // Hover
      itemHoverBg: "#4a6fd6",
      itemHoverColor: "#ffffff",

      // Selected
      itemSelectedBg: "#f1f1f1",
      itemSelectedColor: "#3558BE",
    },
  },
};