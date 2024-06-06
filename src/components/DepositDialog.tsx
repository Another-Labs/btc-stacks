import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import BTCAmountInput from './BTCAmountInput'
import { useState } from 'react'
import GrayButton from './GrayButton'
import AssetSymbol from './AssetSymbol'
import CloseIcon from '@mui/icons-material/Close'
import { TableBodyCell, TableHeadCell } from './StyledTable'

export default function DepositDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [amount, setAmount] = useState('')

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>Deposit</DialogTitle>
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
        <Typography fontSize={14} color="#a0a0a8" mb={3}>
          Please input the BTC amount you want to supply to the existing vault.
        </Typography>

        <Table sx={{ mt: '20px' }}>
          <TableHead>
            <TableRow>
              <TableHeadCell>NFT</TableHeadCell>
              <TableHeadCell>Asset</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyCell>0x124t888</TableBodyCell>
              <TableBodyCell>
                <AssetSymbol type="btc" labelFontSize={16} />
              </TableBodyCell>
              <TableBodyCell>
                1<br />
                $70.1K
              </TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>

        <BTCAmountInput value={amount} onChange={setAmount} sx={{ mt: 3 }} />
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
          <Button variant="contained" fullWidth>
            Supply
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}
