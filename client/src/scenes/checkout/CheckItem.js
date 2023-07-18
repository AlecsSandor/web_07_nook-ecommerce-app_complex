import React from 'react'
import { Box, Typography, Badge, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'

const CheckItem = ({ title, price, imageUrl, count }) => {
  const currency = useSelector((state) => state.shopItems.currency)
  const isNonXtraSmallScreens = useMediaQuery('(min-width: 350px)')

  return (
    <Box paddingBottom='15px'>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Badge
            invisible={false}
            badgeContent={count}
            sx={{
             zIndex:'0',
              '& .MuiBadge-badge': {
                backgroundColor: 'lightgrey'
              },
            }}
          >
            <Box borderRadius='10px'>
              <img
                src={'http://localhost:1337' + imageUrl}
                width='65px'
                height='65px'
                alt=''
                style={{ borderRadius: '16px', border: '1px solid lightgrey', objectFit: 'cover' }}
              />
            </Box>
          </Badge>

          <Typography fontWeight='500' paddingLeft='20px' fontSize='13px'>
            {isNonXtraSmallScreens && title}
          </Typography>
        </Box>
        <Typography fontWeight='400'>
          {currency}
          {(price * count).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  )
}

export default CheckItem
