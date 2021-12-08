import React from "react"
import { useNavigation } from "@react-navigation/core"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { Entypo } from "@expo/vector-icons"

import EventCard from "./EventCard"

interface Props {
  Posts: any
  title: string
}

const CardContainer = ({ Posts, title }: Props) => {
  const navigation = useNavigation<any>()
  // const navi = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="black"
          onPress={() => navigation.navigate(title)}
        />
      </View>
      <FlatList
        data={Posts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <EventCard item={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: 300,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "RobotoMono_700Bold",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
export default CardContainer
