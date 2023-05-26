import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../index";
import ErrorComp from "./ErorrComp";
import {
  Container,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Exchanges = () => {
  const [exchange, setExchange] = useState([]); // State to hold the exchange data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [Error, setError] = useState(false); // State to manage error state

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`); // Fetch exchange data from the server

        setExchange(data); // Set the exchange data in the state
        setLoading(false); // Data fetched, loading spinner can be stopped
      } catch (error) {
        setError(true); // Set error state to true if there is an error
        setLoading(false); // Error found in API, no need for the loading spinner
      }
    };

    fetchAll(); // Call the fetchAll function when the component mounts
  }, []);

  if (Error)
    return <ErrorComp message="Error while fetching the Exchanges API " />; // If there is an error, display the error component

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader /> // Display the loading spinner if the data is still loading
      ) : (
        <>
          <Center>
            <Heading size={20} padding={10}>
              The exchange websites are shown here by Ranks:
            </Heading>
          </Center>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {exchange.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    // An anchor tag is used to open the exchange sites in a new tab
    <a href={url} target={"blank"}>
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
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectfit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
