import ConnectBTCWallet from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'
import { Container, Stack, Typography } from '@mui/material'
import BTCIcon from '../assets/btc.svg?react'
import SUIIcon from '../assets/sui.svg?react'
import ConnectBox from '../components/ConnectBox'

function Home() {
  return (
    <>
      <Stack spacing={4} sx={{ mt: 24 }}>
        <Typography variant="h3" color="#fff">
          Unlock your native BTC liquidity
        </Typography>
        <Typography variant="h4" color="#fff">
          Connect your wallets to start
        </Typography>
      </Stack>
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ mt: 12 }}
        >
          <ConnectBox
            icon={<BTCIcon />}
            label="BTC to supply"
            button={<ConnectBTCWallet />}
          />
          <ConnectBox
            icon={<SUIIcon width={24} />}
            label="SUI Assets"
            button={<ConnectSUIWallet />}
          />
        </Stack>
      </Container>
    </>
  )
}

export default Home
