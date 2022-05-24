import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/main/HomeScreen";
import Popular from "../screens/Popular";
import Latest from "../screens/Latest";
import HomeHeaderBar from "../components/HomeHeaderBar";
import CategoriesScreen from "../screens/CategoriesScreen";
import EventDetailScreen from "../screens/EventDetailScreen";

const Feed = createStackNavigator();

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
      <Feed.Screen name="Popular" component={Popular} />
      <Feed.Screen name="Category" component={CategoriesScreen} />
      <Feed.Screen name="Detail" component={EventDetailScreen} />
      <Feed.Screen name="Latest" component={Latest} />
    </Feed.Navigator>
  );
};

export default FeedNavigator;
