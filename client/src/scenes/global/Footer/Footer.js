import React from 'react'
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  TextField,
  MenuItem,
} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import { theme } from '../../../theme'
import { setCurrency } from '../../../state/shopItemsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mastercard, paypal, visa, diners } from '../../../assets'

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

const Footer = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  // Handling currency change 
  const currency = useSelector((state) => state.shopItems.currency)

  const dispatch = useDispatch()

  const handleCurrencyChange = (value) => {
    if (value === undefined) {
      dispatch(setCurrency('£'))
    } else {
      dispatch(setCurrency(value))
    }
  }

  return (
    // Component container
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: `${theme.palette.secondary.light}`,
      }}
    >
      <Box display='flex' flexDirection='column' width='100%'>
        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          padding='30px'
          columnGap='30px'
          justifyContent='space-between'
          color={theme.palette.secondary.dark}
          alignItems={isNonMobileScreens ? 'left' : 'center'}
        >

          {/* First Column */}
          <Box
            display='flex'
            flexDirection='column'
            textAlign={isNonMobileScreens ? 'left' : 'center'}
            minWidth='200px'
            paddingBottom='20px'
          >
            <Typography fontSize='22px' fontWeight='700' paddingTop='10px'>
              Quick links
            </Typography>
            <a href='/' className='footerItemLink'>
              Shop
            </a>
            <a href='/' className='footerItemLink'>
              Events
            </a>
            <a href='/' className='footerItemLink'>
              Contact us
            </a>
            <a href='/' className='footerItemLink'>
              Theme Features
            </a>
            <a href='/' className='footerItemLink'>
              Shipping Policy
            </a>
            <a href='/' className='footerItemLink'>
              Refund Policy
            </a>
          </Box>

          {/* Second Column */}
          <Box
            display='flex'
            flexDirection='column'
            alignItems={isNonMobileScreens ? 'left' : 'center'}
            paddingBottom='20px'
          >
            <Typography fontSize='22px' fontWeight='700' paddingY='10px'>
              Find us
            </Typography>
            <Typography fontSize='13px'>
              Unit 25, Mitton Rd Business Park, Mitton Rd, Whalley, Lancashire,
              BB79YE, England.
            </Typography>
          </Box>

          {/* Third Column */}
          <Box display='flex' flexDirection='column' paddingBottom='20px'>
            <TextField
              id='standard-basic'
              label='email@example.com'
              variant='standard'
              sx={{
                input: { color: theme.palette.secondary.dark },
                '& .MuiInputBase-colorPrimary:after': {
                  color: '#453029',
                  borderColor: '#453029',
                },
                '& .css-1c8ww8m.Mui-focused': {
                  borderColor: '#453029',
                  color: '#453029',
                },
                '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                {
                  color: '#453029',
                  borderColor: '#453029',
                },
              }}
            />
            <Button
              variant='contained'
              sx={{
                borderRadius: '0',
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.primary.main,
                fontFamily: 'Poppins',
                fontWeight: '300',
                marginTop: '13px',
              }}
            >
              Subscribe
            </Button>
          </Box>

          {/* Forth Column - Links */}
          <Box display='flex' flexDirection='column' paddingBottom='20px'>
            <Typography fontSize='22px' fontWeight='700' paddingY='10px'>
              Get connected
            </Typography>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
            >
              <TwitterIcon fontSize='large' />
              <FacebookIcon fontSize='large' />
              <InstagramIcon fontSize='large' />
              <PinterestIcon fontSize='large' />
            </Box>
          </Box>
        </Box>

        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          justifyContent='space-between'
          paddingBottom='40px'
          rowGap='15px'
          alignItems='center'
        >

          {/* Currency Button */}
          <Box
            textAlign={isNonMobileScreens ? 'left' : 'center'}
            paddingX='30px'
          >
            <TextField
              id='standard-select-currency'
              variant='standard'
              select
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
              InputProps={{ disableUnderline: true }}
              defaultValue={currency}
              sx={{
                color: theme.palette.secondary.dark,
                transition: 'all 300ms ease-in-out',
                input: { color: 'red' },
                alignSelf: 'center',
                '& .css-14rkpbm-MuiInputBase-root-MuiInput-root': {
                  color: '#453029',
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

            {/* Footnote */}
            <Typography fontSize='11px' paddingTop='10px'>
              © 2023, Nook - Theme | Created by Alex Sandor
            </Typography>
          </Box>

          {/* Cards */}
          <Box
            display='flex'
            flexDirection='row'
            paddingRight='30px'
            columnGap='10px'
          >
            <img src={visa} alt='cards' style={{ width: '45px' }} />
            <img src={mastercard} alt='cards' style={{ width: '45px' }} />
            <img src={paypal} alt='cards' style={{ width: '45px' }} />
            <img src={diners} alt='cards' style={{ width: '45px' }} />
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default Footer
