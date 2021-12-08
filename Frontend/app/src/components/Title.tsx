import React from "react"
import { StyleSheet, Text } from "react-native"

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return <Text>{title}</Text>
}

const styles = StyleSheet.create({
  container: {},
})
export default Title
