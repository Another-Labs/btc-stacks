import styled from '@emotion/styled'
import { Paper, Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'

const ContainerBox = styled(Paper)({
  boxSizing: 'border-box',
  width: '512px',
  padding: '24px',
  borderRadius: '16px',
  background: '#181818',
  backdropFilter: 'blur(5px)',
})

interface ConnectBoxProps {
  icon?: ReactElement
  label: string
  button: ReactElement
}

export default function ConnectBox({ icon, label, button }: ConnectBoxProps) {
  return (
    <ContainerBox>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <Stack alignItems="center" spacing={1} direction="row">
          {icon}
          <Typography fontWeight={600} fontSize={20}>
            {label}
          </Typography>
        </Stack>
        {button}
      </Stack>
    </ContainerBox>
  )
}
