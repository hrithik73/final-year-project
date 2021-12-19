import { extendTheme } from "native-base"
import { DarkTheme, DefaultTheme } from "@react-navigation/native"
import { color } from "../configs/colors"

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
}

const colors = {
  primary: {
    // 50: "#EEF2F6",
    // 100: "#CFD9E7",
    // 200: "#B1C1D8",
    // 300: "#92A9C9",
    // 400: "#7491B9",
    // 500: "#5578AA",
    // 600: "#446088",
    // 700: "#334866",
    // 800: "#223044",
    // 900: "#111822",
  },
}

export default extendTheme({ config, colors })

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    background: color.background,
    // primary: "white",
    // background: "#F8F9FB",
    border: "#DADBDF",
  },
}
export const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: color.primary,
    background: color.dark,
    card: color.dark,
    border: "#626368",
  },
}
