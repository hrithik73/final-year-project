import React from "react"
import { View, StyleSheet, Text } from "react-native"

const CreateEvent = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>CreateEvent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default CreateEvent
