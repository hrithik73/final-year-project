import Entypo from "@expo/vector-icons/build/Entypo";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Icon,
  Modal,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Dimensions, Platform } from "react-native";
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from "react-native-snap-carousel";
import { color } from "../configs/colors";

interface routeType {
  route: {
    params: {
      item: {
        id: number;
        title: string;
        image: Array<string>;
        time: string;
        location: string;
        price: string;
        description: string;
      };
    };
  };
}

const { width: screenWidth } = Dimensions.get("window");

const EventDetailScreen = ({ route }: routeType) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { item } = route.params;

  const renderItem = (
    item: { index: number; item: any },
    parallaxProps: AdditionalParallaxProps | undefined
  ) => {
    return (
      <Box h={screenWidth - 120} w={screenWidth - 60}>
        <ParallaxImage
          source={{ uri: item.item }}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
            backgroundColor: "white",
            borderRadius: 8,
          }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </Box>
    );
  };

  return (
    <ScrollView>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={item.image}
        renderItem={(item, parallaxProps) => renderItem(item, parallaxProps)}
        hasParallaxImages={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={{
          overflow: "visible",
        }}
        contentContainerCustomStyle={{
          paddingVertical: 10,
        }}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
      <VStack m="5" pl="5" space="1">
        <Heading>{item.title}</Heading>
        <Heading color={color.gray} size="md">
          {item.time}
        </Heading>
        <HStack space="1" alignItems="center">
          <Icon as={Entypo} name="location-pin" size={7} color={color.black} />
          <Heading size="sm">{item.location}</Heading>
          <Heading pl="2" color={color.primary}>
            {item.price}
          </Heading>
        </HStack>
        <Box>
          <Heading pt={10} color={color.info}>
            Description
          </Heading>
          <Text>{item.description}</Text>
        </Box>
        <Button
          variant="subtle"
          colorScheme="error"
          mt="10"
          mb="10"
          onPress={() => setModalVisible(true)}
        >
          Book Event
        </Button>
      </VStack>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content
          w="100%"
          style={{ marginBottom: 0, marginTop: "auto" }}
          h="xs"
        >
          <Modal.Header
            style={{
              backgroundColor: "#1D2A3A",
              alignItems: "center",
            }}
          >
            <Text color="white">Choose Payment Option</Text>
          </Modal.Header>
          <Modal.Body>
            <VStack space="7">
              <Checkbox colorScheme="blue" value="Something">
                Google Pay
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                UPI
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                Net Banking
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                Debit Card
              </Checkbox>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
};
export default EventDetailScreen;
