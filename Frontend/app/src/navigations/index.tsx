import { NavigationContainer } from "@react-navigation/native";
import { useColorMode } from "native-base";
import * as React from "react";
import { darkTheme, lightTheme } from "../configs/theme";
import TabNavigator from "./TabNavigator";

const AppNavigation = () => {
  const { colorMode } = useColorMode();

  return (
    <NavigationContainer theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <TabNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
