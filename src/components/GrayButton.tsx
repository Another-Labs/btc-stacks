import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

const GrayButton = styled(MuiButton)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  textTransform: 'none',
  fontWeight: 600,
  '&:hover': {
    borderColor: '#51525C',
    background: '#3F3F46',
  },
}))

export default GrayButton
