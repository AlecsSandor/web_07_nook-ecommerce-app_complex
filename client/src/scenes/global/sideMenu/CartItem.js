import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { theme } from '../../../theme'
import { useSelector, useDispatch } from 'react-redux'
import { removeCartItems, increaseCount, decreaseCount } from '../../../state'

const CartItem = ({ title, size, price, imageUrl, count, id }) => {
  const currency = useSelector((state) => state.shopItems.currency)
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')

  const dispatch = useDispatch()
  const handleRemoveItem = () => {
    dispatch(removeCartItems(id))
  }

  const handleIncrease = () => {
    dispatch(increaseCount(id))
  }

  const handleDecrease = () => {
    dispatch(decreaseCount(id))
  }

  return (
    <Box width='100%' textAlign='center'>
      <Box
        display='flex'
        flexDirection={isNonMobileScreens ? 'row' : 'column'}
        width='100%'
        paddingX='30px'
        paddingY='40px'
        color={theme.palette.secondary.dark}
        borderBottom='solid 1px #a8a2a0'
      >
        <Box width={isNonMobileScreens ? '25%' : '100%'} paddingTop='30px' textAlign='center'>
          <img
            src={'http://localhost:1337' + imageUrl}
            alt='alternateImage'
            style={{ width: '160px', height: 'auto' }}
          />
        </Box>
        <Box
          width={isNonMobileScreens ? '75%' : '100%'}
          display='flex'
          flexDirection='column'
          textAlign='center'
          alignItems='center'
          paddingTop='30px'
        >
          <Typography fontSize='14px' fontWeight={400}>
            <a>{title}</a>
            <p>{size}</p>
          </Typography>
          <Typography fontSize='14px' fontWeight={400}>
            {currency}{price*count}
          </Typography>
          <Box
            display='flex'
            flexDirection='row'
            columnGap='30px'
            paddingTop='30px'
          >
            <RemoveIcon fontSize='small' onClick={handleDecrease} sx={{cursor:'pointer'}} />
            <Typography fontSize='14px' fontWeight={400}>
              {count}
            </Typography>
            <AddIcon fontSize='small' onClick={handleIncrease} sx={{cursor:'pointer'}}/>
          </Box>
          <Typography paddingTop='15px' fontSize='14px' fontWeight={400} sx={{cursor: 'pointer'}} onClick={handleRemoveItem}>
            Remove
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CartItem
