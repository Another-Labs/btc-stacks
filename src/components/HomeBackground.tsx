import { Box } from '@mui/material'
import GradientBackground from '../assets/background.png'

export default function HomeBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: -1,
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        background: `
        url(${GradientBackground}) center no-repeat
        `,
      }}
    ></Box>
  )
}
