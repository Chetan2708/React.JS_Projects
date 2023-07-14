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
  // State variables
  const [coins, setCoins] = useState([]); // Stores the array of coins
  const [loading, setLoading] = useState(true); // Indicates whether the data is being loaded or not
  const [Error, setError] = useState(false); // Indicates if there was an error while fetching data
  const [page, setpage] = useState(1); // Stores the current page number
  const [currency, setcurerrency] = useState("inr"); // Stores the selected currency

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"; // Determines the currency symbol based on the selected currency

  const changePage = (page) => {
    setpage(page); // Updates the current page when a page button is clicked
    setLoading(true); // Sets loading to true to indicate that data is being fetched
  };

  const btns = new Array(100).fill(1); // Creates an array of length 100 filled with value 1, used for footer buttons up to 100

  useEffect(() => {
    // Fetches the coin data when the currency or page changes
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}` // Fetches coin data from the server based on the selected currency and page number
        );
        setCoins(data); // Sets the fetched coin data in the state
        setLoading(false); // Sets loading to false as data fetching is completed
      } catch (error) {
        setError(true); // Sets Error to true if there was an error while fetching data
        setLoading(false); // Sets loading to false as data fetching is completed (even though it failed)
      }
    };
    fetchCoins(); // Calls the fetchCoins function to initiate the data fetching
  }, [currency, page]);

  if (Error)
    return <ErrorComp message="Error while fetching the Coin details " />; // Displays an error message component if there was an error while fetching data

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader /> // Displays a loader component while the data is being fetched
      ) : (
        <>
          <RadioGroup value={currency} onChange={setcurerrency}>
            <HStack spacing={6} padding={6}>
              <Radio value="inr"> INR </Radio> // Radio button for selecting INR currency
              <Radio value="usd"> USD </Radio> // Radio button for selecting USD currency
              <Radio value="eur"> EUR </Radio> // Radio button for selecting EUR currency
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"center"}>
            {/* Renders Coincard components for each coin */}
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

          <HStack w={"full"} overflowX={"auto"} p={"10"}>
            {/* Renders page buttons */}
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)} // Changes the page when a button is clicked
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
