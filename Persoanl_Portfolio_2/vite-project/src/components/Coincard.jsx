import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Coincard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    // Link to the specific coin's page based on its ID
    <Link to={`/coin/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.5)",
          },
        }}
      >
        {/* Display the coin's image */}
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectfit={"contain"}
          alt={"Exchange"}
        />
        {/* Display the coin's symbol */}
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        {/* Display the coin's name */}
        <Text noOfLines={1}>{name}</Text>
        {/* Display the coin's price if available, otherwise show "NA" */}
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default Coincard;
