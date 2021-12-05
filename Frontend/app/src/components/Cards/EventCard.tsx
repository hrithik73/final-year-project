import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"
import { color } from "../../configs/colors"

interface Props {
  item: {
    title: string
    description: string
    image: string
    time: string
    location: string
    price: string
  }
}

const EventCard = ({ item }: Props) => {
  // console.log(item)
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: color.black,
    padding: 10,
    margin: 5,
  },
  detailContainer: {
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
})
export default EventCard
