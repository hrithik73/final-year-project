import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { Box, SunIcon, MoonIcon, useColorMode } from "native-base"
import { Feather } from "@expo/vector-icons"

import { color } from "../configs/colors"

const HomeHeaderBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode)

  return (
    <Box style={styles.container}>
      {colorMode === "light" ? (
        <SunIcon size={6} color={color.black} onPress={toggleColorMode} />
      ) : (
        <MoonIcon size={6} color={color.black} onPress={toggleColorMode} />
      )}
      <Feather name="bell" size={20} />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    width: "100%",
  },
})
export default HomeHeaderBar
