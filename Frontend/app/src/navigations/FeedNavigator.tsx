import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import Popular from "../screens/Popular"

const Feed = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Feed.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Feed.Screen name="Feed" component={HomeScreen} />
      <Feed.Screen name="Popular" component={Popular} />
      {/* <Feed.Screen name="Edit" component={HomeScreen} />
      <Feed.Screen name="Create" component={HomeScreen} />
      <Feed.Screen name="Login" component={HomeScreen} />
      <Feed.Screen name="Register" component={HomeScreen} />
      <Feed.Screen name="Profile" component={HomeScreen} />
      <Feed.Screen name="Settings" component={HomeScreen} />
      <Feed.Screen name="Search" component={HomeScreen} />
      <Feed.Screen name="Notifications" component={HomeScreen} /> */}
    </Feed.Navigator>
  )
}

export default FeedNavigator
