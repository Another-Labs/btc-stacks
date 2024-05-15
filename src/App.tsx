import './App.css'
import Pages from './routes'
import { WalletProvider } from '@suiet/wallet-kit'

function App() {
  return (
    <WalletProvider>
      <Pages />
    </WalletProvider>
  )
}

export default App
