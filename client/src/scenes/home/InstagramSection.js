import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'

const InstagramSection = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
  return (
    <section
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        color={theme.palette.secondary.dark}
        maxWidth='1660px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingX='30px'
      >
        <Typography
          fontSize='26px'
          fontWeight='600'
          paddingTop='70px'
        >
          @flowmyshoesoff
        </Typography>
        <Typography
          fontSize='13px'
          fontWeight='200'
          paddingTop='10px'
          paddingBottom='20px'
        >
          Follow us to keep up to day on the latest product launches, events and general goings-on at Lanx
        </Typography>
        <Box
          display='flex'
          
          flexWrap='wrap'
          align-items='stretch'
          justify-content='center'
          paddingBottom='70px'
          paddingTop='20px'
        >
            <img src={imageOne} alt='instaphoto' width={isNonMobileScreens ? '25%' : '50%'} flex-basis='auto' style={{padding:isNonMobileScreens ? '15px' : '5px'}}/>
            <img src={imageTwo} alt='instaphoto' width={isNonMobileScreens ? '25%' : '50%'} flex-basis='auto' style={{padding:isNonMobileScreens ? '15px' : '5px'}}/>
            <img src={imageThree} alt='instaphoto' width={isNonMobileScreens ? '25%' : '50%'} flex-basis='auto' style={{padding:isNonMobileScreens ? '15px' : '5px'}}/>
            <img src={imageFour} alt='instaphoto' width={isNonMobileScreens ? '25%' : '50%'} flex-basis='auto' style={{padding:isNonMobileScreens ? '15px' : '5px'}}/>
        </Box>
      </Box>
    </section>
  )
}

export default InstagramSection
