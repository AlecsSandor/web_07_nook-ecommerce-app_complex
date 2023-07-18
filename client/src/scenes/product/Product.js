import React from 'react'
import { Box, Typography, useMediaQuery, Button } from '@mui/material'
import { g_12, g_11, g_13, g_14, g_15 } from '../../assets'
import { theme } from '../../theme'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Switch from '@mui/material/Switch'
import {
  Description,
  sizeGuide,
  careGuide,
  materials,
} from '../../components/constants'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addCartItems } from '../../state'

const Product = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const [isSizeSelected, setIsSizeSelected] = useState(6)
  const handleSizeClick = (size) => {
    setIsSizeSelected(size)
  }

  const [wrapped, setWrapped] = useState(false)
  function handleClickWrap() {
    setWrapped(!wrapped)
  }

  const [isTabOpen, setIsTabOpen] = useState(0)
  const handleTabClick = (number) => {
    if (isTabOpen === number) {
      setIsTabOpen(0)
    } else {
      setIsTabOpen(number)
    }
  }

  const currency = useSelector((state) => state.shopItems.currency)

  const [searchParams, setSearchParams] = useSearchParams()
  const items = useSelector((state) => state.shopItems.items)

  const stockPercentage = searchParams.get('stock') + '%'
  let sliderColor = ''
  let saleStatus = ''
  if (parseInt(searchParams.get('stock')) <= 20) {
    sliderColor = 'red'
    saleStatus = 'Last items!'
  } else if (parseInt(searchParams.get('stock')) < 50) {
    sliderColor = 'orange'
    saleStatus = 'Selling fast!'
  } else {
    sliderColor = 'green'
    saleStatus = 'Plenty enough.'
  }

  const itemId = searchParams.get('id')
  const item = items.filter((item) => item.id === parseInt(itemId))
  const renderPhotos = () => {
    let imageArray = []

    // Looping through the images of the current project
    item[0].attributes.pictures.data.map((image) => {
      imageArray.push(
        <Box position='relative' display='block' key={image}>
          <img
            src={process.env.REACT_APP_SERVER_LINK + image.attributes.formats.large.url}
            style={{
              width: '100%',
              
            }}
            alt='im'
          />
        </Box>
      )
    })
    imageArray = imageArray.slice(1, 5)
    return imageArray
  }

  const dispatch = useDispatch()
  const handleAddToCart = () => {
    let count = 1
    let cartItem = { ...item[0], count }
    dispatch(addCartItems(cartItem))
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
          backgroundImage: `url(${g_12})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        display='flex'
        alignItems='center'
      ></Box>
      <Box
        display='flex'
        flexDirection='column'
        width='100%'
        paddingBottom='50px'
        maxWidth='1660px'
        alignItems='center'
        color={theme.palette.secondary.dark}
      >

        {/* Link history */}
        <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
          <Typography fontSize='11px'>
            <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
              Home{' '}
            </a>{' '}
            › {item[0].attributes.title}
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          width='100%'
          columnGap='40px'
          paddingX={isNonMobileScreens ? '40px' : '10px'}
        >
          <Box
            width={isNonMobileScreens ? '58.333%' : '100%'}
            display='flex'
            flexDirection='column'
            paddingBottom='40px'
          >
            <Box width='100%' paddingBottom='10px'>
              <img
                src={
                  'http://localhost:1337' +
                  item[0].attributes.pictures.data[0].attributes.formats.large
                    .url
                }
                style={{ width: '100%' }}
                alt='mainImg'
              />
            </Box>
            <Box
              display='flex'
              flexDirection='wrap'
              gridTemplateColumns='repeat(auto-fill,minmax(160px, 1fr))'
              columnGap='15px'
            >
              {renderPhotos()}
            </Box>
          </Box>
          <Box
            width={isNonMobileScreens ? '41.666%' : '100%'}
            backgroundColor={theme.palette.secondary.light}
          >
            <Box padding='30px'>
              <Typography fontSize='22px' fontWeight='500'>
                {item[0].attributes.title}
              </Typography>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                paddingTop='15px'
              >
                <Box
                  display='flex'
                  flexDirection='row'
                  fontSize='14px'
                  alignItems='center'
                >
                  <StarBorderOutlinedIcon
                    sx={{
                      color: `${theme.palette.secondary.dark}`,
                      fontSize: '20px',
                    }}
                  />
                  <StarBorderOutlinedIcon
                    sx={{
                      color: `${theme.palette.secondary.dark}`,
                      fontSize: '20px',
                    }}
                  />
                  <StarBorderOutlinedIcon
                    sx={{
                      color: `${theme.palette.secondary.dark}`,
                      fontSize: '20px',
                    }}
                  />
                  <StarBorderOutlinedIcon
                    sx={{
                      color: `${theme.palette.secondary.dark}`,
                      fontSize: '20px',
                    }}
                  />
                  <StarBorderOutlinedIcon
                    sx={{
                      color: `${theme.palette.secondary.dark}`,
                      fontSize: '20px',
                    }}
                  />
                </Box>
                <Typography
                  fontSize='14px'
                  fontFamily='Poppins'
                  fontWeight='300'
                  paddingLeft='10px'
                >
                  No reviews
                </Typography>
              </Box>
              <Typography fontSize='32px'>
                {currency}
                {item[0].attributes.price}
              </Typography>
              <Box paddingTop='20px'>
                <Box display='flex' alignItems='center' columnGap='8px'>
                  <Box
                    sx={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: `${sliderColor}`,
                      borderRadius: '50%',
                    }}
                  ></Box>
                  <Typography
                    fontSize='14px'
                    fontFamily='Poppins'
                    fontWeight='300'
                  >
                    {saleStatus}
                  </Typography>
                </Box>
                <Box paddingY='15px'>
                  <Box
                    width='100%'
                    height='8px'
                    backgroundColor='lightgrey'
                    borderRadius='30px'
                    display='flex'
                    alignItems='center'
                  >
                    <Box
                      sx={{
                        marginLeft: '2px',
                        backgroundColor: `${sliderColor}`,
                        height: '4px',
                        width: `${stockPercentage}`,
                        borderRadius: '30px',
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
              <Box display='flex' flexDirection='column' paddingY='20px'>
                <Typography fontSize='12px' fontFamily='Poppins'>
                  SIZE
                </Typography>
                <Box
                  paddingTop='10px'
                  display='flex'
                  flexWrap='wrap'
                  gap='15px'
                >
                  <Button
                    variant={isSizeSelected === 6 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 6
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 6
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(6)}
                  >
                    6UK
                  </Button>
                  <Button
                    variant={isSizeSelected === 7 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 7
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 7
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(7)}
                  >
                    7UK
                  </Button>
                  <Button
                    variant={isSizeSelected === 8 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 8
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 8
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(8)}
                  >
                    8UK
                  </Button>
                  <Button
                    variant={isSizeSelected === 9 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 9
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 9
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(9)}
                  >
                    9UK
                  </Button>
                  <Button
                    variant={isSizeSelected === 10 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 10
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 10
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(10)}
                  >
                    10UK
                  </Button>
                  <Button
                    variant={isSizeSelected === 11 ? 'contained' : 'outlined'}
                    size='large'
                    backgroundColor={theme.palette.secondary.dark}
                    sx={{
                      borderRadius: '0',
                      backgroundColor: `${
                        isSizeSelected === 11
                          ? theme.palette.secondary.dark
                          : 'none'
                      }`,
                      color: `${
                        isSizeSelected === 11
                          ? '#FFFFFF'
                          : theme.palette.secondary.dark
                      }`,
                      borderColor: theme.palette.secondary.dark,
                    }}
                    onClick={() => handleSizeClick(11)}
                  >
                    11UK
                  </Button>
                </Box>
              </Box>
              <Box display='flex' flexDirection='column' paddingY='30px'>
                <Box display='flex' flexDirection='row' alignItems='center'>
                  <Switch
                    checked={wrapped}
                    onChange={() => handleClickWrap(!wrapped)}
                    name='wrap'
                    sx={{'& .css-1ma1t9b-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {backgroundColor: '#0080FF'}}}
                  />

                  <Typography fontSize='14px'>
                    Gift wrap this product ({currency}3.99)
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '0',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.dark,
                    marginTop: '10px',
                    paddingY: '10px',
                    paddingX: '40px',
                    fontFamily: 'Poppins',
                    fontWeight: '300',
                  }}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: '0',
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.primary.main,
                    marginTop: '8px',
                    paddingY: '10px',
                    paddingX: '40px',
                    fontFamily: 'Poppins',
                    fontWeight: '300',
                  }}
                >
                  Buy it now
                </Button>
              </Box>
              <Box display='flex' flexDirection='column'>
                <Box display='flex' flexDirection='column'>
                  <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    borderTop='solid 1px #6e5a53'
                    paddingY='15px'
                    onClick={() => handleTabClick(1)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography
                      fontSize='14px'
                      fontFamily='Poppins'
                      fontWeight='500'
                    >
                      Description
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
                      <Description />
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
                    <Typography
                      fontSize='14px'
                      fontFamily='Poppins'
                      fontWeight='500'
                    >
                      Size Guide
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
                      {sizeGuide}
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
                    onClick={() => handleTabClick(3)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography
                      fontSize='14px'
                      fontFamily='Poppins'
                      fontWeight='500'
                    >
                      Care Guide
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
                      {careGuide}
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
                    onClick={() => handleTabClick(4)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography
                      fontSize='14px'
                      fontFamily='Poppins'
                      fontWeight='500'
                    >
                      Materials
                    </Typography>
                    <KeyboardArrowDownIcon />
                  </Box>

                  <Box display={isTabOpen === 4 ? 'block' : 'none'}>
                    <Typography
                      fontSize='13px'
                      fontFamily='Poppins'
                      paddingBottom='20px'
                      lineHeight='2'
                    >
                      {materials}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                paddingTop='40px'
                alignItems='center'
                display='flex'
                flexDirection='column'
                rowGap='10px'
                color={theme.palette.secondary.dark}
              >
                <img src={g_11} alt='' width='80%' />
                <Typography fontWeight='700' fontSize='20px'>
                  30% OFF TODAY ONLY
                </Typography>
                <Typography fontWeight='600'>
                  USE CODE NOOK45 AT CHECKOUT
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          alignItems='center'
          justifyContent='center'
          maxWidth='1660px'
           
          paddingY='70px'
        >
          <Box width='100%' maxWidth='400px' margin='15px'>
            <img src={g_13} alt='alternate' style={{ height: 'auto', width: '100%' }} />
          </Box>
          <Box width='100%' maxWidth='400px' margin='15px'>
            <img src={g_14} alt='alternate' style={{ height: 'auto', width: '100%' }} />
          </Box>
          <Box width='100%' maxWidth='400px' margin='15px'>
            <img src={g_15} alt='alternate' style={{ height: 'auto', width: '100%' }} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Product
