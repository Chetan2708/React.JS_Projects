import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseVideos from "../components/ExerciseVideos.jsx";
import Detailing from "../components/Detailing.jsx";
import SimilarExercises from "../components/SimilarExercises.jsx";
import { Options, fetchData, youtubeOptions } from "../utilities/fetchData.js";

const Excercisedetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscle] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExerciseData = async () => {
      const exercisedburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const ExerciseDetailData = await fetchData(
        `${exercisedburl}/exercises/exercise/${id}`,
        Options
      );
      setExerciseDetail(ExerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${ExerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleData = await fetchData(
        `${exercisedburl}/exercises/target/${ExerciseDetailData.target}`,
        Options
      );
      setTargetMuscle(targetMuscleData);
      
      const equimentExercisesData = await fetchData(`${exercisedburl}/exercises/equipment/${ExerciseDetailData.equipment}`,Options);
      setEquipmentExercises(equimentExercisesData);
    };
    
    fetchExerciseData();
  }, [id]);
  
  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detailing exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      {/* <SimilarExercises targetMuscleExercises ={targetMuscleExercise} equipmentExercises={equipmentExercises}/> */}
    </Box>
  );
};

export default Excercisedetails;
