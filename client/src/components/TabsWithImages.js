import React from 'react'
import { theme } from '../theme'
import { Box, Typography, useMediaQuery } from '@mui/material'

const TabsWithImages = ({ firstTitle, firstCaption, secondTitle, secondCaption, thirdTitle, thirdCaption, firstImage, secImage, firstImgT, secImgT, firstImgSub, secImgSub }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    <section id='home-section-02'>
      <Box
        display='flex'
        width='100%'
        alignItems='center'
        flexDirection='column'
      >
        <Box
          display='flex'
          width='100%'
          alignItems='center'
          padding='30px'
          flexWrap='wrap'
        >
          <Box
            display='flex'
            textAlign='center'
            borderRight={isNonMobileScreens ? 'solid 1px' : 'none'}
            borderColor={theme.palette.secondary.dark}
            padding='10px'
            flexDirection='column'
            width={isNonMobileScreens ? '33.333%' : '100%'}
          >
            <Typography
              fontSize='16px'
              color={theme.palette.secondary.dark}
              fontWeight='700'
            >
              {firstTitle}
            </Typography>
            <Typography
              fontSize='13px'
              fontFamily='Poppins'
              fontWeight='200'
              paddingTop='13px'
            >
              {firstCaption}
            </Typography>
          </Box>
          {isNonMobileScreens && (
            <Box
              display='flex'
              textAlign='center'
              borderRight='solid 1px'
              borderColor={theme.palette.secondary.dark}
              padding='10px'
              flexDirection='column'
              width='33.333%'
            >
              <Typography
                fontSize='16px'
                color={theme.palette.secondary.dark}
                fontWeight='700'
              >
                {secondTitle}
              </Typography>
              <Typography
                fontSize='13px'
                fontFamily='Poppins'
                fontWeight='200'
                paddingTop='13px'
              >
                {secondCaption}
              </Typography>
            </Box>
          )}

          {isNonMobileScreens && (
            <Box
              display='flex'
              textAlign='center'
              padding='10px'
              flexDirection='column'
              width='33.333%'
            >
              <Typography
                fontSize='16px'
                color={theme.palette.secondary.dark}
                fontWeight='700'
              >
                {thirdTitle}
              </Typography>
              <Typography
                fontSize='13px'
                fontFamily='Poppins'
                fontWeight='200'
                paddingTop='13px'
              >
                {thirdCaption}
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          display='flex'
          alignItems='center'
          width='100%'
          paddingY='40px'
          justifyContent='space-evenly'
        >
          <Box
            sx={{
              backgroundImage: `url(${firstImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '40%',
              paddingX: '20px',
              paddingY: '6%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              color: `${theme.palette.primary.main}`,
            }}
          >
            <Typography fontSize='28px' fontWeight='700' padding='10px'>
              {firstImgT}
            </Typography>
            <Typography fontSize='14px' fontWeight='300' padding='10px'>
              {firstImgSub}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${secImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '40%',
              paddingX: '20px',
              paddingY: '6%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              color: `${theme.palette.primary.main}`,
            }}
          >
            <Typography fontSize='28px' fontWeight='700' padding='10px'>
              {secImgT}
            </Typography>
            <Typography fontSize='14px' fontWeight='300' padding='10px'>
              {secImgSub}
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default TabsWithImages
