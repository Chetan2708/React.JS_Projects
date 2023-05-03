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
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setExchange(data);
        setLoading(false);  //api fetched , loading ,spinner stopped
      } catch (error) {
        setError(true);    //error 
        setLoading(false);    //error found in api , no need of spinner
      }  
    };
    fetchAll();
  }, []);
  if (Error)
    return <ErrorComp message="Error while fetching the Exchanges API " />;
  return (
    <Container maxW={"container.xl"}>
      
      {loading ? (
        <Loader />
      ) : (
        <>
        <Center>
        <Heading size={20} padding={10} > The exchange websites are shown here by Ranks : </Heading>
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
    // url of the exchange sites , so it should not be opened in react component , so using a tag 
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
        <Heading size={"md"} noOfLines={1}>{rank}  </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
