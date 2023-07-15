import React from 'react'
import { Link } from "react-router-dom";
import {Box, Stack ,Typography,Button}from '@mui/material'
const ExerciseCard = ({i}) => (
    <Link className="exercise-card" to={`/exercise/${i.id}`} >
        <img src={i.gifUrl} alt={i.name} loading='lazy' />
        <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: 'pink', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {i.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {i.target}
      </Button>
    </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {i.name}
    </Typography>
    </Link>

)

export default ExerciseCard