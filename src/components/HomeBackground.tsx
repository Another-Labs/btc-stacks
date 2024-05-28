import { Box } from '@mui/material'
import GradientBackground from '../assets/gradient-background.png'
import Dots from '../assets/dots.svg'

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
        url(${GradientBackground}) top center no-repeat,
        url(${Dots}) top left repeat
        `,
        filter: 'blur(90px)',
      }}
    ></Box>
  )
}
