import { Stack, SxProps, Typography } from '@mui/material'
import { ReactElement } from 'react'
import MainBox from './MainBox'

interface ConnectBoxProps {
  icon?: ReactElement
  label: string
  button: ReactElement
  sx?: SxProps
}

export default function ConnectBox({
  icon,
  label,
  button,
  sx,
}: ConnectBoxProps) {
  return (
    <MainBox sx={sx}>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <Stack alignItems="center" spacing={1} direction="row">
          {icon}
          <Typography fontWeight={600} fontSize={20}>
            {label}
          </Typography>
        </Stack>
        {button}
      </Stack>
    </MainBox>
  )
}
