import {
  Address,
  AddressPurpose,
  RpcErrorCode,
  getDefaultProvider,
  getProviders,
  request,
  setDefaultProvider,
} from 'sats-connect'
import useLocalStorage from './useLocalStorage'
import { Config, loadSelector, selectWalletProvider } from '@sats-connect/ui'

export default function useBtcWallet() {
  const [paymentAddress, setPaymentAddress] =
    useLocalStorage<Address>('paymentAddress')

  const [ordinalsAddress, setOrdinalsAddress] =
    useLocalStorage<Address>('ordinalsAddress')

  const [stacksAddress, setStacksAddress] =
    useLocalStorage<Address>('stacksAddress')

  const [connected, setConnected] = useLocalStorage<boolean>(
    'btc-wallet-connected',
    false,
  )

  const selectWallet = async () => {
    const defaultWallet = await getDefaultProvider()

    if (defaultWallet) {
      return
    }

    loadSelector()
    const providers = getProviders()

    const config: Config = {
      options: providers,
    }
    const selectedWallet = await selectWalletProvider(config)
    await setDefaultProvider(selectedWallet)
  }

  const connect = async ({
    onConnected,
    onCancel,
  }: {
    onConnected?: () => void
    onCancel?: () => void
  }) => {
    await selectWallet()

    const response = await request('getAccounts', {
      purposes: [
        AddressPurpose.Stacks,
        AddressPurpose.Ordinals,
        AddressPurpose.Payment,
      ],
    })

    if (response.status === 'success') {
      const paymentAddress = response.result.find(
        (address) => address.purpose === AddressPurpose.Payment,
      )
      const ordinalsAddress = response.result.find(
        (address) => address.purpose === AddressPurpose.Ordinals,
      )
      const stacksAddress = response.result.find(
        (address) => address.purpose === AddressPurpose.Stacks,
      )

      setPaymentAddress(paymentAddress)
      setOrdinalsAddress(ordinalsAddress)
      setStacksAddress(stacksAddress)

      setConnected(true)

      onConnected && onConnected()
    } else {
      if (response.error.code === RpcErrorCode.USER_REJECTION) {
        // handle user cancellation error
        onCancel && onCancel()
      } else {
        // handle error
      }
    }
  }

  const disconnect = () => {
    setPaymentAddress(undefined)
    setOrdinalsAddress(undefined)
    setStacksAddress(undefined)
    setConnected(false)
  }

  return {
    connected,
    paymentAddress,
    ordinalsAddress,
    stacksAddress,
    connect,
    disconnect,
  }
}
