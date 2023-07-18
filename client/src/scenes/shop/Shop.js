import React from 'react'
import { Box } from '@mui/material'
import ItemListPage from '../global/ItemListPage'
import { g_12 } from '../../assets'
import { useSearchParams } from 'react-router-dom'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let title = ''
  switch (searchParams.get('s')) {
    case '0':
      title = "Women's shoes"
      break
    case '1':
      title = "Men's shoes"
      break
    default:
      title = 'No items'
  }
  if (searchParams.get('cat')) {
        title = searchParams.get('cat')
  }

  return (
    <div
      style={{ backgroundColor: '#FFFFFF', width: '100%', overflow: 'hidden' }}
    >
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

      {/* s - stands for sex / cat - is for category */}
      <ItemListPage title={title} sex={parseInt(searchParams.get('s'))} cat={searchParams.get('cat')} />
    </div>
  )
}

export default Shop
