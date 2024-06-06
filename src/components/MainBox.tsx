import { Paper, styled } from '@mui/material'

const MainBox = styled(Paper)({
  boxSizing: 'border-box',
  minWidth: '512px',
  padding: '24px',
  borderRadius: '16px',
  background: '#181818',
  backdropFilter: 'blur(5px)',
})

export default MainBox
