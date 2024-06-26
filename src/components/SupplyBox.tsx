import { Button, Stack, Typography } from '@mui/material'
import MainBox from './MainBox'
import ConnectedWallet from './ConnectedWallet'
import { useState } from 'react'
import { useWallet } from '@suiet/wallet-kit'
import BTCAmountInput from './BTCAmountInput'
import NewSupplyDialog from './NewSupplyDialog'

export default function SupplyBox({ address }: { address: string }) {
  const [amount, setAmount] = useState<string>('0')
  const [open, setOpen] = useState(false)
  const suiWallet = useWallet()
  const handleSupply = () => {
    // TODO: check exsiting asset
    setOpen(true)
  }

  return (
    <MainBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={24} fontWeight={700}>
          Supply
        </Typography>
        <ConnectedWallet address={address} type="btc" />
      </Stack>

      <BTCAmountInput value={amount} onChange={setAmount} sx={{ mt: 4 }} />

      <Stack mt={4} direction="row" justifyContent="flex-end">
        <Button
          sx={{ width: '160px', textTransform: 'none' }}
          variant="contained"
          size="large"
          disabled={!suiWallet.account}
          onClick={handleSupply}
        >
          Supply
        </Button>
      </Stack>

      <NewSupplyDialog open={open} onClose={() => setOpen(false)} />
    </MainBox>
  )
}
