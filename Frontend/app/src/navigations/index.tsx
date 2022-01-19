import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"

import { darkTheme, lightTheme } from "../configs/theme"
import { useColorMode } from "native-base"

const AppNavigation = () => {
  const { colorMode } = useColorMode()

  return (
    <NavigationContainer theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
