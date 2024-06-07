import { Container, Stack, Typography, Box } from '@mui/material'
import BackedBy from '../components/BackedBy'
import StatisticsList from '../components/Statistics'
import GradientButton from '../components/GradientButton'
import HomeBackground from '../components/HomeBackground'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '800px' }}>
      <HomeBackground />
      <Box
        sx={{
          height: 'calc(100vh - 208px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          spacing={8}
          alignItems="center"
          sx={{ margin: 'auto', textAlign: 'center' }}
        >
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
          <GradientButton onClick={() => navigate('/dashboard')}>
            Start Earning
          </GradientButton>
          <StatisticsList />
        </Stack>
      </Box>
      <Container maxWidth="lg">
        <BackedBy />
      </Container>
    </Box>
  )
}

export default Home
