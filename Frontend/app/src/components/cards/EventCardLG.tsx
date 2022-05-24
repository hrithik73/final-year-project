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

interface Props {
  item: {
    title: string;
    description: string;
    image: string;
    time: string;
    location: string;
    price: string;
  };
}

const EventCardLG = ({ item }: Props) => {
  return (
    <Box
      shadow="1"
      rounded="lg"
      p="2"
      m="2"
      // w={{ base: "64", md: "80", lg: "md" }}
      // w="full"
      _light={{ bg: color.background }}
      _dark={{ bg: color.dark }}
    >
      <Pressable>
        
      </Pressable>
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
        <Heading fontWeight="medium">{item.title}</Heading>
      </Stack>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        space="5"
        px="4"
        pb="2"
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
        <Button colorScheme="secondary" variant="outline">
          {item.price}
        </Button>
      </HStack>
    </Box>
  );
};
export default EventCardLG;
