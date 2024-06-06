import { Stack, Typography } from '@mui/material'
import { NumericFormat } from 'react-number-format'

function SummaryItem({ name, value }: { name: string; value: number }) {
  return (
    <Stack
      spacing={3}
      direction="column"
      sx={{ minWidth: '160px' }}
      alignItems="center"
    >
      <Typography fontSize={14} fontWeight={600} color="#A0A0AB">
        {name}
      </Typography>
      <Typography fontSize={24} fontWeight={700}>
        <NumericFormat
          displayType="text"
          prefix="$"
          value={value}
          thousandSeparator
        />
      </Typography>
    </Stack>
  )
}

export default function NetSummary() {
  return (
    <Stack alignItems="center" justifyContent="center" mb={5} mt={6}>
      <Stack spacing={4} direction="row">
        <SummaryItem name="Net Worth" value={12345} />
        <SummaryItem name="Supply Balance" value={6789} />
      </Stack>
    </Stack>
  )
}
