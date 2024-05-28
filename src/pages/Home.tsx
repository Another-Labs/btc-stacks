import { Container, Stack, Typography, Box } from '@mui/material'
import BackedBy from '../components/BackedBy'
import StatisticsList from '../components/Statistics'
import GradientButton from '../components/GradientButton'
import HomeBackground from '../components/HomeBackground'

function Home() {
  return (
    <Box>
      <HomeBackground />
      <Stack spacing={4} sx={{ mt: 12.5 }}>
        <Typography
          fontSize={40}
          fontWeight={700}
          color="#fff"
          fontFamily="Orbitron"
        >
          Unlock your native BTC liquidity without Bridges.
        </Typography>
        <Typography fontSize={24} color="#fff" fontFamily="Orbitron">
          First BTC Zero Trust Protocol. Trust nothing, Verify everything.
        </Typography>
      </Stack>
      <Container maxWidth="lg">
        <Box sx={{ m: 8 }}>
          <GradientButton>Comming soon</GradientButton>
        </Box>
        <StatisticsList />
        {/* <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ mt: 12 }}
        >
          <ConnectBox
            icon={<BTCIcon width={32} height={32} />}
            label="BTC to supply"
            button={<ConnectBTCWallet />}
          />
          <ConnectBox
            icon={<SUIIcon width={32} />}
            label="SUI Assets"
            button={<ConnectSUIWallet />}
          />
        </Stack> */}

        <BackedBy />
      </Container>
    </Box>
  )
}

export default Home
