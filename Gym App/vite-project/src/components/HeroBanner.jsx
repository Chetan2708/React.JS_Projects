import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import banner from "../assets/images/banner.jpg"
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Gym Genius</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '30px' } }} mb="23px" mt="30px">
    Strive for progress,<br/> not perfection. 
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" >
      Check out the best muscle building excercises
    </Typography>
    <Button variant="contained" href="#exercises"  color="error" sx={{backgroundColor:"#ff265", mt:"40px",padding:"15px"}}>
        Explore Excercises
      </Button>
    <Typography fontWeight={700} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '170px' }}>
      Exercise
    </Typography>
    <img src={banner} alt="hero-banner" className="hero-banner-img"/>
  </Box>
  )
}

export default HeroBanner   