import React from "react"
import { StyleSheet, View } from "react-native"
import { TextInput } from "react-native"

interface Props {
  placeholder: string
  setText: (text: string) => void
  value: string
  [x: string]: any
}

const AppTextInput = ({ value, setText, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={(value) => setText(value)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  input: {
    height: 45,
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,

    elevation: 1,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
})
export default AppTextInput
