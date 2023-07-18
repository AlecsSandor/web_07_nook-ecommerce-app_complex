import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'
import { useEffect, useState } from 'react'

const TextVideoBanner = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
  let [lineNumber, setLineNumber] = useState(0)

  const textLines = [
    "YOUR BEST MATE'S WEDDING",
    'DRINKS AT THE PUB',
    'STROLLING THE CITY',
  ]

  useEffect(() => {
    const loop = setInterval(() => {
      if (lineNumber === 3) {
        setLineNumber(0)
      } else {
        setLineNumber(lineNumber++)
      }
    }, 1500)
    return () => clearTimeout(loop)
  })

  return (
    <section id='textvideobanner'>
      <Box display='flex' flexDirection='column'>
        <Box
          display='flex'
          flexDirection='column'
          backgroundColor={theme.palette.secondary.dark}
        >
          <Typography
            fontSize={isNonMobileScreens ? '60px' : '30px'}
            color='#FFFFFF'
            fontWeight='700'
            lineHeight='1.2'
            textAlign='right'
            paddingY='100px'
            paddingRight='30px'
          >
            BE READY FOR
            <br />
            {textLines[lineNumber]}
          </Typography>
        </Box>
        <Box
          overflow='hidden'
          width='100vw'
          height={isNonMobileScreens ? '60vh' : '30vh'}
          display='block'
        >
          <Box width='100%' height='30vw' sx={{ pointerEvents: 'none' }}>
            <iframe
              title='video'
              src='https://www.youtube.com/embed/cxv4TC65n-k?autoplay=1&mute=1&loop=1&playlist=cxv4TC65n-k'
              loop='1'
              frameBorder='0'
              allowFullScreen='1'
              autoPlay
              clipboard-write='true'
              picture-in-picture='true'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              width='640'
              height='360'
              style={{ width: '100%', height: '150%', scale: '2' }}
              left='auto'
            ></iframe>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default TextVideoBanner
