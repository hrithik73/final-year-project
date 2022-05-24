import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  Box,
  AspectRatio,
  Text,
  Button,
  Stack,
  Heading,
  HStack,
  Image,
} from "native-base";
import { color } from "../../configs/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";

interface Props {
  item: {
    id: string;
    title: string;
    description: string;
    image: Array<string>;
    time: string;
    location: string;
    price: string;
  };
}

const EventCard = ({ item }: Props) => {
  const navigation = useNavigation<any>();

  const onPress = () => {
    navigation.navigate("Detail", { item: item });
  };
  return (
    <Box
      shadow="5"
      rounded="lg"
      p="2"
      m="2"
      w={{ base: "64", md: "80", lg: "md" }}
      // height={"xs"}
      h="350px"
      _light={{ bg: color.background }}
      _dark={{ bg: color.dark }}
    >
      <Pressable onPress={onPress}>
        <AspectRatio w="100%">
          <Image
            borderRadius={10}
            source={{ uri: item.image[0] }}
            alt="event image"
          />
        </AspectRatio>
        <Text bold position="absolute" color="coolGray.50" top="0" m="4">
          Tech
        </Text>
        <Stack space="2" p="4">
          <Text color="gray.400">{item.time}</Text>
          <Heading size={"sm"} fontWeight="medium">
            {item.title}
          </Heading>
        </Stack>
        <HStack
          alignItems="center"
          justifyContent="space-around"
          space="5"
          px="4"
        >
          <HStack>
            <EvilIcons name="location" size={24} />
            <Text
              _light={{ color: "emerald.800" }}
              _dark={{ color: "emerald.300" }}
            >
              {item.location}
            </Text>
          </HStack>
          <Button onPress={onPress} background={color.primary}>
            {item.price}
          </Button>
        </HStack>
      </Pressable>
    </Box>
  );
};
export default EventCard;
