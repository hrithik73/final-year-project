import React from "react"
import { StyleSheet, View } from "react-native"
import { Input } from "native-base"
import { color } from "../configs/colors"

interface Props {
  placeholder: string
  setText: (text: string) => void
  value: string
  [x: string]: any
}

const AppTextInput = ({ value, setText, placeholder }: Props) => {
  return (
    <Input
      w={"80%"}
      pl={3}
      ml={4}
      placeholder={placeholder}
      // style={styles.input}
      _dark={{ bg: color.dark }}
      _light={{ bg: color.background }}
      value={value}
      onChangeText={(value) => setText(value)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
    borderColor: "black",

    // overflow: "hidden",
    // backgroundColor: color.background,
    // elevation: 3,
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor: "black",
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
})
export default AppTextInput
