import React from "react"

import { Pressable, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { color } from "../../configs/colors"

interface AppProps {
  onPress: () => void
}

const CreateButton = ({ onPress }: AppProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={40} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.primary,
    borderColor: color.background,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 40,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
})

export default CreateButton
