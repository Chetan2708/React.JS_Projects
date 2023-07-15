import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, Options } from "../utilities/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExcercises = ({setExercise , bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', Options);
      
      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyPartsData)
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', Options);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800 ,left:-50, behavior: 'smooth' });

      setSearch('');
      setExercise(searchedExercises);
    }
  };

  const handleKeydown = (e)=>{
    if (e.key ==="Enter"){
      handleSearch()
    }
  }
  return (
    <Stack
      alignItems={"center"}
      mt={"35px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign={"center"}
        mb={"50px"}
      >
        Awesome Excercises <br />
        You Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          height="75px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1200px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={handleKeydown}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "red",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "25px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box >
          <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          </Box>
    </Stack>
  );
};

export default SearchExcercises;
