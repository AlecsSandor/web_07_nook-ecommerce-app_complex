import React from 'react'
import { Box } from '@mui/material'


const SideMenuExpanded = () => {
  return (
    <Box>
      <ul>
        <p
          style={{
            padding: '0px 0px 0px 30px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '300',
            color: '#96837d',
          }}
        >
          Men
        </p>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?s=1' className='menuItemLink'>
            Shoes
          </a>
        </li>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?cat=Laces' className='menuItemLink'>
            Laces
          </a>
        </li>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?cat=Socks' className='menuItemLink'>
            Socks
          </a>
        </li>
        <p
          style={{
            padding: '0px 0px 0px 30px',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: '300',
            color: '#96837d',
          }}
        >
          Women
        </p>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?s=0' className='menuItemLink'>
            Shoes
          </a>
        </li>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?cat=Laces' className='menuItemLink'>
            Laces
          </a>
        </li>
        <li
          className='menuItem'
          style={{ border: 'none', paddingLeft: '20px' }}
        >
          <a href='/shop?cat=Socks' className='menuItemLink'>
            Socks
          </a>
        </li>
      </ul>
    </Box>
  )
}

export default SideMenuExpanded
