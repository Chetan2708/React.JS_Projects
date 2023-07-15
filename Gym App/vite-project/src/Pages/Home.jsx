import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercise from '../components/Exercise';
import excludeVariablesFromRoot from '@mui/material/styles/excludeVariablesFromRoot';

const Home = () => {  
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box >
      <HeroBanner />
      <SearchExercises
      setExercise={setExercise}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercise
            setExercise={setExercise}
            bodyPart={bodyPart}
            exercise = {exercise}/>
      </Box>
  )
}

export default Home