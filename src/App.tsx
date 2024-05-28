import './App.css'
import Pages from './routes'
import { WalletProvider } from '@suiet/wallet-kit'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </WalletProvider>
  )
}

export default App
