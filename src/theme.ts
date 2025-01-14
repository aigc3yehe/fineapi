import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1440,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: 'PP Neue Montreal, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    }
}) 