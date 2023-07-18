import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'
import CallMadeIcon from '@mui/icons-material/CallMade'
import { useNavigate } from 'react-router-dom'

const BlogPost = ({title, text, author, date, headerImage, index}) => {
    const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
    const navigate = useNavigate()

    // Passing the index of the clicked post as a parameter for the 'post' page, so it knows what post to render
    const handleReadMore = () => {
      navigate('/post?index='+index)
    }
  return (
    <Box
      display='flex'
      flexDirection={isNonMobileScreens ? 'row' : 'column'}
      color={theme.palette.secondary.dark}
      borderBottom='solid 1px #efe7e4'
      
      paddingY='30px'
    >
      <Box width={isNonMobileScreens ? '25%' : '100%'} paddingBottom='30px'>
        <Box lineHeight='7px' fontFamily='Poppins'>
          <p style={{ fontSize: '13px' }}>{author}</p>
          <p style={{ fontSize: '11px', fontWeight: '300' }}>{date}</p>
        </Box>
      </Box>
      <Box width={isNonMobileScreens ? '75%' : '100%'}>
        <Box>
          <img
            src={headerImage}
            alt='blogImage'
            style={{ height: 'auto', width: '100%' }}
          />
        </Box>
        <Box>
          <Typography fontSize='28px' fontWeight='700' paddingY='17px'>
            {title}
          </Typography>
          <Typography fontFamily='Poppins' fontSize='13px' fontWeight='300'>
            {text ? text.substring(0, 300) : ''}...
          </Typography>
          <Box display='flex' flexDirection='row' paddingY='15px'>
            <Typography fontFamily='Poppins' fontSize='13px' fontWeight='300' onClick={handleReadMore} sx={{cursor: 'pointer'}}>
              Read More
            </Typography>
            <CallMadeIcon fontSize='small' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BlogPost
