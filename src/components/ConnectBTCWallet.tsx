import { request, AddressPurpose, getProviders } from 'sats-connect'
import { setDefaultProvider, getDefaultProvider } from '@sats-connect/core'
import {
  loadSelector,
  selectWalletProvider,
  type Config,
} from '@sats-connect/ui'
import Button from '@mui/material/Button'

export default function ConnectBTCWallet() {
  async function selectWallet() {
    const defaultWallet = await getDefaultProvider()

    if (defaultWallet) {
      return
    }

    loadSelector()
    const providers = getProviders()
    console.log(providers)

    const config: Config = {
      options: providers,
    }
    const selectedWallet = await selectWalletProvider(config)
    await setDefaultProvider(selectedWallet)
  }

  const handleConnect = async () => {
    await selectWallet()
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
