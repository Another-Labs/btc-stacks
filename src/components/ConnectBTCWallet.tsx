import { request, AddressPurpose, getProviders } from 'sats-connect'
import {
  setDefaultProvider,
  getDefaultProvider,
  RpcErrorCode,
  GetAccountResult,
  Address,
} from '@sats-connect/core'
import {
  loadSelector,
  selectWalletProvider,
  type Config,
} from '@sats-connect/ui'
import GradientButton from './GradientButton'
import useLocalStorage from '../hooks/useLocalStorage'

export default function ConnectBTCWallet({
  onConnected,
  onCancel,
}: {
  onConnected?: (result: GetAccountResult) => void
  onCancel?: () => void
}) {
  const [, setAddressInfo] = useLocalStorage<Address[]>('addresses', [])

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
    const response = await request('getAccounts', {
      purposes: [
        AddressPurpose.Stacks,
        AddressPurpose.Ordinals,
        AddressPurpose.Payment,
      ],
    })

    console.log(response)

    if (response.status === 'success') {
      // const paymentAddressItem = response.result.find(
      //   (address) => address.purpose === AddressPurpose.Payment,
      // )
      // const ordinalsAddressItem = response.result.find(
      //   (address) => address.purpose === AddressPurpose.Ordinals,
      // )
      // const stacksAddressItem = response.result.find(
      //   (address) => address.purpose === AddressPurpose.Stacks,
      // )
      setAddressInfo(response.result)

      onConnected && onConnected(response.result)
    } else {
      if (response.error.code === RpcErrorCode.USER_REJECTION) {
        // handle user cancellation error
        onCancel && onCancel()
      } else {
        // handle error
      }
    }
  }

  return (
    <GradientButton sx={{ textTransform: 'none' }} onClick={handleConnect}>
      Connect BTC Wallet
    </GradientButton>
  )
}
