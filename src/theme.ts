import { createTheme } from '@mui/material'

// 创建自定义主题
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2ED3B7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#51525c',
      dark: '#26272B',
      contrastText: '#fff',
    },
    success: {
      main: '#15B79E',
      light: '#15B79E',
    },
    error: {
      main: '#F04438',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#fff',
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            background: '#107569',
          },
        },
        sizeLarge: {
          height: '48px',
          borderRadius: '12px',
          textTransform: 'none',
        },
        sizeMedium: {
          height: '40px',
          borderRadius: '12px',
          textTransform: 'none',
        },
        sizeSmall: {
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(5px)',
        },
        paper: {
          background: '#18181b',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: '8px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlined: {
          minWidth: '320px',
          marginTop: '110px',
          background: '#18181b',
        },
        outlinedSuccess: {
          color: '#15B79E',
        },
        outlinedError: {
          color: '#F04438',
        },
      },
    },
  },
})

export default theme
