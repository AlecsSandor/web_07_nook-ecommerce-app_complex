import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { theme } from '../../../theme'
import { useState, useEffect } from 'react'

const Timer = ({ date }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date() // Replace with your target date
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const handleClick = () => {
    window.location.href = `/shop?s=${0}`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      paddingX={isNonMobileScreens ? '60px' : '0px'}
      paddingY='30px'
      marginLeft={isNonMobileScreens ? '60px' : '0px'}
      backgroundColor={theme.palette.primary.main}
    >
      <Box
        display='flex'
        flexDirection='column'
        color={theme.palette.secondary.dark}
        textAlign='center'
        alignItems='center'
      >
        <Typography fontSize='26px' fontWeight='700'>
          30% OFF LIMITED TIME ONLY
        </Typography>
        <Box
          display='flex'
          width='300px'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-evenly'
          marginTop='40px'
        >
          <Box display='flex' flexDirection='column' width='50px'>
            <Typography
              fontSize='16px'
              fontWeight='700'
              color={theme.palette.primary.main}
              backgroundColor={theme.palette.secondary.dark}
              padding='15px'
              borderRadius='6px'
            >
              {timeLeft.days}
            </Typography>
            <Typography
              fontSize='11px'
              fontWeight='300'
              fontFamily='Poppins'
              marginTop='10px'
            >
              Days
            </Typography>
          </Box>
          <Typography
            fontSize='30px'
            fontWeight='700'
            color={theme.palette.secondary.dark}
            marginBottom='25px'
          >
            :
          </Typography>
          <Box display='flex' flexDirection='column' width='50px'>
            <Typography
              fontSize='16px'
              fontWeight='700'
              color={theme.palette.primary.main}
              backgroundColor={theme.palette.secondary.dark}
              padding='15px'
              borderRadius='6px'
            >
              {timeLeft.hours}
            </Typography>
            <Typography
              fontSize='11px'
              fontWeight='300'
              fontFamily='Poppins'
              marginTop='10px'
            >
              Hours
            </Typography>
          </Box>
          <Typography
            fontSize='30px'
            fontWeight='700'
            color={theme.palette.secondary.dark}
            marginBottom='25px'
          >
            :
          </Typography>
          <Box display='flex' flexDirection='column' width='50px'>
            <Typography
              fontSize='16px'
              fontWeight='700'
              color={theme.palette.primary.main}
              backgroundColor={theme.palette.secondary.dark}
              padding='15px'
              borderRadius='6px'
            >
              {timeLeft.minutes}
            </Typography>
            <Typography
              fontSize='11px'
              fontWeight='300'
              fontFamily='Poppins'
              marginTop='10px'
            >
              Minutes
            </Typography>
          </Box>
          <Typography
            fontSize='30px'
            fontWeight='700'
            color={theme.palette.secondary.dark}
            marginBottom='25px'
          >
            :
          </Typography>
          <Box display='flex' flexDirection='column' width='50px'>
            <Typography
              fontSize='16px'
              fontWeight='700'
              color={theme.palette.primary.main}
              backgroundColor={theme.palette.secondary.dark}
              padding='15px'
              borderRadius='6px'
            >
              {timeLeft.seconds}
            </Typography>
            <Typography
              fontSize='11px'
              fontWeight='300'
              fontFamily='Poppins'
              marginTop='10px'
            >
              Seconds
            </Typography>
          </Box>
        </Box>
        <Typography
          fontSize='14px'
          fontFamily='Poppins'
          fontWeight='300'
          marginTop='30px'
        >
          USE CODE BYRON30 AT CHECKOUT
        </Typography>
        <Button
          variant='contained'
          sx={{
            borderRadius: '0',
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.main,
            marginTop: '30px',
            paddingY: '10px',
            fontSize: '11px',
            fontFamily: 'Poppins',
            fontWeight: '300',
            width: '150px',
          }}
          onClick={handleClick}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  )
}

export default Timer
