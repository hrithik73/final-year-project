import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import CreateEvent from "../screens/CreateEvent"
import UserScreen from "../screens/UserScreen"
import Favourite from "../screens/Favourite"
import TicketScreen from "../screens/TicketScreen"
import CreateButton from "../components/buttons/CreateButton"
import FeedNavigator from "./FeedNavigator"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const navigation = useNavigation<any>()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
        component={FeedNavigator}
      />
      <Tab.Screen
        name="Fav"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
        component={Favourite}
      />
      <Tab.Screen
        name="Create"
        component={CreateEvent}
        options={{
          tabBarButton: () => (
            <CreateButton onPress={() => navigation.navigate("Create")} />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="ticket" size={size} color={color} />
          ),
        }}
        component={TicketScreen}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator
