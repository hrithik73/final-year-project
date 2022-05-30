import React from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "native-base";
import { color } from "../configs/colors";

interface Props {
  placeholder: string;
  setText: (text: string) => void;
  value: string;
  [x: string]: any;
}

const AppTextInput = ({ value, setText, placeholder }: Props) => {
  return (
    <Input
      pl={3}
      ml={4}
      placeholder={placeholder}
      _dark={{ bg: color.dark }}
      _light={{ bg: color.background }}
      value={value}
      onChangeText={(value) => setText(value)}
    />
  );
};

export default AppTextInput;
