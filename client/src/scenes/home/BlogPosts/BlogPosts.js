import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../../../theme'
import { g_5, g_6 } from '../../../assets'
import BlogPost from './BlogPost'

const BlogPosts = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
    
  return (
    <section
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: `${theme.palette.secondary.light}`,
      }}
    >
      <Box
        color={theme.palette.secondary.dark}
        maxWidth='1660px'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography
          fontSize='26px'
          fontWeight='600'
          paddingTop='40px'
          paddingBottom='20px'
        >
          THE LATEST
        </Typography>
        <Box display='flex' flexDirection={isNonMobileScreens? 'row' : 'column'}>
          <BlogPost image={g_5} date='July 6, 2022' title='New styles on the way!' caption='Over the last 6 months we have been very busy behind the scenes developing a new range of business-casual shoes..' />
          <BlogPost image={g_6} date='September 27, 2022' title='LANX x New York' caption='Like all LANX shoe collections, the soon to be released Spring Summer 2019 (“SS19”) range is inspired by an overseas  adventure, which...'/>
        </Box>
      </Box>
    </section>
  )
}

export default BlogPosts
