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
  const [coin, setCoin] = useState({}); //setcoin will update the data and we will use coin variable to access everything in that data using dot or []
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const param = useParams();
  const [currency, setcurerrency] = useState("inr");
  const [chartarray, setChartdata] = useState([]);
  const [days, setDays] = useState("24h");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const butns=["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"]

  const switchChartdays=(x)=>{
    switch (x) {
      case "24h":
        setDays("24h")
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
          setDays("365d")
          break;
        case "max":
          setDays("max");
          break;
        default:
          setDays("24h");
          setLoading(true);
          break;
      }
  }
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${param.id}` //server is imported from index.js/
        );
        const { data: chartData } = await axios.get(
          `${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartdata(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [param.id, currency, days]);
  if (Error) return <ErrorComp message={"Error While Fetching Coin"} />
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart arr={chartarray} currency={currencySymbol} days={days} />
          </Box>

          <HStack padding={4} overflowX={"auto"}>

          {butns.map((i)=>(
            <Button
            key={i}
            onClick={() => switchChartdays(i)}>
              {i}
            </Button>
          ))
          }
          </HStack>

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

          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
              {/* not showing Gmt time , splitting before it and using index  0  */}
            </Text>
            <Image src={coin.image.large} w={16} h={16} objectFit={"contain"} />
            {/* image  -->three available in api large medium small  */}

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {" "}
                {currencySymbol}
                {coin.market_data.current_price[currency]}
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
              {`#${coin.market_cap_rank}`}
            </Badge>
            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} //highest price of coin in last 24 hr
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} //  lowest price of coin in last 24 hr
            />

            <Box w={"full"} p="4">
              <Item
                title={"Max Supply : "} //the maximum number of coins or tokens that will be ever created
                value={
                  coin.market_data.max_supply
                    ? coin.market_data.max_supply
                    : "NA"
                }
              />
              <Item
                title={"Circulating Supply : "} //being used in the market and in general public
                value={
                  coin.market_data.circulating_supply
                    ? coin.market_data.circulating_supply
                    : "NA"
                }
              />
              <Item
                title={"Market Cap: "} //market value of the currency
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low : "} //Lowest Price (atl--alltimelow)
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High : "} //Highest price  (ath--alltimehigh)
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
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
    <Progress value={50} colorScheme={"blue"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}> 24Hrs</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);
export default CoinDetails;
