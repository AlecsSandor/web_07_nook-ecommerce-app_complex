import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { g_24, g_5, g_6 } from '../../assets'
import { theme } from '../../theme'
import BlogPost from './BlogPost'
import { blogPosts } from '../../components/constants'

const Blog = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  // This function creates an array of blog posts from the constant 'blogPosts' and returns them
  const renderPosts = (full) => {
    let allPosts = []
    if (full) {
      blogPosts.map((post) => {
        allPosts.push(
          <BlogPost
            title={post.title}
            text={post.text}
            author={post.author}
            date={post.date}
            headerImage={post.id === 1 ? g_5 : g_6}
            index={post.index}
            key={post.date}
          />
        )
      })
    } else {
      blogPosts.map((post) => {
        allPosts.push(
          <Box
            lineHeight='7px'
            fontFamily='Poppins'
            paddingY='20px'
            borderTop='solid 1px #efe7e4'
            key={post.date}
          >
            <p style={{ fontSize: '13px' }}>{post.title}</p>
            <p style={{ fontSize: '11px', fontWeight: '300' }}>{post.date}</p>
          </Box>
        )
      })
    }

    return allPosts
  }

  return (
    // Page container
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

      {/* Header image and text */}
      <Box
        height='45vh'
        width='100%'
        sx={{
          backgroundImage: `url(${g_24})`,
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
            Blog Posts
          </Typography>
          <Typography
            fontSize='14px'
            fontFamily='Poppins'
            color='white'
            fontWeight='200'
          >
            We share news and fashion related info with you.
          </Typography>
        </Box>
      </Box>

      {/* Link history */}
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Box fontSize='11px'>
          <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
            Home{' '}
          </a>{' '}
          › Blog
        </Box>
      </Box>

      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingY='50px'
        backgroundColor={theme.palette.primary.main}
      >
        <Box textAlign='center' paddingX='10px'>
          <Typography
            fontSize='27px'
            fontWeight='600'
            color={theme.palette.secondary.dark}
            letterSpacing='4px'
            paddingY='10px'
          >
            Blog
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          width='100%'
        >
          {/* Main rendering of articles */}
          <Box width={isNonMobileScreens ? '75%' : '100%'} paddingX='30px'>
            {renderPosts(true)}
          </Box>
          <Box
            width={isNonMobileScreens ? '25%' : '100%'}
            paddingX={isNonMobileScreens ? '0px' : '30px'}
            paddingRight='30px'
            color={theme.palette.secondary.dark}
          >

            {/* Side rendering of recent articles */}
            <Typography fontSize='20px' fontWeight='700' paddingY='10px'>
              Recent articles
            </Typography>
            {renderPosts(false)}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Blog
