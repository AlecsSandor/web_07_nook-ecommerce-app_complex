import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";

const NotFoundPage = () => {
    const theme = useTheme()

  return (
    <Box height="100vh" backgroundColor={theme.palette.whiteWash} display="flex" alignItems="center" justifyContent="center">
    <Box
      width='100%'
      backgroundColor={theme.palette.whiteWash}
      p='1rem 6%'
      textAlign='center'
    >
      <Typography fontWeight='bold' fontSize='70px' color= {theme.palette.background.default}>
        0oops 404
      </Typography>
      <Typography fontWeight='400' fontSize='13px' color= {theme.palette.background.default}>
        It seems like what you're looking for doesn't exist.
      </Typography>
    </Box>
  </Box>
  )
}

export default NotFoundPage
