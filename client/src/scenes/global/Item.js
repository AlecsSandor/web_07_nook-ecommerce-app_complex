import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import { theme } from '../../theme'
import { useSelector } from 'react-redux'

const Item = ({ item }) => {
  const currency = useSelector(state => state.shopItems.currency)
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')

  const handleClick = () => {
    window.location.href = `/product?id=${item.id}&stock=${Math.floor(Math.random() * 101)}`
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      paddingX={isNonMobileScreens ? '45px' : '0px'}
      paddingY='45px'
      color={theme.palette.secondary.dark}
      maxWidth={isNonMobileScreens ? '500px' : '350px'}
    >
      <Box>
        {item.attributes.oldPrice && (
          <Typography
            sx={{
              position: 'absolute',
              borderRadius: '0',
              backgroundColor: theme.palette.secondary.dark,
              fontSize: '10px',
              paddingY: '10px',
              paddingX: '30px',
              color: '#FFFFFF',
            }}
          >
            On Sale
          </Typography>
        )}

        <img
          src={
            process.env.REACT_APP_SERVER_LINK + 
            item.attributes.pictures.data[0].attributes.formats.large.url
          }
          style={{ width: '100%' }}
          alt=''
        />
      </Box>
      <Typography marginTop='10px' fontSize='14px'>
        {item.attributes.title}
      </Typography>

      <Typography
        marginTop='10px'
        fontSize='15px'
        fontFamily='Poppins'
        fontWeight='300'
      >
        {currency}
        {item.attributes.price}
        {item.attributes.oldPrice ? (
          <span>
            &nbsp;
            <span style={{ textDecoration: 'line-through', color: '#96837d' }}>
              {item.attributes.oldPrice}
            </span>
          </span>
        ) : null}
      </Typography>

      <Button
        variant='contained'
        sx={{
          borderRadius: '0',
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.primary.main,
          marginTop: '20px',
          paddingY: '15px',
          paddingX: '30px',
          fontSize: '10px',
          fontWeight: '300',
          width: '70%',
        }}
        onClick={handleClick}
      >
        View Options
      </Button>
    </Box>
  )
}

export default Item
