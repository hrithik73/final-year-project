import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { View, Text } from "react-native"

import CreateEvent from "../screens/CreateEvent"
import HomeScreen from "../screens/HomeScreen"
import UserScreen from "../screens/UserScreen"
import Favourite from "../screens/Favourite"
import TicketScreen from "../screens/TicketScreen"
import CreateButton from "../components/Buttons/CreateButton"
import { color } from "../configs/colors"
import FeedNavigator from "./FeedNavigator"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const navigation = useNavigation<any>()

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.background,
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerLeft: () => (
            <View
              style={{
                backgroundColor: color.black,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10%",
                borderRadius: 40,
              }}
            >
              <Feather
                color="white"
                name="align-justify"
                size={20}
                // onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <Feather
              style={{ marginRight: 15 }}
              name="bell"
              size={25}
              // onPress={() => navigation.navigate("Notification")}
            />
          ),
          headerTitle: () => <Text>{""}</Text>,
          headerTitleAlign: "center",
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
