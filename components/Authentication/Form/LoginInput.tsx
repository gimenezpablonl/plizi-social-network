import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import FaIcon from "../../Icons";

type Props = {
  icon: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const LoginInput = ({ icon, placeholder, value, onChange }: Props) => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaIcon style="far" name={icon} />}
        />
        <Input
          type={placeholder === "Password" ? "password" : "text"}
          autoFocus={placeholder === "Username" ? true : false}
          variant="flushed"
          bgColor="white"
          _hover={{ backgroundColor: "gray.50" }}
          placeholder={placeholder}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      </InputGroup>
    </>
  );
};

export default LoginInput;
