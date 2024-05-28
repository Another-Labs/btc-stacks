import { createTheme } from '@mui/material'

// 创建自定义主题
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2ED3B7',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          height: '44px',
        },
      },
    },
  },
})

export default theme
