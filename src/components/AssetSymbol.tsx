import { Stack, Typography } from '@mui/material'
import BTCIcon from '../assets/btc.svg?react'
import SUIIcon from '../assets/sui.svg?react'

export default function AssetSymbol({
  type,
  iconSize,
  labelFontSize,
  suffix,
}: {
  type: 'btc' | 'sui'
  iconSize?: number
  labelFontSize?: number
  suffix?: string
}) {
  const IconComponent = type === 'btc' ? BTCIcon : SUIIcon
  const label = type.toUpperCase()

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconComponent width={iconSize ?? 32} height={iconSize ?? 32} />
      <Typography fontSize={labelFontSize ?? 24} fontWeight={600}>
        {label} {suffix}
      </Typography>
    </Stack>
  )
}
