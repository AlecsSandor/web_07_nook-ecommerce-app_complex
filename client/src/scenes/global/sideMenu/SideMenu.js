import * as React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import Slide from '@mui/material/Slide'
import { theme } from '../../../theme'
import CloseIcon from '@mui/icons-material/Close'
import { setIsSideMenuOpen } from '../../../state'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import SideMenuExpanded from '../../../components/SideMenuExpanded'
import { useState } from 'react'
import Cart from './Cart'
import { useAuthContext } from '../../account/authentication/AuthContext'

const SideMenu = () => {
  const isSideMenuOpen = useSelector((state) => state.sideMenu.isSideMenuOpen)

  //  isCart is a state variable which contains the nature of the sideMenu which can be: the Mobile Menu, Search, Cart, or Cart with no items
  const isCart = useSelector((state) => state.sideMenu.isCart)

  // See if the sideMenu will host the mobile menu element
  const [isExpanded, setIsExpanded] = useState(false)
  const handleShopClick = () => {
    setIsExpanded(!isExpanded)
  }

  const dispatch = useDispatch()
  const noOfItems = useSelector((state) => state.sideMenu.cartItems).length

  const { user } = useAuthContext()

  return (
    <Box
      display={isSideMenuOpen ? 'block' : 'none'}
      backgroundColor='rgba(0, 0, 0, 0.4)'
      position='fixed'
      zIndex={10}
      width='100%'
      height='100%'
      left='0'
      top='0'
      overflow='auto'
    >
      <Slide in={isSideMenuOpen} timeout={400} direction='left'>
        <Box
          position='fixed'
          right='0'
          bottom='0'
          width='max(300px, 50%)'
          height='100%'
          backgroundColor={theme.palette.secondary.light}
          sx={{ overflowY: 'auto' }}
        >
          <Box
            display='flex'
            justifyContent='space-between'
            height='auto'
            width='100%'
            paddingX='20px'
            paddingY='10px'
            alignItems='center'
          >
            <Typography
              fontSize='28px'
              color={theme.palette.secondary.dark}
              fontWeight='600'
            >
              {isCart === 'cart' && 'Shopping Cart'}
              {isCart === 'search' && 'Search'}
            </Typography>
            <CloseIcon
              fontSize='large'
              sx={{
                '&:hover': { cursor: 'pointer' },
                color: `${theme.palette.secondary.dark}`,
              }}
              onClick={() => dispatch(setIsSideMenuOpen({}))}
            />
          </Box>

          {/* Side Menu for when it's a menu - only for mobile */}
          {isCart === 'menu' && (
            <Box display='flex' alignItems='center'>
              <ul style={{ display: 'block', width: '100%', padding: '0' }}>
                <li
                  className='menuItem'
                  onClick={handleShopClick}
                  style={{ cursor: 'pointer' }}
                >
                  <p className='menuItemLink'>Shop</p>
                </li>
                {isExpanded && <SideMenuExpanded />}
                <li className='menuItem'>
                  <a href='/about' className='menuItemLink'>
                    About Us
                  </a>
                </li>
                <li className='menuItem'>
                  <a href='/blog' className='menuItemLink'>
                    Blog
                  </a>
                </li>
                <li className='menuItem'>
                  <a href='/contact' className='menuItemLink'>
                    Contact
                  </a>
                </li>
                <p
                  style={{
                    padding: '30px 0px 15px 30px',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '300',
                    color: '#96837d',
                  }}
                >
                  ACCOUNT
                </p>
                <li className='menuItem'>
                  <a href='/account/login' className='menuItemLink'>
                    {user ? `Logged In as ${user.username}` : 'Log In'}
                  </a>
                </li>
                <li className='menuItem'>
                  <a href='/account/register' className='menuItemLink'>
                    Create Account
                  </a>
                </li>
              </ul>
            </Box>
          )}

          {/* Side Menu for when it's a cart */}
          {isCart === 'cart' && (
            <Box sx={{ overflowY: 'visible' }}>
              {!noOfItems ? (
                <Typography
                  textAlign='center'
                  fontSize='11px'
                  fontFamily='Poppins'
                  paddingY='30%'
                  color={theme.palette.secondary.dark}
                >
                  Your cart is currently empty
                </Typography>
              ) : (
                <Cart />
              )}
            </Box>
          )}

          {/* Side Menu for when it has the search function */}
          {isCart === 'search' && (
            <Box
              display='flex'
              alignItems='center'
              paddingX='10px'
              paddingY='30px'
            >
              <IconButton sx={{ color: '#453029' }}>
                <SearchIcon fontSize='medium' />
              </IconButton>
              <TextField
                id='standard-basic'
                label='Search for items'
                variant='standard'
                sx={{
                  flexGrow: '1',
                  input: { color: theme.palette.secondary.dark },
                  '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                    {
                      color: '#453029',
                      borderColor: '#453029',
                    },
                  '& .css-vqgpu0-MuiInputBase-root-MuiInput-root:after': {
                    borderColor: '#453029',
                  },
                  '& .MuiInputBase-colorPrimary:after': {
                    color: '#453029',
                    borderColor: '#453029',
                  },
                  '& .css-1c8ww8m.Mui-focused': {
                    borderColor: '#453029',
                    color: '#453029',
                  }
                }}
              />
            </Box>
          )}
        </Box>
      </Slide>
    </Box>
  )
}

export default SideMenu
