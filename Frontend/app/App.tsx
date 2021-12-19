import * as React from "react"
import { NativeBaseProvider, useColorMode } from "native-base"
// import { ThemeProvider, useTheme } from "./src/utils/ThemeProvider"

import AppLoading from "expo-app-loading"
import useFont from "./src/hooks/useFont"
import theme from "./src/configs/theme"
import AppNavigation from "./src/navigations"


const App = () => {
  // const { colorMode } = useColorMode()
  const fontsLoaded = useFont()

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    // <ThemeProvider>
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
    // </ThemeProvider>
  )
}

export default App
