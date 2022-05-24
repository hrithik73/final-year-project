import React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Modal,
  Button,
} from "native-base";
import { Dimensions, Platform } from "react-native";

import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from "react-native-snap-carousel";

import { color } from "../configs/colors";
import Entypo from "@expo/vector-icons/build/Entypo";
import PaymentModal from "../components/Payment";

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
  // console.log(item)
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
          // style={styles.image}
          {...parallaxProps}
        />
      </Box>
    );
  };

  return (
    <Box>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={item.image}
        // renderItem={renderItem}
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
      </VStack>
      <Button
        w="56"
        borderRadius="lg"
        alignSelf="center"
        marginTop="20"
        variant="subtle"
        colorScheme="error"
        onPress={() => setModalVisible(true)}
      >
        Book Event
      </Button>
      <PaymentModal visible={modalVisible} />
    </Box>
  );
};
export default EventDetailScreen;
