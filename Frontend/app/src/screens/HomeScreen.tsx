import React from "react"
import { View, StyleSheet, Text } from "react-native"

import InputContaner from "../components/InputContainer"
import { color } from "../configs/colors"
// import { height } from "../configs/constants"
import CategoryList from "../components/List/CategoriesList"
import EventCard from "../components/Cards/EventCard"
import { FlatList } from "react-native-gesture-handler"
import { Categories, Posts } from "../configs/Data"

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategories] = React.useState("Technolgy")
  // console.log(selectedCategory)

  const handleSearch = (text: string) => {
    setSearchTerm(text)
  }

  return (
    <View style={styles.container}>
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
        <CategoryList
          categories={Categories}
          selectedCategory={selectedCategory}
          onSelect={(item) => setSelectedCategories(item)}
        />

        <FlatList
          data={Posts}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <EventCard item={item} />
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    // height: height,
  },
  header: {
    padding: 15,
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
