import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack padding={4} shadow={"base"} bgColor={"whiteAlpha.700"}>
      <Button variant={"unstyled"} color={"black"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"black"}>
        <Link to="/Exchanges">Exhanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"black"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
