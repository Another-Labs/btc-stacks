import { Container, Stack } from '@mui/material'
import NetSummary from '../components/NetSummary'
import ConnectBox from '../components/ConnectBox'
import BTCIcon from '../assets/btc.svg?react'
import SUIIcon from '../assets/sui.svg?react'
import ConnectBTCWallet from '../components/ConnectBTCWallet'
import ConnectSUIWallet from '../components/ConnectSUIWallet'
import SupplyBox from '../components/SupplyBox'
import AssetBox from '../components/AssetBox'
import { useWallet } from '@suiet/wallet-kit'
import useBtcWallet from '../hooks/useBtcWallet'

function Earning() {
  // BTC
  const btcWallet = useBtcWallet()
  // SUI
  const suiWallet = useWallet()

  return (
    <Container>
      <NetSummary />
      <Stack direction="row" spacing={2} alignItems="flex-start">
        {btcWallet.stacksAddress?.address ? (
          <SupplyBox address={btcWallet.stacksAddress?.address} />
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
