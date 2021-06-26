import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  style: string;
  name: string;
  size?: string;
  color?: string;
};

const FaIcon = ({ style, name, size, color }: Props) => (
  <Box
    as="em"
    className={`${style} fa-${name} ${size ? `fa-${size}` : null}`}
    lineHeight="1.2rem"
    marginLeft="0.5rem"
    marginRight="0.5rem"
    verticalAlign="middle"
    textColor={`${color ? color : "gray.500"}`}
    display="block"
    _active={{textColor:"blue.300"}}
  />
);

export default FaIcon;
