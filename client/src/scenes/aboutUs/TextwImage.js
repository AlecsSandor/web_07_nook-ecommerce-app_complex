import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'

const TextwImage = ({ image, textPosLeft, title, caption }) => {
    const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    <Box
        display='flex'
        flexDirection={isNonMobileScreens ? (textPosLeft ? 'row' : 'row-reverse') : 'column'}
        color={theme.palette.secondary.dark}
    >
        <Box
            width= {isNonMobileScreens ? '50%' : '100%'}
            paddingY='10%'
            paddingX='40px'
            sx={{backgroundColor:`${theme.palette.secondary.light}`}}
        >
            <Typography
                fontSize='26px'
                fontWeight='600'
            >{title}</Typography>
            <Typography
                fontSize='13px'
                fontFamily='Poppins'
                fontWeight='300'
                paddingY='10px'
            >{caption}</Typography>
        </Box>
        <Box
            width= {isNonMobileScreens ? '50%' : '100%'}
            height= {isNonMobileScreens ? 'auto' : '200px'}
            sx={{
                backgroundImage:`url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></Box>
    </Box>
  )
}

export default TextwImage
