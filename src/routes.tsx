/// <reference types="vite-plugin-svgr/client" />
import {
  AppBar,
  Container,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  Toolbar,
  createTheme,
} from '@mui/material'
import { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom'
import RoundBackground from './components/RoundBackground'
import Logo from './assets/logo.svg?react'

const Home = lazy(() => import('./pages/Home'))
const FAQ = lazy(() => import('./pages/FAQ'))

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

const NavTabs = () => {
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

export default function Pages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <AppBar
          position="static"
          sx={{ background: 'none', boxShadow: 'none', p: 2 }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Stack spacing={10} direction="row" alignItems="center">
                <Logo />
                <NavTabs />
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
        <RoundBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
