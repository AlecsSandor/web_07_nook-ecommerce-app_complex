import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { g_5, g_6, g_24, g_23 } from '../../assets'
import { theme } from '../../theme'
import { blogPosts } from '../../components/constants'
import { useSearchParams } from 'react-router-dom'

const Post = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
  const [searchParams, setSearchParams] = useSearchParams()

  const postIndex = searchParams.get('index')

  const renderPosts = (full) => {
    let allPosts = []
    blogPosts.map((post) => {
      allPosts.push(
        <Box
          lineHeight='7px'
          fontFamily='Poppins'
          paddingY='20px'
          borderTop='solid 1px #efe7e4'
          key={post.id}
        >
          <p style={{ fontSize: '13px' }}>{post.title}</p>
          <p style={{ fontSize: '11px', fontWeight: '300' }}>{post.date}</p>
        </Box>
      )
    })
    return allPosts
  }

  const styleText = () => {
    const paragraphs = blogPosts[postIndex].text.split('.')
    let allText = []
    paragraphs.map((paragraph, index) => {
      allText.push(<p>{paragraph}.</p>)
    })
    return allText
  }

  return (
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
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px'>
          <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
            Home{' '}
          </a>{' '}
          ›
          <a href='/blog' style={{ color: `${theme.palette.secondary.dark}` }}>
            Blog{' '}
          </a>{' '}
          › {blogPosts[postIndex].title}
        </Typography>
      </Box>
      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingY='50px'
        color={theme.palette.secondary.dark}
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
            {blogPosts[postIndex].title}
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          width='100%'
          paddingY='30px'
        >
          <Box width={isNonMobileScreens ? '75%' : '100%'} paddingX='30px'>
            <Box>
              <img
                src={postIndex === '0' ? g_5 : g_6}
                alt='blogImage'
                style={{ height: 'auto', width: '100%' }}
              />
            </Box>
            <Box borderBottom='solid 1px #efe7e4' paddingBottom='30px'>
              <Typography
                fontFamily='Poppins'
                fontSize='13px'
                fontWeight='300'
                paddingY='25px'
                lineHeight='20px'
              >
                {styleText()}
              </Typography>
            </Box>
          </Box>
          <Box
            width={isNonMobileScreens ? '25%' : '100%'}
            paddingX={isNonMobileScreens ? '0px' : '30px'}
            paddingRight='30px'
            color={theme.palette.secondary.dark}
          >
            <img
              src={g_23}
              alt='blogImage'
              style={{ height: 'auto', width: '100%' }}
            />
            <Typography fontSize='20px' fontWeight='700' paddingY='10px'>
              Recent articles
            </Typography>
            {renderPosts()}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Post
