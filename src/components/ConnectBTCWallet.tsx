import GradientButton from './GradientButton'
import useBtcWallet from '../hooks/useBtcWallet'

export default function ConnectBTCWallet({
  onConnected,
  onCancel,
}: {
  onConnected?: () => void
  onCancel?: () => void
}) {
  const { connect } = useBtcWallet()

  return (
    <GradientButton
      sx={{ textTransform: 'none' }}
      onClick={() => connect({ onConnected, onCancel })}
    >
      Connect BTC Wallet
    </GradientButton>
  )
}
