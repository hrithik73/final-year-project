import React, { useState } from "react";
import { Box, FlatList } from "native-base";
import InputContainer from "../components/InputContainer";
import EventCardLG from "../components/cards/EventCardLG";
import { Posts } from "../configs/Data";
import { color } from "../configs/colors";

const Popular = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Box p={2} _dark={{ bg: color.dark }} _light={{ bg: color.background }}>
      <InputContainer
        searchTerm={searchTerm}
        setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
        placeholder="Search for events"
        iconName="filter"
        onPressButton={() => {
          console.log("button pressed");
        }}
      />
      <FlatList
        data={Posts}
        renderItem={({ item }) => {
          return <EventCardLG item={item} />;
        }}
      />
    </Box>
  );
};

export default Popular;
