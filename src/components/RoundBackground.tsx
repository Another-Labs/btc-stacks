import { styled } from '@mui/material'

const Container = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '612px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  zIndex: -1,
})

const RoundBg = styled('div')({
  minWidth: '110vw',
  height: '612px',
  borderBottomLeftRadius: '100%',
  borderBottomRightRadius: '100%',
  background: '#141414',
})

export default function RoundBackground() {
  return (
    <Container>
      <RoundBg />
    </Container>
  )
}
