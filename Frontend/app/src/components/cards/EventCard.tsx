import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"
import { Entypo } from "@expo/vector-icons"

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
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.location}>{item.location}</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color.primary,
              marginLeft: 20,
              borderRadius: 10,
              height: 30,
              width: 50,
            }}
          >
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
        </View>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    padding: 10,
    margin: 5,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  detailContainer: {
    height: "50%",
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 10,
    backgroundColor: color.white,

    elevation: 3,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    position: "absolute",
    top: -130,
    left: 10,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.black,
    marginBottom: 10,
    // flexGrow: 1,
    // flexShrink: 1,
  },
  time: {
    fontSize: 15,
    color: color.gray,
    marginBottom: 10,
  },
  location: {
    fontSize: 15,
    color: color.black,
  },
  price: {
    fontSize: 20,
    color: color.black,
    fontWeight: "bold",
  },
})
export default EventCard
