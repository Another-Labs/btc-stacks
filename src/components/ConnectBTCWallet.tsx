import { request, AddressPurpose } from 'sats-connect'
import Button from '@mui/material/Button'

export default function ConnectBTCWallet() {
  const handleConnect = async () => {
    const provider = await request('getAccounts', {
      purposes: [
        AddressPurpose.Stacks,
        AddressPurpose.Ordinals,
        AddressPurpose.Payment,
      ],
    })

    console.log(provider)
  }

  return (
    <Button
      variant="contained"
      size="large"
      sx={{ textTransform: 'none' }}
      onClick={handleConnect}
    >
      Connect BTC Wallet
    </Button>
  )
}
