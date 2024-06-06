import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import GrayButton from './GrayButton'
import AssetSymbol from './AssetSymbol'
import CloseIcon from '@mui/icons-material/Close'

export default function RedeemDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle sx={{ p: 3 }}>
        Redeem BTC
        <Typography
          fontSize={14}
          color="#a0a0a8"
          mt={1}
          sx={{ maxWidth: '352px' }}
        >
          Upon withdrawal, the current selected asset will be returned to your
          BTC wallet. Note that you will no longer be able to compound yield on
          your current BTC asset.
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          // color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ pt: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>0x124t888</Typography>
          <AssetSymbol type="btc" labelFontSize={16} prefix={1} />
        </Stack>
        <Divider sx={{ margin: '16px 0' }} />
        <TextField variant="standard" fullWidth label="BTC Recipient Address" />
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="stretch"
          sx={{ width: '100%' }}
        >
          <GrayButton variant="outlined" fullWidth onClick={onClose}>
            Redeem
          </GrayButton>
          <Button variant="contained" fullWidth onClick={onClose}>
            Continue Earning
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}
