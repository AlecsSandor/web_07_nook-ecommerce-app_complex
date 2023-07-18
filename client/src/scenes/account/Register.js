import React from 'react'
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from '@mui/material'
import { g_25 } from '../../assets'
import { theme } from '../../theme'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useAuthContext } from './authentication/AuthContext'
import { useState } from 'react'
import { API } from './authentication/authConstants'
import { setToken } from './authentication/helpers'

const Register = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px)')

  const { setUser } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const initialValues = {
    username: '',
    email: '',
    password: '',
  }

  const validatePassword = (value) => {
    let error
    if (!value) {
      error = 'Password is required'
    } else if (value.length < 7) {
      error = 'Password must be at least 7 characters long'
    }
    return error
  }

  // Handle the register form
  const onSubmit = async (values) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      if (data?.error) {
        throw data?.error
      } else {
        // set the token
        setToken(data.jwt)

        // set the user
        setUser(data.user)

        window.location.href = '/account/register'
      }
    } catch (error) {
      console.error(error)
      setError(error?.message ?? 'Something went wrong!')
    } finally {
      setIsLoading(false)
    }
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
            Your profile
          </Typography>
          <Typography
            fontSize='14px'
            fontFamily='Poppins'
            color='white'
            fontWeight='200'
          >
            Thank you for being a member!
          </Typography>
        </Box>
      </Box>

      {/* Link history */}
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px'>
          <a href='/' style={{ color: `${theme.palette.secondary.dark}` }}>
            Home{' '}
          </a>{' '}
          › Create account
        </Typography>
      </Box>

      {/* Main Register Form */}
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
            Create account
          </Typography>
        </Box>
        <Box width={isNonMobileScreens ? '30%' : '90%'}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <div style={{ padding: '10px 0px' }}>
                <Field
                  name='username'
                  as={TextField}
                  type='name'
                  label='Username'
                  variant='standard'
                  required
                  fullWidth
                  sx={{
                    '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                      {
                        color: '#453029',
                        borderColor: '#453029',
                      },
                    '& .css-8ss0ly-MuiInputBase-root-MuiInput-root:after': {
                      borderColor: '#453029',
                    },
                  }}
                />
                <ErrorMessage name='Username' component='div' />
              </div>

              <div style={{ padding: '10px 0px' }}>
                <Field
                  name='email'
                  as={TextField}
                  label='Email'
                  type='email'
                  variant='standard'
                  required
                  fullWidth
                  sx={{
                    '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                      {
                        color: '#453029',
                        borderColor: '#453029',
                      },
                    '& .css-8ss0ly-MuiInputBase-root-MuiInput-root:after': {
                      borderColor: '#453029',
                    },
                  }}
                />
                <ErrorMessage name='email' component='div' />
              </div>

              <div style={{ padding: '10px 0px' }}>
                <Field
                  name='password'
                  validate={validatePassword}
                  as={TextField}
                  type='password'
                  label='Password'
                  variant='standard'
                  required
                  fullWidth
                  sx={{
                    '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                      {
                        color: '#453029',
                        borderColor: '#453029',
                      },
                    '& .css-8ss0ly-MuiInputBase-root-MuiInput-root:after': {
                      borderColor: '#453029',
                    },
                  }}
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  style={{ fontFamily: 'Poppins', fontSize: '13px' }}
                />
              </div>

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
                  width: '100%',
                  height: '40px',
                }}
              >
                Sign In
              </Button>
            </Form>
          </Formik>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          rowGap='15px'
          paddingY='15px'
          fontFamily='Poppins'
          fontSize='13px'
          fontWeight='300'
        >
          <a
            href='/account/login'
            style={{
              textDecoration: 'none',
              color: `${theme.palette.secondary.dark}`,
              cursor: 'pointer',
            }}
          >
            I have an account - Login
          </a>
        </Box>
      </Box>
    </div>
  )
}

export default Register
