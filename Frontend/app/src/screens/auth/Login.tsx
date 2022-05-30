import React from "react";
import { Box, Heading, Text } from "native-base";
import { Button, Pressable, StyleSheet } from "react-native";
import AuthInput from "../../components/AuthInput";
import { useNavigation } from "@react-navigation/native";
import useLoggedIn from "../../hooks/useLoggedIn";

const Login = () => {
  const [isLoggedIn, setUser] = useLoggedIn();

  return (
    <Box>
      <Heading pt="10" ml="5">
        <Text>Login</Text>
      </Heading>
      <Text ml="5" pt="5" fontSize={"md"}>
        Welcome to the Event Planner app. Please login to continue.
      </Text>
      <Box mr="10" mt="5">
        <AuthInput placeholder="Email" value="" />
      </Box>
      <Box mr="10" mt="5">
        <AuthInput type="password" placeholder="Password" value="" />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        mr="5"
      >
        <Text color={"#1d2a3a"} fontWeight={"bold"} fontSize="md">
          Forgot Password?
        </Text>
      </Box>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 55,
    marginHorizontal: 85,
    marginTop: 20,
    elevation: 3,
    backgroundColor: "#1d2a3a",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Login;
