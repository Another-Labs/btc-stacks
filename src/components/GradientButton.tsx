import { Box, Button, ButtonProps } from '@mui/material'

export default function GradientButton(props: ButtonProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: '2px',
        borderRadius: '8px',
        background:
          'linear-gradient(90deg, rgba(6,174,212,1) 0%, rgba(115,226,163,1) 100%)',
      }}
    >
      <Button
        variant="contained"
        size="large"
        {...props}
        sx={{
          background: '#000',
          color: '#fff',
          height: '48px',
          width: '185px',
        }}
      />
    </Box>
  )
}
