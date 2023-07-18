import React from 'react'
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { g_25 } from '../../assets'
import { theme } from '../../theme'
import { removeToken } from './authentication/helpers'
import { useAuthContext } from './authentication/AuthContext'

const Profile = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')
  const { user, isLoading } = useAuthContext()

  const handleLogout = () => {
    removeToken()
    window.location.href = '/account/login'
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    // Page Container
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
      }}
    >

      {/* Header image and text */}
      <Box
        height='45vh'
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
            Hello {user.username}
          </Typography>
          <Typography
            fontSize='14px'
            fontFamily='Poppins'
            color='white'
            fontWeight='200'
          >
            How is your day?
          </Typography>
        </Box>
      </Box>

      {/* Link history */}
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px'>
          <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
            Home{' '}
          </a>{' '}
          › Account
        </Typography>
      </Box>

      {/* Account details */}
      <Box
        textAlign='center'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingBottom='60px'
      >
        <Box textAlign='center' paddingX='10px'>
          <Typography
            fontSize='27px'
            fontWeight='600'
            color={theme.palette.secondary.dark}
            letterSpacing='4px'
            paddingY='10px'
          >
            My Account
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column'}
          width='90%'
          color={theme.palette.secondary.dark}
        >
          <Box width={isNonMobileScreens ? '75%' : '100%'} textAlign='left'>
            <Typography fontSize='18px' fontWeight='500' paddingY='10px'>
              Order history
            </Typography>
            <Typography
              fontSize='13px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingBottom='20px'
              borderBottom='solid 1px #efe7e4'
            >
              You haven't placed any orders yet.
            </Typography>
          </Box>
          <Box
            width={isNonMobileScreens ? '25%' : '100%'}
            textAlign='left'
            paddingLeft={isNonMobileScreens ? '20px' : '0px'}
          >
            <Typography fontSize='18px' fontWeight='500' paddingY='10px'>
              Account details
            </Typography>
            <Typography
              fontSize='14px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingBottom='10px'
            >
              {user.username}
            </Typography>
            <Typography
              fontSize='14px'
              fontFamily='Poppins'
              fontWeight='300'
              paddingBottom='20px'
            >
              {user.email}
            </Typography>
            <Button
              variant='contained'
              type='submit'
              sx={{
                borderRadius: '0',
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.primary.main,
                fontFamily: 'Poppins',
                fontWeight: '300',
                marginTop: '13px',
                width: '120px',
                height: '40px',
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Profile
