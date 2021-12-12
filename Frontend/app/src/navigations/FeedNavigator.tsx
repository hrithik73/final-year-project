import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import Popular from "../screens/Popular"
import Latest from "../screens/Latest"
import HomeHeaderBar from "../components/HomeHeaderBar"

const Feed = createStackNavigator()

const FeedNavigator = () => {
  return (
    <Feed.Navigator>
      <Feed.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          header: () => <HomeHeaderBar />,
        }}
      />
      <Feed.Screen name="Popular" component={Popular}
      />
      <Feed.Screen name="Latest" component={Latest} />
    </Feed.Navigator>
  )
}

export default FeedNavigator
