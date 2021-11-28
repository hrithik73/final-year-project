import { StatusBar } from "expo-status-bar"
import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { color } from "../configs/colors"

import { height, topBarHeight } from "../configs/constants"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <View style={styles.header}></View>
      <Text style={styles.headerText}> Your Location is </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: topBarHeight,
    backgroundColor: color.gray2,
    height: height,
  },
  header: {
    backgroundColor: color.secondary,
  },
  headerText: {
    color: color.gray,
    fontSize: 30,
    fontWeight: "bold",
  },
})
export default HomeScreen
