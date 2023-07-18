import React from 'react'
import {
  Box,
  IconButton,
  MenuItem,
  Typography,
  useMediaQuery,
  TextField,
  Badge,
} from '@mui/material'
import { theme } from '../../../theme'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSideMenuOpen, setIsCart } from '../../../state/sideMenuSlice'
import { setCurrency } from '../../../state/shopItemsSlice'
import AnnouncementBar from './AnnouncementBar'
import DropdownMenu from './DropdownMenu'
import { Link } from 'react-router-dom'

const currencies = [
  {
    value: '$',
    label: 'USD $',
  },
  {
    value: '€',
    label: 'EUR €',
  },
  {
    value: '£',
    label: 'GBP £',
  },
]

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const currency = useSelector((state) => state.shopItems.currency)

  // Handle the background of the navbar
  const [navIsHovered, setNavIsHovered] = useState(false)
  const handleHover = () => {
    setNavIsHovered(true)
  }
  const handleMouseLeave = () => {
    setNavIsHovered(false)
    setShopLinkIsHovered(false)
  }

  // Handle the dropdown of the item
  const [shopLinkIsHovered, setShopLinkIsHovered] = useState(false)
  const handleHoverShopEnter = () => {
    setShopLinkIsHovered(true)
  }
  const handleHoverShopLeave = () => {
    setShopLinkIsHovered(false)
  }

  // Handle the state of the Side Menu
  const dispatch = useDispatch()
  const handleSideClick = (source) => {
    dispatch(setIsCart({ source }))
    dispatch(setIsSideMenuOpen({}))
  }

  // Handle currency change
  const handleCurrencyChange = (value) => {
    if (value === undefined) {
      dispatch(setCurrency('£'))
    } else {
      dispatch(setCurrency(value))
    }
  }

  // If the user scrolls down, the background of the navbar becomes visible
  const [isScrolled, setIsScrolled] = useState(false)
  const userScrolling = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.onscroll = function () {
    userScrolling()
  }

  // If there are items in the cart - pop up the red dot badge
  const lenghtOfItems = useSelector((state) => state.sideMenu.cartItems).length
  const areItems = () => {
    if (lenghtOfItems > 0) {
      return true
    } else {
      return false
    }
  }

  return (

    // Top level container
    <Box
      display='flex'
      alignItems='center'
      flexDirection='column'
      width='100%'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
      borderBottom={navIsHovered || isScrolled ? 'solid 1px' : 'none'}
      borderColor='rgba(181,181,181,.3)'
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      sx={{
        transition: 'all 300ms ease-in-out',
        backgroundColor: `${navIsHovered || isScrolled ? '#FFFFFF' : 'none'}`,
      }}
    >

      {/* Display the Announcement Bar above the navbar if the user has not scrolled */}
      {shopLinkIsHovered && isNonMobileScreens && (
        <DropdownMenu marginTop={isScrolled ? '90px' : '127px'} />
      )}
      {isNonMobileScreens && !isScrolled && <AnnouncementBar />}

      {/* DESKTOP NAV ------------------------------------------------------------------------- */}
      {isNonMobileScreens ? (
        <Box
          width='96%'
          margin='auto'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography
            sx={{
              '&:hover': { cursor: 'pointer' },
              paddingY: '20px',
              transition: 'all 300ms ease-in-out',
              textDecoration: 'none',
            }}
            component={Link}
            to='/'
            color={navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}
            fontSize='33px'
            fontWeight='bold'
          >
            NOOK
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            columnGap='15px'
            zIndex='2'
            color={navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}
            sx={{ transition: 'all 300ms ease-in-out' }}
          >
            <MenuItem
              onMouseEnter={handleHoverShopEnter}
              sx={{
                padding: '15px',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                  transition: 'all 300ms ease-in-out',
                },
              }}
            >
              <Typography fontSize='14px'>SHOP</Typography>
            </MenuItem>
            <MenuItem
              onMouseEnter={handleHoverShopLeave}
              sx={{
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                  transition: 'all 300ms ease-in-out',
                },
              }}
              component={Link}
              to='/about'
            >
              <Typography fontSize='14px'>ABOUT US</Typography>
            </MenuItem>
            <MenuItem
              onMouseEnter={handleHoverShopLeave}
              sx={{
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                  transition: 'all 300ms ease-in-out',
                },
              }}
              component={Link}
              to='/blog'
            >
              <Typography fontSize='14px'>BLOG</Typography>
            </MenuItem>
            <MenuItem
              onMouseEnter={handleHoverShopLeave}
              sx={{
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                  transition: 'all 300ms ease-in-out',
                },
              }}
              component={Link}
              to='/contact'
            >
              <Typography fontSize='14px'>CONTACT</Typography>
            </MenuItem>

            <TextField
              onMouseEnter={handleHoverShopLeave}
              id='standard-select-currency'
              variant='standard'
              select
              data-testid="suppress-select-warning"
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              InputProps={{ disableUnderline: true }}
              defaultValue={currency}
              sx={{
                color: theme.palette.secondary.dark,
                transition: 'all 300ms ease-in-out',
                input: { color: 'red' },
                alignSelf: 'center',
                // '& .css-14rkpbm-MuiInputBase-root-MuiInput-root': {
                //   color: `${
                //     navIsHovered || isScrolled ? '#453029' : '#FFFFFF'
                //   }`,
                //   transition: 'all 300ms ease-in-out'
                // },
                '& .MuiInputBase-colorPrimary': {
                  color: `${
                    navIsHovered || isScrolled ? '#453029' : '#FFFFFF'
                  }`,
                  transition: 'all 300ms ease-in-out'
                },
              }}
            >
              {currencies.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    color: '#453029',
                  }}
                  id='standard-select-currency'
                  onClick={() => handleCurrencyChange(option.value)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <IconButton
              onMouseEnter={handleHoverShopLeave}
              sx={{
                color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                },
              }}
              onClick={() => handleSideClick('search')}
            >
              <SearchIcon fontSize='small' />
            </IconButton>
            <IconButton
              onMouseEnter={handleHoverShopLeave}
              sx={{
                color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                },
              }}
              component={Link}
              to='/account/profile'
            >
              <PersonIcon fontSize='small' />
            </IconButton>
            <IconButton
              onMouseEnter={handleHoverShopLeave}
              sx={{
                color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                },
              }}
              onClick={() => handleSideClick('cart')}
            >
              <Badge
                invisible={false}
                badgeContent={lenghtOfItems}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: `${areItems() ? '#D25F3A' : 'none'}`,
                  },
                }}
              >
                <ShoppingCartIcon fontSize='medium' />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      ) : (
        <div></div>
      )}

      {/* MOBILE NAV ------------------------------------------------------------------------- */}
      {!isNonMobileScreens && (
        <Box
          width='96%'
          margin='auto'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <IconButton
            sx={{
              color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
              transition: 'all 300ms ease-in-out',
              '&:hover': {
                color: theme.palette.secondary.main,
                backgroundColor: 'rgba(255,255,255,0.0)',
              },
            }}
            onClick={() => handleSideClick('menu')}
          >
            <MenuIcon fontSize='medium' />
          </IconButton>
          <Typography
            component={Link}
            to='/'
            sx={{
              textDecoration: 'none',
              color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
              '&:hover': { cursor: 'pointer' },
              paddingY: '20px',
              transition: 'all 300ms ease-in-out',
            }}
            fontSize='33px'
            fontWeight='bold'
            paddingLeft='20px'
          >
            NOOK
          </Typography>
          <Box>
            <IconButton
              sx={{
                color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                },
              }}
              onClick={() => handleSideClick('search')}
            >
              <SearchIcon fontSize='medium' />
            </IconButton>
            <IconButton
              sx={{
                color: `${navIsHovered || isScrolled ? '#453029' : '#FFFFFF'}`,
                transition: 'all 300ms ease-in-out',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.0)',
                },
              }}
              onClick={() => handleSideClick('cart')}
            >
              <Badge
                invisible={false}
                badgeContent={lenghtOfItems}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: `${areItems() ? '#D25F3A' : 'none'}`,
                  },
                }}
              >
                <ShoppingCartIcon fontSize='medium' />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
