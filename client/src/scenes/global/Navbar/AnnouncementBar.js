import React from 'react'
import { Box, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

const AnnouncementBar = () => {
  return (
    <Box
        width='100%'
        display='grid'
        gridTemplate= 'auto/18% auto 18%'
        posiiton='relative'
        backgroundColor='#252525'
        padding='7px'
    >
      <Box
        justifyContent='center'
        alignSelf='center'
        gridArea= '1/2/2/3'
      >
        <Typography
            color='white'
            textAlign='center'
            fontFamily='Poppins'
            fontSize='11px'
            fontWeight={500}
        >FREE SHIPPING ON ORDERS OVER $200</Typography>
      </Box>
      <Box
        gridArea='1/2/2/4'
        alignSelf='center'
      >
        <Box display='flex' flexDirection='row' color='white' justifyContent='flex-end' columnGap='14px' paddingX='14px'>
          <TwitterIcon fontSize='medium' />
          <FacebookIcon fontSize='medium' />
          <InstagramIcon fontSize='medium' />
          <PinterestIcon fontSize='medium' />
        </Box>
      </Box>
    </Box>
  )
}

export default AnnouncementBar
