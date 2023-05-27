import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btc from "../Assets/btc1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"navyblue"} w={"full"} h={"85vh"}>
      {/* This is a motion div */}
      <motion.div
        style={{
          height: "85vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"cover"} src={btc} />

        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"blackAlpha.800"}
          mt={"-20"}
        >
          CoinTraderHQ
        </Text>
      </motion.div>
    </Box>
  );
};

export default Home;
