import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"

import { darkTheme, lightTheme } from "../configs/theme"
// import { useTheme } from "../utils/ThemeProvider"
import { useColorMode } from "native-base"

const AppNavigation = () => {
  // const { isDark } = ()
  const { colorMode } = useColorMode()
  // console.log(isDark)

  return (
    <NavigationContainer theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
