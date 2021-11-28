import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"

const Feed = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Feed.Navigator>
      <Feed.Screen name="Feed" component={HomeScreen} />
    </Feed.Navigator>
  )
}

export default FeedNavigator
