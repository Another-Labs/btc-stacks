import { ConnectBTCWallet } from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'

function Home() {
  return (
    <>
      <ConnectBTCWallet />
      <ConnectSUIWallet />
    </>
  )
}

export default Home
