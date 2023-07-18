import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Timer from './Timer'

const TimerBanner = ({ deadline, image }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    <section id='Hero' style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
      <Box
        height={isNonMobileScreens ? '70vh' : '30vh'}
        width='100%'
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        display='flex'
        alignItems='center'
        flexDirection='row'
      >
        {isNonMobileScreens && <Timer date={deadline} />}
      </Box>
      {!isNonMobileScreens && <Timer date={deadline} />}
    </section>
  )
}

export default TimerBanner
