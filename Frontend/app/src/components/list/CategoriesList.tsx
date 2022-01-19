import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { FlatList } from "react-native-gesture-handler"
import { color } from "../../configs/colors"
import { useNavigation } from "@react-navigation/core"

interface Props {
  categories: any
  selectedCategory: any
  onSelect: (id: string) => void
}

const CategoriesList = ({ categories, onSelect, selectedCategory }: Props) => {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Category")}
        />
      </View>
      <FlatList
        style={styles.list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => onSelect(item.title)}
              style={[
                styles.categoryContainer,
                item.title === selectedCategory ? styles.seletedStyle : null,
              ]}
            >
              <Text
                style={[
                  styles.catagorieTitile,
                  item.title === selectedCategory
                    ? styles.catagorieTitileSelected
                    : null,
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "RobotoMono_700Bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
  },
  list: {
    flexDirection: "row",
    overflow: "scroll",
    height: 40,
  },
  seletedStyle: {
    backgroundColor: color.black,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  catagorieTitile: {
    fontSize: 16,
    marginHorizontal: 10,
    color: color.black,
  },
  catagorieTitileSelected: {
    color: color.white,
  },
})
export default CategoriesList
