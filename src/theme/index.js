import { Theme } from '@gluestack-style/react';
import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light400: '#666666',
    primary700: '#6200EE',
    DayGreen: '#73DBC8',
    DayLightGreen: '#D9EFEB',
  },
};

const lightMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    mainColor: "#73DBC8",
    sub2Color: "#D9EFEB",
    sub1Color: "#1DA189",
    chooseColor: "#FFE7AB",
    themeColor: "white",
    anotherColor: "black",
  },
};

const darkMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    mainColor: "#6B6B6B",
    sub2Color: "#3C3C3C",
    sub1Color: "#D9EFEB",
    chooseColor: "#FFE7AB",
    themeColor: "black",
    anotherColor: "white",
  },
};

export default MyTheme;
export { lightMode, darkMode };