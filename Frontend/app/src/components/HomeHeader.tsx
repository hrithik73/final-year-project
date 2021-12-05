import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="wifi" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
export default HomeHeader
