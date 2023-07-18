import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import CAItem from './CAItem'
import { g_7, g_8, g_9, g_10, g_1 } from '../../../assets'

const GridBanners = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  return (
    <section style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
      <Box
        width='100%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        alignItems='center'
        padding='30px'
        maxWidth='1660px'
        flexWrap='wrap'
        justifyContent='center'
      >
        <CAItem
          image={g_7}
          text='GRAB A BARGAIN'
          buttonText='Shop the sale'
          width='calc(100% / (3))'
          type={0}
        />
        <CAItem
          image={g_8}
          text='A PERFECT MATCH'
          buttonText='Shop socks'
          width='calc(100% / (3))'
          type={0}
        />
        <CAItem
          image={g_9}
          text='MAKE THEM YOUR OWN'
          buttonText='Shop laces'
          width='calc(100% / (3))'
          type={1}
        />
        <CAItem
          image={g_10}
          text='MUST HAVES FOR WOMEN'
          buttonText="Shop women's"
          width='calc(100% / (2))'
          type={1}
        />
        <CAItem
          image={g_1}
          text="MEN'S NECESSITIES"
          buttonText="Shop men's"
          width='calc(100% / (2))'
          type={0}
        />
      </Box>
    </section>
  )
}

export default GridBanners
