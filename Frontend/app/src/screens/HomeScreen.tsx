import React from "react"
import { View, StyleSheet, Text } from "react-native"

import InputContainer from "../components/InputContainer"
import { color } from "../configs/colors"
import CategoryList from "../components/List/CategoriesList"

import CardContainer from "../components/Cards/CardContainer"
import { Categories, Posts } from "../configs/Data"
import { ScrollView } from "react-native-gesture-handler"

import EventCard from "../components/Cards/EventCard"

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategories] = React.useState("Technolgy")

  const handleSearch = (text: string) => {
    setSearchTerm(text)
  }
  const temp = {
    id: "UG9zdDo1",
    title: "React-Native Conferences",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    time: "2020-05-01T00:00:00.000Z",
    price: "100",
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Hrithik, </Text>
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
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: color.background,
  },
  header: {
    // padding: 15,
  },
  headerText: {
    color: color.black,
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
