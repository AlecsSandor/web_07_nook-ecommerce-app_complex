import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from '@mui/material'
import { g_25 } from '../../assets'
import { theme } from '../../theme'
import CheckItem from './CheckItem'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')

  // This is the integration with Stripe, all this is boilerplate code written by folowing their documentation for react at: https://stripe.com/docs/checkout/quickstart
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_TEST_KEY
  )
  async function makePayment(values) {
    const stripe = await stripePromise
    let productsF = []
    cartItems.map((item) => {
      productsF.push(item)
    })
    const requestBody = {
      userName: [values.firstName, values.lastName].join(''),
      email: values.email,
      products: productsF,
    }

    const response = await fetch(process.env.REACT_APP_ORDERS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    })

    const session = await response.json()
    console.log(session.id)
    await stripe.redirectToCheckout({
      sessionId: session.id,
    })
  }

  // The initial values of the form
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  }

  // Taking the form values and making the stripe request to the server side of the app
  const onSubmit = (values) => {
    makePayment(values)
  }

  const cartItems = useSelector((state) => state.sideMenu.cartItems)

  const renderCartItems = () => {
    let elements = []
    cartItems.map((item) => {
      elements.push(
        <CheckItem
          key={item.id}
          title={item.attributes.title}
          price={item.attributes.price}
          imageUrl={
            item.attributes.pictures.data[0].attributes.formats.large.url
          }
          count={item.count}
          id={item.id}
        />
      )
    })
    return elements
  }

  // Calculating the total price of the items. If a discount is applied the total price will we shown accordingly. Discount code: NOOK45
  // when True is passed throuh getPercentage the fucntion will return the ammount taken off by the discount
  const totalPrice = (getPercentage) => {
    let total = 0
    cartItems.map((item) => {
      total = total + item.attributes.price * item.count
    })
    if (getPercentage) {
      return (30 * total) / 100
    }
    if (isDiscount) {
      return total - (30 * total) / 100
    }
    return total
  }

  // Handling the discount form
  const initialValuesDisc = {
    discount: '',
  }
  const [isDiscount, setDiscount] = useState(false)
  const handleCupon = (values) => {
    if (values.discount === 'NOOK45') {
      setDiscount(!isDiscount)
    }
  }

  const currency = useSelector((state) => state.shopItems.currency)

  return (
    // Page container
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        overflow: 'hidden',
      }}
    >

      {/* Header image and text */}
      <Box
        height='25vh'
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
            Checkout
          </Typography>
        </Box>
      </Box>

      {/* Link history */}
      <Box paddingLeft='40px' paddingY='15px' alignSelf='start'>
        <Typography fontSize='11px' color={theme.palette.secondary.dark}>
          Checkout › <span style={{ fontWeight: '600' }}>Billing</span> ›
          Payment
        </Typography>
      </Box>

      <Box
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Box
          width={isNonMobileScreens ? '60%' : '95%'}
          maxWidth='1660px'
          display='flex'
          flexDirection={isNonMobileScreens ? 'row' : 'column-reverse'}
          paddingY='30px'
        >

          {/* Main details form */}
          <Box flex='1' marginX='20px' marginY='20px'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <Box>
                  <Typography
                    fontWeight='600'
                    fontSize='15px'
                    color={theme.palette.secondary.dark}
                  >
                    Contact
                  </Typography>
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                      }}
                    />
                    <ErrorMessage name='email' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='number'
                      as={TextField}
                      type='number'
                      label='Number'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='number' component='div' />
                  </div>
                </Box>

                <Box paddingTop='20px'>
                  <Typography
                    fontWeight='600'
                    fontSize='15px'
                    color={theme.palette.secondary.dark}
                  >
                    Shipping Address
                  </Typography>
                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='firstName'
                      as={TextField}
                      label='First Name'
                      type='name'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='firstName' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='lastName'
                      as={TextField}
                      type='name'
                      label='Last Name'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='lastName' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='country'
                      as={TextField}
                      type='name'
                      label='Country'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='country' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='streetAddress'
                      as={TextField}
                      type='name'
                      label='Street Address'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='streetAddress' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='city'
                      as={TextField}
                      type='name'
                      label='City'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='city' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='state'
                      as={TextField}
                      type='name'
                      label='State'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='state' component='div' />
                  </div>

                  <div style={{ padding: '10px 0px' }}>
                    <Field
                      name='zipCode'
                      as={TextField}
                      type='name'
                      label='Zip Code'
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
                        '& .MuiInputBase-colorPrimary:after': {
                          color: '#453029',
                          borderColor: '#453029',
                        },
                        '& .css-1c8ww8m.Mui-focused': {
                          borderColor: '#453029',
                          color: '#453029',
                        },
                       
                      }}
                    />
                    <ErrorMessage name='zipCode' component='div' />
                  </div>
                </Box>

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
                    height: '80px',
                  }}
                >
                  Continue to Payment
                </Button>
              </Form>
            </Formik>
          </Box>

          {/* Items and price side */}
          <Box
            flex='1'
            marginX='20px'
            backgroundColor='#FAFAFA'
            padding='30px'
            marginY='20px'
          >
            <Box>
              {renderCartItems()}
              <Box width='100%'>
                <Formik
                  onSubmit={handleCupon}
                  initialValues={initialValuesDisc}
                >
                  <Form>
                    <Box
                      display='flex'
                      flexDirection='row'
                      justifyContent='space-between'
                      paddingBottom='15px'
                      width='100%'
                    >
                      <Field
                        name='discount'
                        type='name'
                        fullWidth
                        variant='standard'
                        as={TextField}
                        sx={{
                          paddingRight: '15px',
                          borderRadius: 'none',
                          '& .css-bjugqw-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
                            {
                              color: '#453029',
                              borderColor: '#453029',
                            },
                          '& .css-8ss0ly-MuiInputBase-root-MuiInput-root:after':
                            {
                              borderColor: '#453029',
                            },
                        }}
                        label='Discount Code'
                      ></Field>
                      <Button
                        variant='contained'
                        type='submit'
                        sx={{
                          borderRadius: '0',
                          backgroundColor: theme.palette.secondary.dark,
                          color: theme.palette.primary.main,
                          fontFamily: 'Poppins',
                          fontWeight: '300',
                        }}
                      >
                        {isDiscount ? 'Applied' : 'Apply'}
                      </Button>
                    </Box>
                  </Form>
                </Formik>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                paddingBottom='15px'
              >
                <Typography fontSize='13px'>Subtotal</Typography>
                <Typography fontSize='13px' fontWeight='600'>
                  {currency}
                  {(totalPrice() + (isDiscount ? totalPrice(true) : 0)).toFixed(
                    2
                  )}
                </Typography>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                paddingBottom='15px'
              >
                <Typography fontSize='13px'>Discount</Typography>
                <Typography fontSize='11px'>
                  -{currency}
                  {isDiscount ? totalPrice(true) : '0'}
                </Typography>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                paddingBottom='15px'
              >
                <Typography fontSize='13px'>Shipping</Typography>
                <Typography fontSize='11px'>Free</Typography>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                paddingBottom='15px'
              >
                <Typography fontSize='15px' fontWeight='600'>
                  Total
                </Typography>
                <Typography fontSize='15px' fontWeight='600'>
                  {currency}
                  {totalPrice().toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Checkout
