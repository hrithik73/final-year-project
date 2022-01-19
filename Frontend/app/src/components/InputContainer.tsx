import React from "react"
import { View, StyleSheet, Pressable } from "react-native"
import { Feather } from "@expo/vector-icons"
import { color } from "../configs/colors"

import AppTextInput from "./Input"

interface Props {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  placeholder: string
  iconName: any
  onPressButton: () => void
}

const InputContainer = ({
  searchTerm,
  setSearchTerm,
  placeholder,
  iconName,
  onPressButton,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <AppTextInput
        placeholder={placeholder}
        setText={setSearchTerm}
        value={searchTerm}
      />
      <Pressable style={styles.filterBtn} onPress={onPressButton}>
        <Feather name={iconName} size={24} color={color.black} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: color.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filterBtn: {
    width: "15%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    // backgroundColor: color.primary,
  },
})
export default InputContainer
