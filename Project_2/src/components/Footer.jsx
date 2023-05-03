import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Ava from "../Assets/Ava.jpg"
const Footer = () => {
  return (
    <Box
      bgColor={"whiteAlpha.800"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight={"bold"} color={"black"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color={"black"}
          >
           Our web app provides a convenient way for crypto traders to compare prices and trading volumes across different exchanges, as well as access real-time data and analysis on hundreds of cryptocurrencies.
           <br />With detailed graphs of profits and losses, users can easily track trends and make informed trading decisions.
          </Text>
        </VStack>
        <VStack>
    <Avatar size={"xl"}name='Chetan Gupta' mt={["4","0"]} src={Ava}/> 
    <Text color={"black"}>Developer/Founder</Text>

        </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
