import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const { width, height } = Dimensions.get("window");
export const topBarHeight = Constants.statusBarHeight;
