import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ErrorComp from "./ErorrComp";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import Chart from "./Chart";

const CoinDetails = () => {
  const [coin, setCoin] = useState({}); // Set the initial state of 'coin' as an empty object
  const [loading, setLoading] = useState(true); // Set the initial state of 'loading' as true
  const [Error, setError] = useState(false); // Set the initial state of 'Error' as false
  const param = useParams(); // Get the URL parameters using 'useParams' hook from react-router-dom
  const [currency, setcurerrency] = useState("inr"); // Set the initial state of 'currency' as "inr"
  const [chartarray, setChartdata] = useState([]); // Set the initial state of 'chartarray' as an empty array
  const [days, setDays] = useState("24h"); // Set the initial state of 'days' as "24h"

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"; // Determine the currency symbol based on the selected currency

  const butns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"]; // Array of button values

  const switchChartdays = (x) => {
    // Function to switch the chart display based on selected button value
    switch (x) {
      case "24h":
        setDays("24h");
        break;
      case "7d":
        setDays("7d");
        break;
      case "14d":
        setDays("14d");
        break;
      case "30d":
        setDays("30d");
        break;
      case "60d":
        setDays("60d");
        break;
      case "200d":
        setDays("200d");
        break;
      case "1y":
        setDays("365d");
        break;
      case "max":
        setDays("max");
        break;
      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    // Fetch coin data and chart data when component mounts or when the dependencies change
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${param.id}` // Fetch coin data from the server using the provided ID parameter
        );
        const { data: chartData } = await axios.get(
          `${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}` // Fetch chart data based on the selected currency and days
        );
        setCoin(data); // Update the 'coin' state with the fetched data
        setChartdata(chartData.prices); // Update the 'chartarray' state with the fetched chart data
        setLoading(false); // Set 'loading' state to false as data fetching is complete
      } catch (error) {
        setError(true); // Set 'Error' state to true if an error occurs during data fetching
        setLoading(false); // Set 'loading' state to false
      }
    };

    fetchCoin(); // Call the fetchCoin function
  }, [param.id, currency, days]); // Run the effect only when 'param.id', 'currency', or 'days' changes

  if (Error) return <ErrorComp message={"Error While Fetching Coin"} />; // Display an error component if 'Error' state is true

  return (
    <Container maxW={"container.xl"}>
      {loading ? ( // Display a loader if 'loading' state is true
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart arr={chartarray} currency={currencySymbol} days={days} /> // Pass the chart data, currency symbol, and days to the Chart component
          </Box>

          <HStack padding={4} overflowX={"auto"}>
            {butns.map((i) => (
              <Button key={i} onClick={() => switchChartdays(i)}>
                {i}
              </Button>
            ))}
          </HStack>

          <RadioGroup value={currency} onChange={setcurerrency}>
            <HStack spacing={6} padding={6}>
              <Radio value="inr"> INR </Radio>
              <Radio value="usd"> USD </Radio>
              <Radio value="eur"> EUR </Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]} // Display the last updated date and time of the coin data
            </Text>
            <Image
              src={coin.image.large}
              w={16}
              h={16}
              objectFit={"contain"}
            /> // Display the coin image

            <Stat>
              <StatLabel>{coin.name}</StatLabel> // Display the coin name
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]} // Display the current price of the coin in the selected currency
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge
              fontSize={"40"}
              color={"whiteAlpha.900"}
              bgColor={"blackAlpha.900"}
            >
              {`#${coin.market_cap_rank}`} // Display the coin's market cap rank
            </Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} // Display the highest price of the coin in the last 24 hours
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} // Display the lowest price of the coin in the last 24 hours
            />

            <Box w={"full"} p="4">
              <Item
                title={"Max Supply : "}
                value={
                  coin.market_data.max_supply
                    ? coin.market_data.max_supply
                    : "NA"
                } // Display the maximum supply of the coin or "NA" if not available
              />
              <Item
                title={"Circulating Supply : "}
                value={
                  coin.market_data.circulating_supply
                    ? coin.market_data.circulating_supply
                    : "NA"
                } // Display the circulating supply of the coin or "NA" if not available
              />
              <Item
                title={"Market Cap: "}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} // Display the market cap of the coin in the selected currency
              />
              <Item
                title={"All Time Low : "}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`} // Display the all-time low price of the coin in the selected currency
              />
              <Item
                title={"All Time High : "}
                value={`${currencySymbol}${coin.market_data.ath[currency]}`} // Display the all-time high price of the coin in the selected currency
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"blue"} w={"full"} /> // Display a progress bar with a value of 50%
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} /> // Display the lowest price with a red badge
      <Text fontSize={"sm"}> 24Hrs</Text>
      <Badge children={high} colorScheme={"green"} /> // Display the highest price with a green badge
    </HStack>
  </VStack>
);

export default CoinDetails;
