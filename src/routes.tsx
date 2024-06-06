/// <reference types="vite-plugin-svgr/client" />
import { AppBar, Container, Stack, Toolbar } from '@mui/material'
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logo from './assets/logo.svg?react'
import Home from './pages/Home'
import NavTabs from './components/NavTabs'
import Messages from './components/Messages'

const Earning = lazy(() => import('./pages/Earning'))
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
                <Logo />
                <NavTabs />
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
        <Messages />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
