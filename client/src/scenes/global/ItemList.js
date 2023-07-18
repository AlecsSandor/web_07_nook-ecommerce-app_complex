import React from 'react'
import { Box, Typography } from '@mui/material'
import Item from './Item'
import { theme } from '../../theme'
import { setItems } from '../../state/shopItemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ItemList = ({ title, sex }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.shopItems.items)
  async function getItems() {
    const items = await fetch(
      
      process.env.REACT_APP_ITEMS,
      {
        method: 'GET',
      }
    )
    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
  }

  useEffect(() => {
    getItems()
  }, [])

  const renderItems = (sex) => {
    let elements = []
    items.map((item) => {
      if (item.attributes.sex === sex) {
        elements.push(<Item key={item.id} item={item} />)
      }
    })
    elements = elements.slice(0, 6)
    return elements
  }

  return (
    <section>
      <Box
        display='flex'
        width='100%'
        sx={{ justifyContent: 'center', paddingY: '40px' }}
      >
        <Box
          display='flex'
          flexDirection='column'
          textAlign='center'
          sx={{ maxWidth: '1660px' }}
        >
          <Typography
            fontSize='30px'
            color={theme.palette.secondary.dark}
            fontWeight='600'
            padding='30px'
          >
            {title}
          </Typography>
          <Box
            display='flex'
            flexWrap='wrap'
            alignItems='center'
            justifyContent='space-evenly'
          >
            {renderItems(sex)}
          </Box>
        </Box>
      </Box>
    </section>
  )
}

export default ItemList
