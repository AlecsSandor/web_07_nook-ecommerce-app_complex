import React from 'react'
import { Box, Typography} from '@mui/material'
import { theme } from '../../../theme'
import { g_11 } from '../../../assets'

const DropdownMenu = ({marginTop}) => {
  return (
    <Box
      display='block'
      position='absolute'
      z-index='2'
      width='100%'
      backgroundColor='#FFFFFF'
      visibility='visible'
      paddingY='30px'
      marginTop={marginTop}
    >
      <Box
        display='flex'
        flexWrap='wrap'
        width='100%'
        paddingX='50px'
        justifyContent='space-evenly'
      >
        <Box paddingX='30px' >
          <Typography
            fontSize='20px'
            fontWeight='600'
            color={theme.palette.secondary.dark}
          >
            MENS
          </Typography>
          <ul style={{ display: 'block', width: '100%', padding: '0' }}>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?s=1'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Shoes
              </a>
            </li>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?cat=Laces'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Laces
              </a>
            </li>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?cat=Socks'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Socks
              </a>
            </li>
          </ul>
        </Box>
        <Box borderLeft='solid 1px rgba(69, 48, 41, 0.1)' paddingX='30px' >
          <Typography
            fontSize='20px'
            fontWeight='600'
            color={theme.palette.secondary.dark}
          >
            WOMENS
          </Typography>
          <ul style={{ display: 'block', width: '100%', padding: '0' }}>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?s=0'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Shoes
              </a>
            </li>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?cat=Laces'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Laces
              </a>
            </li>
            <li className='menuItem' style={{ border: 'none' }}>
              <a
                href='/shop?cat=Socks'
                className='menuItemLink'
                style={{ paddingLeft: '0px', fontSize: '17px' }}
              >
                Socks
              </a>
            </li>
          </ul>
        </Box>
        <Box 
            borderLeft='solid 1px rgba(69, 48, 41, 0.1)' 
            paddingX='30px' 
            alignItems='center' 
            display='flex' 
            flexDirection='column'
            rowGap='10px'
            color={theme.palette.secondary.dark}
        >
          <img src={g_11} alt='' width='300px' />
          <Typography fontWeight='700' fontSize='20px'>30% OFF TODAY ONLY</Typography>
          <Typography fontWeight='600'>USE CODE NOOK45 AT CHECKOUT</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DropdownMenu
