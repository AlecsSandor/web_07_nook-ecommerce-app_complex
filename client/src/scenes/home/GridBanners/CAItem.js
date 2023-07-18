import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { theme } from '../../../theme'

const CAItem = ({ image, text, buttonText, width, type }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const handleClickCA = () => {
    window.location.href = `/shop?s=${parseInt(type)}`
  }

  return (
    <Box
      display='flex'
      width={isNonMobileScreens ? width : '100%'}
      padding='15px'
    >
      <Box
        display='flex'
        flexDirection='column'
        paddingTop='180px'
        paddingBottom='50px'
        width='100%'
        alignItems='center'
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          {text}
        </Typography>
        <Button
          variant='contained'
          width='100px'
          sx={{
            borderRadius: '0',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.dark,
            marginTop: '30px',
            paddingY: '7px',
            paddingX: '40px',
            fontFamily: 'Poppins',
            fontWeight: '300',
          }}
          onClick={handleClickCA}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default CAItem
