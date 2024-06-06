import { Box, Button, Input, Stack, Typography } from '@mui/material'
import MainBox from './MainBox'
import ConnectedWallet from './ConnectedWallet'
import { useState } from 'react'
import AssetSymbol from './AssetSymbol'
import { useWallet } from '@suiet/wallet-kit'

export default function SupplyBox({ address }: { address: string }) {
  const [amount, setAmount] = useState<string>('0')
  const suiWallet = useWallet()
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    // Use regex to allow only numbers and a single dot
    const filteredValue = value.replace(/[^0-9.]/g, '')
    // Ensure only one dot is allowed
    if ((filteredValue.match(/\./g) || []).length > 1) {
      return
    }
    setAmount(filteredValue)
  }

  return (
    <MainBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={24} fontWeight={700}>
          Supply
        </Typography>
        <ConnectedWallet address={address} type="btc" />
      </Stack>

      <Typography color="#A0A0AB" mb={1} mt={4}>
        Amount
      </Typography>

      <Box
        sx={{
          padding: '8px 16px',
          border: '1px solid #51525C',
          borderRadius: '12px',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Input
            value={amount}
            onChange={handleAmountChange}
            sx={{ fontSize: '24px' }}
            placeholder="0.00"
            disableUnderline
            inputProps={{ 'aria-label': 'description', fontSize: '24px' }}
          />
          <AssetSymbol type="btc" />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Typography>$0.00</Typography>
          <Typography color="#a0a0ab">
            Balance:{' '}
            <span
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer',
              }}
              onClick={() => setAmount('11')}
            >
              11 Max
            </span>
          </Typography>
        </Stack>
      </Box>

      <Stack mt={4} direction="row" justifyContent="flex-end">
        <Button
          sx={{ width: '160px', textTransform: 'none' }}
          variant="contained"
          size="large"
          disabled={!suiWallet.account}
        >
          Supply
        </Button>
      </Stack>
    </MainBox>
  )
}
