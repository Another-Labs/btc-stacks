import ConnectBTCWallet from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'
import { Container, Paper, Stack, Typography, styled } from '@mui/material'
import BTCIcon from '../assets/btc.svg'

const ConnectBox = styled(Paper)({
  boxSizing: 'border-box',
  width: '560px',
  padding: '24px',
  borderRadius: '24px',
})

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
          <ConnectBox>
            <Stack
              alignItems={'center'}
              justifyContent="space-between"
              direction={'row'}
            >
              <Stack spacing={1} direction="row">
                <img src={BTCIcon} alt="" />
                <Typography fontWeight={600} fontSize={20}>
                  BTC to supply
                </Typography>
              </Stack>
              <ConnectBTCWallet />
            </Stack>
          </ConnectBox>
          <ConnectBox>
            <Stack
              alignItems={'center'}
              justifyContent="space-between"
              direction={'row'}
            >
              <Typography fontWeight={600} fontSize={20}>
                Proof of collateral
              </Typography>
              <ConnectSUIWallet />
            </Stack>
          </ConnectBox>
        </Stack>
      </Container>
    </>
  )
}

export default Home
