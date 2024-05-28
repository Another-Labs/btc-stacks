import { Tab, Tabs, ThemeProvider, createTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: 'transparent',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: '#fff',
          '&.Mui-selected': {
            color: '#fff',
            '&::after': {
              content: '""',
              width: '16px',
              height: '2px',
              background: '#f5b030',
              transform: 'translatey(14px)',
            },
          },
        },
      },
    },
  },
})

export default function NavTabs() {
  const location = useLocation()

  return (
    <ThemeProvider theme={darkTheme}>
      <Tabs value={location.pathname}>
        <Tab label="Dashboard" value="/" component={Link} to="/" />
        <Tab label="FAQ" value="/faq" component={Link} to="/faq" />
      </Tabs>
    </ThemeProvider>
  )
}
