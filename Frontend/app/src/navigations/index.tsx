import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

import { darkTheme, lightTheme } from "../configs/theme";
import { useColorMode } from "native-base";
import FeedNavigator from "./FeedNavigator";

const AppNavigation = () => {
  const { colorMode } = useColorMode();

  return (
    <NavigationContainer theme={colorMode === "dark" ? darkTheme : lightTheme}>
      {/* <TabNavigator /> */}
      <FeedNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
