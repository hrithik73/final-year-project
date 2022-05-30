import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const Auth = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
export default AuthNavigator;
