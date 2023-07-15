import React from "react";
import { Link } from "react-router-dom";
import { Divider, Stack } from "@mui/material";

import logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around"
      
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>

      <Stack
        direction="row"
        gap={"30px"}
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
        divider={<Divider orientation="vertical" flexItem/>}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
