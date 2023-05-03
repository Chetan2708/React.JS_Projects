import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../index";
import ErrorComp from "./ErorrComp";
import Coincard from "./Coincard";
import {
  Container,
  HStack,
  Button,
  RadioGroup,
  Radio,
  // Stack,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurerrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setpage(page);
    setLoading(true);
  };
  const btns = new Array(100).fill(1);   //for footer buttons upto 100 
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}` //server is imported from index.js
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]); //fetching when currency and page change
  if (Error)
    return <ErrorComp message="Error while fetching the Coin details " />;
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

          <RadioGroup value={currency} onChange={setcurerrency}>
            {" "}
            {/* currency changing when user selects the radio value of something , because of onchange(calling)--- setcurency(changing)---currency */}
            <HStack spacing={6} padding={6}>
              {/* <Stack direction={"row"} spacing={6} padding={6}> */}
              <Radio value="inr"> INR </Radio>
              <Radio value="usd"> USD </Radio>
              <Radio value="eur"> EUR </Radio>
            </HStack>
            {/* </Stack> */}
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"center"}>
            {coins.map((i) => (
              <Coincard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          {/* footer , buttons for different pages using array maping */}
          <HStack w={"full"} overflowX={"auto"} p={"10"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)} //changing page when , button gets clicked
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
