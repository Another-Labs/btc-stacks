import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import AssetSymbol from './AssetSymbol'
import DepositDialog from './DepositDialog'
import { useState } from 'react'
import useBtcWallet from '../hooks/useBtcWallet'
import { TableBodyCell, TableBodyRow, TableHeadCell } from './StyledTable'
import RedeemDialog from './RedeemDialog'

export default function AssetTable() {
  const [open, setOpen] = useState(false)
  const [openRedeem, setOpenRedeem] = useState(false)
  const btcWallet = useBtcWallet()

  const handleClaim = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleDeposit = (event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen(true)
  }

  const handleRedeem = () => {
    setOpenRedeem(true)
  }

  return (
    <>
      <Table sx={{ mt: '20px' }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>NFT</TableHeadCell>
            <TableHeadCell>Asset</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>APY</TableHeadCell>
            <TableHeadCell>Reward</TableHeadCell>
            <TableCell></TableCell>
            {btcWallet.connected ? <TableCell></TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableBodyRow onClick={handleRedeem}>
            <TableBodyCell>0x124t888</TableBodyCell>
            <TableBodyCell>
              <AssetSymbol type="btc" labelFontSize={16} />
            </TableBodyCell>
            <TableBodyCell>
              1<br />
              $70.1K
            </TableBodyCell>
            <TableBodyCell>5%</TableBodyCell>
            <TableBodyCell>
              <Typography color="#70707B">
                10 SUI
                <br />
                $11
              </Typography>
            </TableBodyCell>
            <TableBodyCell>
              <Button size="small" variant="text" onClick={handleClaim}>
                Claim
              </Button>
            </TableBodyCell>
            {btcWallet.connected ? (
              <TableBodyCell>
                <Button
                  size="small"
                  variant="text"
                  sx={{ color: '#fff' }}
                  onClick={handleDeposit}
                >
                  Deposit
                </Button>
              </TableBodyCell>
            ) : null}
          </TableBodyRow>
        </TableBody>
      </Table>
      <DepositDialog open={open} onClose={() => setOpen(false)} />
      <RedeemDialog open={openRedeem} onClose={() => setOpenRedeem(false)} />
    </>
  )
}
