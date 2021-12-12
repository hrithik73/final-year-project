import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"

import AppLoading from "expo-app-loading"
import TabNavigator from "./src/navigations/TabNavigator"
import useFont from "./src/hooks/useFont"
import { color } from "./src/configs/colors"
import theme from "./src/configs/theme"

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    // accent: color.background,
    background: color.dark,
  },
}

const App = () => {
  const fontsLoaded = useFont()
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <NativeBaseProvider theme={theme}>
        <TabNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
