import './App.css'
import Pages from './routes'
import { WalletProvider } from '@suiet/wallet-kit'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <WalletProvider>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </WalletProvider>
  )
}

export default App
