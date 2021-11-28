import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import CreateEvent from "../screens/CreateEvent"
import HomeScreen from "../screens/HomeScreen"
import UserScreen from "../screens/UserScreen"
import Favourite from "../screens/Favourite"
import TicketScreen from "../screens/TicketScreen"
import CreateButton from "../components/Buttons/CreateButton"

const Tab = createBottomTabNavigator()
//
const TabNavigator = () => {
  const navigation = useNavigation()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Fav"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
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
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        component={UserScreen}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator
