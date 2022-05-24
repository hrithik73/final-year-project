import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from "@expo/vector-icons";
import { Box, FlatList, Heading, HStack, IconButton } from "native-base";

import EventCard from "./EventCard";

interface Props {
  Posts: any;
  title: string;
}

const CardContainer = ({ Posts, title }: Props) => {
  const navigation = useNavigation<any>();

  console.log(title);

  return (
    <Box flex={1}>
      <HStack justifyContent="space-between" py="4">
        <Heading size="lg"> {title}</Heading>
        <IconButton
          size={10}
          onPress={() => navigation.navigate(title)}
          icon={<Entypo name="dots-three-horizontal" size={25} />}
        />
      </HStack>
      <FlatList
        data={Posts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <EventCard item={item} />;
        }}
      />
    </Box>
  );
};
export default CardContainer;
