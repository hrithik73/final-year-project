import { StatusBar } from "expo-status-bar";
import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardContainer from "../../components/cards/CardContainer";
import InputContainer from "../../components/InputContainer";
import CategoryList from "../../components/list/CategoriesList";
import { color } from "../../configs/colors";
import { Categories, Posts } from "../../configs/Data";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategories] = React.useState("Technolgy");
  // console.log(isDark)

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <>
      <StatusBar />
      <Box
        flex={1}
        _dark={{ bg: color.dark }}
        _light={{ bg: color.background }}
      >
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Heading size="xl">Welcome Hrithik,</Heading>
            <Text style={styles.subHeader}>Find Trendy Events</Text>
            <InputContainer
              searchTerm={searchTerm}
              setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
              placeholder="Search for events"
              iconName="filter"
              onPressButton={() => {
                console.log("Button Pressed");
              }}
            />
          </View>
          <CategoryList
            categories={Categories}
            selectedCategory={selectedCategory}
            onSelect={(item) => setSelectedCategories(item)}
          />
          <CardContainer Posts={Posts} title="Popular" />
          <CardContainer Posts={Posts} title="Latest" />
          <CardContainer Posts={Posts} title="Event You May Like" />
          <Box mb={10}></Box>
        </ScrollView>
      </Box>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  headerText: {
    color: color.textDark,
    fontSize: 25,
    paddingVertical: "3%",
    fontWeight: "900",
    fontFamily: "RobotoMono_700Bold",
  },
  subHeader: {
    color: color.gray,
    fontSize: 20,
    fontWeight: "200",
    fontFamily: "RobotoMono_400Regular",
  },
});
export default HomeScreen;
