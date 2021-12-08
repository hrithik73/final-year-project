import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Box, Heading, FlatList, Center } from "native-base"
import InputContainer from "../components/InputContainer"
import EventCardLG from "../components/cards/EventCardLG"
import { Posts } from "../configs/Data"

const Popular = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <Box p={2}>
      <InputContainer
        searchTerm={searchTerm}
        setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
        placeholder="Search for events"
        iconName="filter"
        onPressButton={() => {
          console.log("button pressed")
        }}
      />
      <FlatList
        bg="red"
        data={Posts}
        renderItem={({ item }) => {
          return <EventCardLG item={item} />
        }}
      />
    </Box>
  )
}

export default Popular
