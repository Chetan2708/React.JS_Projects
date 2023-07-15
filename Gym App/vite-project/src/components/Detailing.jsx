import React from 'react'
import bodypart from '../assets/icons/body-part.png' 
import targetimage from '../assets/icons/target.png' 
import Equipment from '../assets/icons/equipment.png' 
import { Button, Stack, Typography } from "@mui/material";
const Detailing = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;   //Object destructuring
    const extraDetail = [ 
      {
        icon:bodypart,
        name:bodyPart,
      },
      {
        icon:targetimage,
        name:target,
      },
      {
        icon:Equipment,
        name:equipment,
      }
    ]
    
  return(
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
         <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
         <Typography sx={{ fontSize: { lg: '40px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
           {name}
         </Typography>
         <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
         Regular exercise is important for maintaining a healthy body and mind. 
         If {`you're`} looking for an effective exercise to target your {target} and improve your mood and energy levels, you might want to consider trying {name}.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#f0e9c0', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }} fontWeight={400}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
      </Stack>
  )
  }
  
export default Detailing