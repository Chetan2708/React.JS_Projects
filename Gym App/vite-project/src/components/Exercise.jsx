import React,{useEffect ,useState} from 'react'
import { Pagination} from '@mui/material'
import {Box, Stack ,Typography}from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { fetchData, Options } from "../utilities/fetchData";
const Exercise = ({setExercise ,bodyPart , exercise }) => {
  const [currentPage,setCurrentPage]= useState(1)
  const exercisePerpage = 9;

  const indexOfLastExercise=  currentPage * exercisePerpage 
  const indexOfFirstExercise= indexOfLastExercise - exercisePerpage
  const currentExercise = exercise.slice(indexOfFirstExercise,indexOfLastExercise)


  const paginate =(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800 , behavior:'smooth'})
  }

  useEffect(() => {
  let fetchExercisesData = async()=>{
    let bodyPartarray= []
    if(bodyPart ==='all'){
      bodyPartarray = await fetchData('https://exercisedb.p.rapidapi.com/exercises' ,Options)
    }
    else{
        bodyPartarray = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, Options);
      }
      setExercise(bodyPartarray)
    }
    fetchExercisesData()
  }, [bodyPart])
  


  return (
    <Box id="exercises"
      sx={{mt:{ lg : '110px' 
    }}}
    mt ="50px" p={"20px"} 
    >
      <Typography variant='h4' mb={"50px"} >
        Showing Result
      </Typography>
      <Stack direction={'row'} sx={{gap:{lg: '100px' ,xs:'50px'}}}flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercise.map((i,index)=>(<ExerciseCard key={index} i={i}/>)
        )}
      </Stack>
      <Stack mt="100px" alignItems={'center'}>   
        {
        (exercise.length>9&& (
          <Pagination color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercise.length/exercisePerpage)}
          page={currentPage}
          onChange={paginate}/>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercise