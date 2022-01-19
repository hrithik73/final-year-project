import * as React from "react"
import { NativeBaseProvider } from "native-base"

import AppLoading from "expo-app-loading"
import useFont from "./src/hooks/useFont"
import theme from "./src/configs/theme"
import AppNavigation from "./src/navigations"

const App = () => {
  const fontsLoaded = useFont()

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigation />
    </NativeBaseProvider>
  )
}
export default App
