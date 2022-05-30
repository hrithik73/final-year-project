import { Box, FlatList } from "native-base";
import React from "react";
import EventCardLG from "../../components/cards/EventCardLG";
import { color } from "../../configs/colors";
import { Posts } from "../../configs/Data";

const Favourite = () => {
  return (
    <Box p={2} _dark={{ bg: color.dark }} _light={{ bg: color.background }}>
      <FlatList
        data={Posts}
        renderItem={({ item }) => {
          return <EventCardLG item={item} />;
        }}
      />
    </Box>
  );
};

export default Favourite;
