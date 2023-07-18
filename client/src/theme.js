import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#a8a2a0',
            dark: '#453029',
            light: '#F7F3F1'
        },
        accent: {
            main: '#D25F3A'
        }
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 13,
        h1: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 28,
        },
        h3: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 14,
        },
    },
    switchRoot: {
        '& .MuiSwitch-thumb': {
          backgroundColor: 'green', // Change to your desired color when the switch is turned on
        },
        '& .MuiSwitch-track': {
          backgroundColor: 'green', // Change to your desired track color when the switch is turned on
        },
      },
})