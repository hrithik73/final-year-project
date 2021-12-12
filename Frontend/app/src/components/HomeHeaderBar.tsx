import React from "react"
import { SunIcon, MoonIcon, useColorMode, HStack } from "native-base"
import { Feather } from "@expo/vector-icons"

import { color } from "../configs/colors"

const HomeHeaderBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  //  console.log(colorMode)

  return (
    <HStack
      justifyContent="space-between"
      px={4}
      pt={10}
      _dark={{ bg: color.dark }}
      _light={{ bg: color.background }}
    >
      {colorMode === "light" ? (
        <SunIcon size={6} color={color.black} onPress={toggleColorMode} />
      ) : (
        <MoonIcon size={6} color={color.black} onPress={toggleColorMode} />
      )}
      <Feather name="bell" size={20} />
    </HStack>
  )
}

export default HomeHeaderBar
