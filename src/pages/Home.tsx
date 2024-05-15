import ConnectBTCWallet from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'
import { Stack } from '@mui/material'

function Home() {
  return (
    <Stack spacing={2}>
      <ConnectBTCWallet />
      <ConnectSUIWallet />
    </Stack>
  )
}

export default Home
