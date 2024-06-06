import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from '@mui/material'
import AssetSymbol from './AssetSymbol'

const TableHeadCell = styled(TableCell)({
  color: '#a0a0a8',
})

export default function AssetTable() {
  return (
    <Table sx={{ mt: '20px' }}>
      <TableHead>
        <TableRow>
          <TableHeadCell>NFT</TableHeadCell>
          <TableHeadCell>Asset</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>APY</TableHeadCell>
          <TableHeadCell>Reward</TableHeadCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>0x124t888</TableCell>
          <TableCell>
            <AssetSymbol type="btc" labelFontSize={16} />
          </TableCell>
          <TableCell>
            1<br />
            $70.1K
          </TableCell>
          <TableCell>5%</TableCell>
          <TableCell>
            <Typography color="#70707B">
              10 SUI
              <br />
              $11
            </Typography>
          </TableCell>
          <TableCell>
            <Button size="small" variant="text">
              Claim
            </Button>
          </TableCell>
          <TableCell>
            <Button size="small" variant="text" sx={{ color: '#fff' }}>
              Deposit
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
