import { Box, Input, Stack, SxProps, Typography } from '@mui/material'
import AssetSymbol from './AssetSymbol'
import { useState } from 'react'

export default function BTCAmountInput({
  value,
  onChange,
  sx,
}: {
  value: string
  onChange: (val: string) => void
  sx?: SxProps
}) {
  const [amount, setAmount] = useState<string>(value)

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    // Use regex to allow only numbers and a single dot
    const filteredValue = value.replace(/[^0-9.]/g, '')
    // Ensure only one dot is allowed
    if ((filteredValue.match(/\./g) || []).length > 1) {
      return
    }
    setAmount(filteredValue)
    onChange(filteredValue)
  }

  return (
    <Box sx={sx}>
      <Typography color="#A0A0AB" mb={1}>
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
    </Box>
  )
}
