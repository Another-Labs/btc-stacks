import { request, AddressPurpose } from 'sats-connect'

export const ConnectBTCWallet = () => {
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

  return <button onClick={handleConnect}>Connect BTC Wallet</button>
}
