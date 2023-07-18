import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'

const Banner = ({ image, headingOne, headingTwo, text, buttonText, h }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const handleClick = () => {
    window.location.href = `/shop?s=${1}`
  }

  return (
    <section id='Banner' style={{ color: 'white', display: 'flex' }}>
      <Box
        height={h}
        width='100%'
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        display='flex'
        alignItems='center'
      >
        <Box padding={isNonMobileScreens ? '80px' : '20px'} display='block'>
          <Typography
            fontSize={isNonMobileScreens ? '60px' : '30px'}
            fontWeight='700'
            lineHeight='1.3'
          >
            {headingOne}
            <br />
            {headingTwo}
          </Typography>
          <Typography fontSize='14px' fontWeight='300' marginTop='20px'>
            {text}
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: '0',
              backgroundColor: theme.palette.accent.main,
              color: theme.palette.primary.main,
              marginTop: '30px',
              paddingY: '10px',
              paddingX: '40px',
              fontFamily: 'Poppins',
              fontWeight: '300',
            }}
            onClick={handleClick}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </section>
  )
}

export default Banner
