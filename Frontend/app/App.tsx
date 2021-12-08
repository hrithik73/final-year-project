import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import AppLoading from "expo-app-loading"
import {
  useFonts,
  RobotoMono_100Thin,
  RobotoMono_200ExtraLight,
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
  RobotoMono_100Thin_Italic,
  RobotoMono_200ExtraLight_Italic,
  RobotoMono_300Light_Italic,
  RobotoMono_400Regular_Italic,
  RobotoMono_500Medium_Italic,
  RobotoMono_600SemiBold_Italic,
  RobotoMono_700Bold_Italic,
} from "@expo-google-fonts/roboto-mono"

import TabNavigator from "./src/navigations/TabNavigator"
import { View, Text } from "react-native"
// import DrawerNavigator from "./src/navigations/DrawerNavigator"

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
}

const App = () => {
  let [fontsLoaded] = useFonts({
    RobotoMono_100Thin,
    RobotoMono_200ExtraLight,
    RobotoMono_300Light,
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
    RobotoMono_100Thin_Italic,
    RobotoMono_200ExtraLight_Italic,
    RobotoMono_300Light_Italic,
    RobotoMono_400Regular_Italic,
    RobotoMono_500Medium_Italic,
    RobotoMono_600SemiBold_Italic,
    RobotoMono_700Bold_Italic,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App
