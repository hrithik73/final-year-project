import { Input, Text } from "native-base";
import React from "react";

import { color } from "../../configs/colors";

interface AuthProps {
  placeholder: string;
  setText?: (text: string) => void;
  value?: string;
  [x: string]: any;
}

const AuthInput = ({ placeholder, setText, value, ...rest }: AuthProps) => {
  return (
    <>
      <Text ml="6" mb="0">
        {placeholder}
      </Text>
      <Input
        w={"100%"}
        borderWidth={1}
        borderColor={"#1d2a3a"}
        m="5"
        mt="2"
        placeholder={placeholder}
        _dark={{ bg: color.dark }}
        _light={{ bg: color.background }}
      />
    </>
  );
};

export default AuthInput;
