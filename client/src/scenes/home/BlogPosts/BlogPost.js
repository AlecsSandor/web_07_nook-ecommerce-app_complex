import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'

const BlogPost = ({ image, date, title, caption }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    <Box
      width={isNonMobileScreens ? '50%' : '100%'}
      float='left'
      padding='30px'
      sx={{ cursor: 'pointer' }}
    >
      <img src={image} alt='blogImage' width='100%' height='auto' />
      <Typography fontSize='13px' fontFamily='Poppins'>
        {date}
      </Typography>
      <Typography fontSize='20px' fontWeight='600' paddingTop='30px'>
        {title}
      </Typography>
      <Typography
        fontSize='12px'
        fontFamily='Poppins'
        fontWeight='200'
        paddingTop='30px'
      >
        {caption}
      </Typography>
    </Box>
  )
}

export default BlogPost
