import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import HomeScreen from "./src/screens/HomeScreen"
import TabNavigator from "./src/navigations/TabNavigator"

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  )
}
export default App
