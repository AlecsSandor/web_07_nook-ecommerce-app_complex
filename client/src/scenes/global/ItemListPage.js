import React from 'react'
import { Box, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Item from './Item'
import { theme } from '../../theme'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const ItemList = ({ title, sex, cat }) => {
  const items = useSelector((state) => state.shopItems.items)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalItemsFiltered = cat ? items.filter((item) => item.attributes.category === cat) : items.filter((item) => item.attributes.sex === sex)
  const totalItems = totalItemsFiltered.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  const renderItems = (page) => {
    let elements = []
    let startIndex = page * itemsPerPage - itemsPerPage
    let lastIndex = page * itemsPerPage
    totalItemsFiltered.map((item) => {
      elements.push(<Item key={item.id} item={item} />)
    })
    elements = elements.slice(startIndex, lastIndex)
    return elements
  }

  return (
    <section>
      <Box
        display='flex'
        width='100%'
        flexDirection='column'
        sx={{ justifyContent: 'center', paddingY: '40px' }}
        alignItems='center'
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
            {renderItems(currentPage)}
          </Box>
        </Box>
        <Pagination
          sx={{ paddingY: '30px' }}
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </section>
  )
}

export default ItemList
