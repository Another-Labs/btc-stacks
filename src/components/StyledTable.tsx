import { TableCell, TableRow, styled } from '@mui/material'

export const TableHeadCell = styled(TableCell)({
  color: '#a0a0a8',
})

export const TableBodyRow = styled(TableRow)({
  '&:hover': {
    background: '#26272B',
  },
})

export const TableBodyCell = styled(TableCell)({
  borderBottom: 'none',
})
