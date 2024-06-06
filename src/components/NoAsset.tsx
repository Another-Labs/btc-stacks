import { Box, Stack, Typography } from '@mui/material'
import emptyImg from '../assets/empty@2x.png'

export default function NoAsset() {
  return (
    <Box mt={3}>
      <Typography color="#A0A0AB">
        You currently don't have any BTC assets in your SUI account. Please
        supply BTC assets to start earning yield on SUI.
      </Typography>
      <Stack alignItems="center">
        <img src={emptyImg} width="201px" />
      </Stack>
    </Box>
  )
}
