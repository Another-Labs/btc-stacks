import { Stack, Typography } from '@mui/material'
import MainBox from './MainBox'
import ConnectedWallet from './ConnectedWallet'
import NoAsset from './NoAsset'
import { useState } from 'react'
import AssetTable from './AssetTable'

export default function AssetBox({ address }: { address: string }) {
  const [hasAssets] = useState(true)
  return (
    <MainBox sx={{ width: '752px', minWidth: 'auto' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={24} fontWeight={700}>
          Asset
        </Typography>
        <ConnectedWallet address={address} type="sui" />
      </Stack>

      {hasAssets ? <AssetTable /> : <NoAsset />}
    </MainBox>
  )
}
