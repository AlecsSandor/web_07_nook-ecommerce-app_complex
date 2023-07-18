import React from 'react'
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  MenuItem,
  FormControl,
  TextareaAutosize,
  Grid,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { theme } from '../../theme'
import { g_22 } from '../../assets'
import { useState } from 'react'
import { contactCopy } from '../../components/constants'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Contact = () => {
  // Display the question tabs
  const [isTabOpen, setIsTabOpen] = useState(0)
  const handleTabClick = (number) => {
    if (isTabOpen === number) {
      setIsTabOpen(0)
    } else {
      setIsTabOpen(number)
    }
  }

  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    // Page container
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header image and text */}
      <Box
        height='45vh'
        width='100%'
        sx={{
          backgroundImage: `url(${g_22})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Box textAlign='center' paddingX='10px'>
          <Typography
            fontSize='27px'
            fontWeight='600'
            color='white'
            letterSpacing='4px'
            paddingY='10px'
          >
            Contact Us
          </Typography>
          <Typography
            fontSize='14px'
            fontFamily='Poppins'
            color='white'
            fontWeight='200'
          >
            We'd love to hear from you
          </Typography>
        </Box>
      </Box>

      {/* Questions tabs */}
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingY='50px'
        backgroundColor={theme.palette.secondary.light}
      >
        <Typography
          fontSize='27px'
          fontWeight='700'
          paddingY='20px'
          color={theme.palette.secondary.dark}
          letterSpacing='4px'
          textAlign='center'
        >
          Frequently asked questions
        </Typography>

        <Box
          display='flex'
          flexDirection='column'
          color={theme.palette.secondary.dark}
          paddingX='30px'
          width={isNonMobileScreens ? '60%' : '100%'}
          justifyContent='center'
        >
          <Box display='flex' flexDirection='column'>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              paddingY='15px'
              onClick={() => handleTabClick(1)}
              sx={{ cursor: 'pointer' }}
            >
              <Typography fontSize='14px' fontFamily='Poppins' fontWeight='500'>
                {contactCopy.first.title}
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>

            <Box display={isTabOpen === 1 ? 'block' : 'none'}>
              <Typography
                fontSize='13px'
                fontFamily='Poppins'
                paddingBottom='20px'
                lineHeight='2'
              >
                {contactCopy.first.caption}
              </Typography>
            </Box>
          </Box>

          <Box display='flex' flexDirection='column'>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              borderTop='solid 1px #6e5a53'
              paddingY='15px'
              onClick={() => handleTabClick(2)}
              sx={{ cursor: 'pointer' }}
            >
              <Typography fontSize='14px' fontFamily='Poppins' fontWeight='500'>
                {contactCopy.second.title}
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>

            <Box display={isTabOpen === 2 ? 'block' : 'none'}>
              <Typography
                fontSize='13px'
                fontFamily='Poppins'
                paddingBottom='20px'
                lineHeight='2'
              >
                {contactCopy.second.caption}
              </Typography>
            </Box>
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            borderBottom='solid 1px #6e5a53'
          >
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              borderTop='solid 1px #6e5a53'
              paddingY='15px'
              onClick={() => handleTabClick(3)}
              sx={{ cursor: 'pointer' }}
            >
              <Typography fontSize='14px' fontFamily='Poppins' fontWeight='500'>
                {contactCopy.third.title}
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>

            <Box display={isTabOpen === 3 ? 'block' : 'none'}>
              <Typography
                fontSize='13px'
                fontFamily='Poppins'
                paddingBottom='20px'
                lineHeight='2'
              >
                {contactCopy.second.caption}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Contanct us Form  */}
      <Box
        width='60%'
        alignItems='center'
        color={theme.palette.secondary.dark}
        paddingY='50px'
      >
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            fontSize='26px'
            fontWeight='700'
            paddingTop='20px'
            paddingBottom='20px'
          >
            CONTACT US
          </Typography>
          <Typography
            fontSize='13px'
            fontWeight='300'
            fontFamily='Poppins'
            width={isNonMobileScreens ? '50%' : '90%'}
            textAlign='center'
            paddingBottom='20px'
          >
            If you have any further queries about our product, have any praise
            or constructive comments, we'd love to hear from you. Simply use
            this form to get in touch and we'll get back to you with 24 hours.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={isNonMobileScreens ? 6 : 12}>
              <TextField
                label='Email'
                type='email'
                required
                fullWidth
                variant='standard'
                sx={{
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
            </Grid>
            <Grid item xs={isNonMobileScreens ? 6 : 12}>
              <TextField
                label='Name'
                required
                fullWidth
                variant='standard'
                sx={{
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
            </Grid>
            <Grid item xs={isNonMobileScreens ? 6 : 12}>
              <TextField
                label='Order Number'
                required
                fullWidth
                variant='standard'
                sx={{
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
            </Grid>
            <Grid item xs={isNonMobileScreens ? 6 : 12}>
              <TextField
                label='Phone Number'
                required
                fullWidth
                variant='standard'
                sx={{
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
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                rowsmin={12}
                placeholder='Message'
                required
                fullWidth
                style={{ minHeight: '200px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <Typography
            fontSize='10px'
            fontFamily='Poppins'
            alignSelf='flex-start'
            paddingY='10px'
          >
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Typography>

          <Button
            variant='contained'
            type='submit'
            sx={{
              borderRadius: '0',
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.primary.main,
              marginTop: '30px',
              paddingY: '10px',
              paddingX: '40px',
              fontFamily: 'Poppins',
              fontWeight: '300',
              alignSelf: 'flex-start',
            }}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </FormControl>
      </Box>

      {/* Call to action section */}
      <Box
        display='flex'
        flexDirection={isNonMobileScreens ? 'row' : 'column'}
        alignItems='center'
        justifyContent='center'
        backgroundColor={theme.palette.secondary.main}
        width='100%'
        paddingY='50px'
      >
        <Typography
          fontSize='27px'
          fontWeight='700'
          paddingX='40px'
          paddingY='20px'
          color={theme.palette.secondary.dark}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </Typography>
        <Box
          width='60%'
          display='flex'
          flexDirection='row'
          alignItems='center'
          paddingX='10px'
        >
          <TextField
            id='standard-basic'
            label='Search for items'
            variant='standard'
            sx={{
              flexGrow: '1',
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
          <MenuItem>
            <KeyboardArrowRightIcon />
          </MenuItem>
        </Box>
      </Box>
    </div>
  )
}

export default Contact
