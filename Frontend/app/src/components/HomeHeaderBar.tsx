import React from "react"
import { Pressable, useColorMode, HStack } from "native-base"
import { Feather } from "@expo/vector-icons"

import { color } from "../configs/colors"

const HomeHeaderBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack
      justifyContent="space-between"
      px={4}
      pt={10}
      _dark={{ bg: color.dark }}
      _light={{ bg: color.background }}
    >
      {colorMode === "light" ? (
        <Pressable onPress={toggleColorMode}>
          <Feather name="sun" size={25} color="black" />
        </Pressable>
      ) : (
        <Pressable onPress={toggleColorMode}>
          <Feather name="moon" size={25} color="black" />
        </Pressable>
      )}
      <Feather name="bell" size={25} />
    </HStack>
  )
}

export default HomeHeaderBar
