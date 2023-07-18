import React from 'react'
import { Box, Typography, Button, TextareaAutosize } from '@mui/material'
import CartItem from './CartItem'
import { theme } from '../../../theme'
import { useSelector, useDispatch } from 'react-redux'
import { setIsSideMenuOpen } from '../../../state/sideMenuSlice'

const Cart = () => {
  // Get the current items in the cart
  const cartItems = useSelector((state) => state.sideMenu.cartItems)

  // Creating an array of CartItem objects
  const renderCartItems = () => {
    let elements = []
    cartItems.map((item) => {
      elements.push(
        <CartItem
          key={item.id}
          title={item.attributes.title}
          price={item.attributes.price}
          imageUrl={
            item.attributes.pictures.data[0].attributes.formats.large.url
          }
          count={item.count}
          id={item.id}
        />
      )
    })
    return elements
  }

  // Calculate the total price of the items
  const totalPrice = () => {
    let total = 0
    cartItems.map((item) => {
      total = total + item.attributes.price * item.count
    })
    return total
  }

  // Get the chosen currency
  const currency = useSelector((state) => state.shopItems.currency)

  const dispatch = useDispatch()
  const isSideMenuOpen = useSelector((state) => state.sideMenu.isSideMenuOpen)

  // Go to checkout page 
  const handleCheckout = () => {
    if (isSideMenuOpen) {
      dispatch(setIsSideMenuOpen({}))
    }
    window.location = '/checkout'
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {renderCartItems()}
      <Box paddingTop='50px' width='100%' textAlign='center'>
        <TextareaAutosize
          placeholder='Special Intructions...'
          required
          fullWidth
          style={{ minHeight: '200px', width: '90%', resize: 'none' }}
        />
      </Box>

      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        rowGap='20px'
        alignItems='center'
        paddingTop='100px'
        paddingBottom='10px'
      >
        <Typography fontSize='11px'>SUBTOTAL</Typography>
        <Typography fontSize='29px' fontWeight='300'>
          {currency}
          {totalPrice()}
        </Typography>
        <Typography fontSize='13px' fontWeight='300'>
          Taxes and shipping calculated at checkout
        </Typography>
      </Box>
      <Button
        variant='contained'
        sx={{
          borderRadius: '0',
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.primary.main,
          marginTop: '30px',
          marginBottom: '50px',
          paddingY: '10px',
          paddingX: '40px',
          fontFamily: 'Poppins',
          fontWeight: '300',
        }}
        onClick={handleCheckout}
      >
        Check out
      </Button>
    </Box>
  )
}

export default Cart
