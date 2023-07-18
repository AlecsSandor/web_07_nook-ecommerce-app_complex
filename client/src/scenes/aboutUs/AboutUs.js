import React from 'react'
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  MenuItem,
} from '@mui/material'
import { g_16, g_17, g_18, g_19, g_20, g_21, g_2, g_7 } from '../../assets'
import { theme } from '../../theme'
import TextwImage from './TextwImage'
import { aboutUsCopy } from '../../components/constants'
import TabsWithImages from '../../components/TabsWithImages'
import Testimonials from '../../components/Testimonials'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const AboutUs = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    // Page container
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header image and text */}
      <Box
        height='45vh'
        width='100%'
        sx={{
          backgroundImage: `url(${g_16})`,
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
            About us
          </Typography>
          <Typography
            fontSize='14px'
            fontFamily='Poppins'
            color='white'
            fontWeight='200'
          >
            We are an English shoe company, creating proper shoes, for the
            boardroom to the bar.
          </Typography>
        </Box>
      </Box>

      {/* Link history */}
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px'>
          <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
            Home{' '}
          </a>{' '}
          › Our Story
        </Typography>
      </Box>

      {/* Three images with text underneath */}
      <Box
        display='flex'
        flexDirection='column'
        maxWidth='1660px'
        color={theme.palette.secondary.dark}
      >
        <Box
          display='flex'
          flexWrap='wrap' 
          alignItems='center'
          justifyContent='space-evenly'
          paddingY='40px'
          width={isNonMobileScreens ? '100%' : '350px'}
        >
          <Box
            display='flex'
            flexDirection='column'
            width={isNonMobileScreens ? '30.3%' : '90%'}
            textAlign='center'
            paddingBottom='30px'
          >
            <img src={g_17} alt='img' style={{ objectFit: 'cover' }}/>
            <Typography fontSize='22px' fontWeight='600'>
              DESIGNED FOR ADVENTURE
            </Typography>
            <Typography
              fontSize='13px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingTop='15px'
            >
              Whatever the occasion, a quality pair of our proper shoes will put
              you in pole position.
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width={isNonMobileScreens ? '30.3%' : '90%'}
            textAlign='center'
            paddingBottom='30px'
          >
            <img src={g_18} alt='img' style={{ objectFit: 'cover' }} />
            <Typography fontSize='22px' fontWeight='600'>
              QUALITY BOOTS & SNEAKERS
            </Typography>
            <Typography
              fontSize='13px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingTop='15px'
            >
              Modern shoes in which to work hard, play hard and look good in for any occasion.
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            width={isNonMobileScreens ? '30.3%' : '90%'}
            textAlign='center'
            paddingBottom='30px'
          >
            <img src={g_17} alt='img' style={{ objectFit: 'cover' }} />
            <Typography fontSize='22px' fontWeight='600'>
              SHOE EXPERTS
            </Typography>
            <Typography
              fontSize='13px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingTop='15px'
            >
              Our story began almost 20 years ago. We design business-casual shoes. Reassuringly sturdy with a twist of elegance.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Image and text grid, using the 'TextwImage' component */}
      <Box width='100%'>
        <TextwImage
          title={aboutUsCopy.first.title}
          caption={aboutUsCopy.first.caption}
          image={g_19}
          textPosLeft={true}
        />
        <TextwImage
          title={aboutUsCopy.second.title}
          caption={aboutUsCopy.second.caption}
          image={g_20}
          textPosLeft={false}
        />
        <TextwImage
          title={aboutUsCopy.third.title}
          caption={aboutUsCopy.third.caption}
          image={g_21}
          textPosLeft={true}
        />
      </Box>

      {/* Services section */}
      <Box
        maxWidth='1660px'
        color={theme.palette.secondary.dark}
        paddingY='40px'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography
          fontSize='26px'
          fontWeight='700'
          paddingX='10px'
          maxWidth='800px'
          textAlign='center'
          paddingY='30px'
        >
          WE GO ABOVE AND BEYOND TO DELIVER A SEAMLESS SHOPPING EXPERIENCE AND
          RADICAL CUSTOMER SERVICE
        </Typography>
        <TabsWithImages
          firstTitle='FREE SHIPPING'
          firstCaption='We currently offer free worldwide shipping. We offer our customers across the UK a convenient Click & Collect service and Next day delivery.'
          secondTitle='FREE & SIMPLE EXCHANGES'
          secondCaption="If you want to try on another size or you'd prefer another colour/ style just send your shoes back and we will post you an exchange pair free of charge."
          thirdTitle='ECO PACKAGING'
          thirdCaption='We spent months designing and sampling the LANX packaging. Each shoe order arrives in a smart briefcase themed shoe box, shoe paper and a few freebies.'
          firstImage={g_2}
          secImage={g_7}
          firstImgT='MUST HAVE SHOES'
          secImgT='MUST HAVE SHOES'
          firstImgSub="WOMEN'S"
          secImgSub="MEN'S"
        />
      </Box>

      {/* Call to action and testimonials section */}
      <Box
        display='flex'
        flexDirection={isNonMobileScreens ? 'row' : 'column'}
        alignItems='center'
        justifyContent='center'
        backgroundColor={theme.palette.secondary.light}
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
        <Box width='60%' display='flex' flexDirection='row' alignItems='center' paddingX='10px'>
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
      <Testimonials />
    </div>
  )
}

export default AboutUs
