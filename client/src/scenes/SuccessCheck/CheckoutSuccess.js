import React from 'react'
import { Box, Typography } from '@mui/material'
import { g_25 } from '../../assets'
import { theme } from '../../theme'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../state'

const CheckoutSuccess = () => {
  const dispatch = useDispatch()

  dispatch(clearCart({}))

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        height='25vh'
        width='100%'
        sx={{
          backgroundImage: `url(${g_25})`,
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
            Checkout
          </Typography>
        </Box>
      </Box>
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px' color={theme.palette.secondary.dark}>
          Checkout › Billing ›{' '}
          <span style={{ fontWeight: '600' }}>Payment</span>
        </Typography>
      </Box>
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        height='40vh'
        justifyContent='center'
        rowGap='20px'
      >
        <Typography fontSize='18px' color='green'>
          Your order has been succesfully completed!
        </Typography>
        <Typography
          textAlign='center'
          fontSize='13px'
          fontWeight='300'
          fontFamily='Poppins'
        >
          Check your email inbox for the invoice of the transaction and details
          about this order. <br /> Thank you for choosing our products!
        </Typography>
      </Box>
    </div>
  )
}

export default CheckoutSuccess
