import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { Heading, Box, ScrollView } from "native-base"
import { StatusBar } from "expo-status-bar"

import CategoryList from "../components/list/CategoriesList"
import CardContainer from "../components/cards/CardContainer"
import { Categories, Posts } from "../configs/Data"
import InputContainer from "../components/InputContainer"

import { color } from "../configs/colors"

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategories] = React.useState("Technolgy")

  const handleSearch = (text: string) => {
    setSearchTerm(text)
  }

  return (
    <>
      <StatusBar />
      <Box flex={1} _dark={{ bg: color.dark }} _light={{ bg: color.background }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Heading size="xl">Welcome Hrithik,</Heading>
            <Text style={styles.subHeader}>Find Trendy Events</Text>
            <InputContainer
              searchTerm={searchTerm}
              setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
              placeholder="Search for events"
              iconName="filter"
              onPressButton={() => {
                console.log("button pressed")
              }}
            />
          </View>
          <CategoryList
            categories={Categories}
            selectedCategory={selectedCategory}
            onSelect={(item) => setSelectedCategories(item)}
          />
          <CardContainer Posts={Posts} title="Popular" />
          <CardContainer Posts={Posts} title="Latest" />
        </ScrollView>
      </Box>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor: color.background,
  },
  header: {
    // padding: 15,
  },
  headerText: {
    color: color.textDark,
    fontSize: 25,
    paddingVertical: "3%",
    fontWeight: "900",
    fontFamily: "RobotoMono_700Bold",
  },
  subHeader: {
    color: color.gray,
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "RobotoMono_400Regular",
  },
})
export default HomeScreen
