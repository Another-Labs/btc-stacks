import { Container, Stack } from '@mui/material'
import NetSummary from '../components/NetSummary'
import ConnectBox from '../components/ConnectBox'
import BTCIcon from '../assets/btc.svg?react'
import SUIIcon from '../assets/sui.svg?react'
import ConnectBTCWallet from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'
import { Address, AddressPurpose } from 'sats-connect'
import { useEffect, useState } from 'react'
import SupplyBox from '../components/SupplyBox'
import AssetBox from '../components/AssetBox'
import useLocalStorage from '../hooks/useLocalStorage'
import { useWallet } from '@suiet/wallet-kit'

function Earning() {
  const [btcStacksAddress, setBtcStacksAddress] = useState<string>()
  const [addressInfo] = useLocalStorage<Address[]>('addresses', [])
  // SUI
  const suiWallet = useWallet()

  useEffect(() => {
    if (addressInfo.length) {
      const stacksAddressItem = addressInfo.find(
        (address) => address.purpose === AddressPurpose.Stacks,
      )

      setBtcStacksAddress(stacksAddressItem?.address)
    } else {
      setBtcStacksAddress('')
    }
  }, [addressInfo])

  return (
    <Container>
      <NetSummary />
      <Stack direction="row" spacing={2} alignItems="flex-start">
        {btcStacksAddress ? (
          <SupplyBox address={btcStacksAddress} />
        ) : (
          <ConnectBox
            icon={<BTCIcon width={32} height={32} />}
            label="BTC Assets"
            button={<ConnectBTCWallet />}
          />
        )}

        {suiWallet.account ? (
          <AssetBox address={suiWallet.account.address} />
        ) : (
          <ConnectBox
            icon={<SUIIcon width={32} height={32} />}
            label="SUI Assets"
            button={<ConnectSUIWallet />}
            sx={{ flex: 1 }}
          />
        )}
      </Stack>
    </Container>
  )
}

export default Earning
