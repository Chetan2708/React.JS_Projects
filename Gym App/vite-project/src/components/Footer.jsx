import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/gymlogo.webp';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '300px', height: '300px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"> Follow Me 💕 on LinkedIn
      </Typography>
      <Button variant="contained" href="https://www.linkedin.com/in/chetan-gupta-7a7951200/" sx={{padding:"15px"}}>
        LinkedIn
      </Button>
  </Box>
);

export default Footer; 