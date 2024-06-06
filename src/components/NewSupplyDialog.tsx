import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import GrayButton from './GrayButton'
import AssetSymbol from './AssetSymbol'
import CloseIcon from '@mui/icons-material/Close'

export default function NewSupplyDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle sx={{ p: 3 }}>
        Supply
        <Typography
          fontSize={14}
          color="#a0a0a8"
          mt={1}
          sx={{ maxWidth: '464px' }}
        >
          We have detected a previous BTC supply from your account. To initiate
          a new BTC supply, please click the "New Supply" button below. If you
          wish to add this amount to an existing BTC record, please click
          cancel, then select the specific asset in the asset panel, and click
          the "Deposit" button.
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
          <AssetSymbol type="btc" labelFontSize={16} />
          <Typography>1.00 BTC</Typography>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="stretch"
          sx={{ width: '100%' }}
        >
          <GrayButton variant="outlined" fullWidth onClick={onClose}>
            Cancel
          </GrayButton>
          <Button variant="contained" fullWidth onClick={onClose}>
            New Supply
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}
