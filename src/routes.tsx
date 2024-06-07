/// <reference types="vite-plugin-svgr/client" />
import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logo from './assets/logo.svg?react'
import Home from './pages/Home'
import NavTabs from './components/NavTabs'
import Messages from './components/Messages'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const FAQ = lazy(() => import('./pages/FAQ'))

export default function Pages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <AppBar
          position="static"
          sx={{ background: 'none', boxShadow: 'none', p: 2 }}
        >
          <Container maxWidth="lg">
            <Toolbar>
              <Stack spacing={10} direction="row" alignItems="center">
                <Link to="/" style={{ display: 'inline-flex' }}>
                  <Logo />
                </Link>
                <NavTabs />
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
        <Messages />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
