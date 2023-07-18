import React from 'react'
import { Box, Typography } from '@mui/material'
import { theme } from '../theme'
import StarIcon from '@mui/icons-material/Star'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Box
        display='flex'
        width='100%'
        alignItems='center'
        flexDirection='column'
      >
        <Typography
          fontSize='30px'
          color={theme.palette.secondary.dark}
          fontWeight='600'
          paddingTop='50px'
        >
          TESTIMONIALS
        </Typography>
        <Box
          display='flex'
          width='100%'
          alignItems='center'
          textAlign='center'
          padding='30px'
          flexWrap='wrap'
          justifyContent='center'
        >
          <Box
            display='flex'
            textAlign='center'
            padding='10px'
            flexDirection='column'
            width='33.333%'
            minWidth='300px'
          >
            <Box 
                padding='20px'
            >
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
            </Box>
            <Typography fontSize='13px' fontFamily='Poppins' fontWeight='200'>
              "These boots go with everything. They're my go to pair every day."
            </Typography>
            <Typography
              paddingTop='13px'
              fontSize='16px'
              color={theme.palette.secondary.dark}
              fontWeight='700'
            >
              Helen Dale
            </Typography>
          </Box>
          <Box
            display='flex'
            textAlign='center'
            padding='10px'
            flexDirection='column'
            width='33.333%'
            minWidth='300px'
          >
            <Box 
                padding='20px'
            >
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
            </Box>
            <Typography fontSize='13px' fontFamily='Poppins' fontWeight='200'>
            "These shoes made my wedding outfit. Highly recommend!"
            </Typography>
            <Typography
              paddingTop='13px'
              fontSize='16px'
              color={theme.palette.secondary.dark}
              fontWeight='700'
            >
              Wayne McMillen
            </Typography>
          </Box>
          <Box
            display='flex'
            textAlign='center'
            padding='10px'
            flexDirection='column'
            width='33.333%'
            minWidth='300px'
          >
            <Box 
                padding='20px'
            >
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
                <StarIcon sx={{color: `${theme.palette.secondary.dark}`}}/>
            </Box>
            <Typography fontSize='13px' fontFamily='Poppins' fontWeight='200'>
            "I am in love with these boots. Yes, you need to break them in, but even that is a joy, 
            moving around the house and feeling them warming and adjusting to your foot."
            </Typography>
            <Typography
              paddingTop='13px'
              fontSize='16px'
              color={theme.palette.secondary.dark}
              fontWeight='700'
            >
              Melissa Smith
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default Testimonials
