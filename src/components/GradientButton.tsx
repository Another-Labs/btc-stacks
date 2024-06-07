import { Box, Button, ButtonProps } from '@mui/material'

export default function GradientButton(props: ButtonProps) {
  const { sx, ...others } = props
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: '2px',
        borderRadius: '12px',
        background:
          'linear-gradient(90deg, rgba(6,174,212,1) 0%, rgba(115,226,163,1) 100%)',
      }}
    >
      <Button
        variant="contained"
        size="large"
        {...others}
        sx={{
          background: '#000',
          color: '#fff',
          height: '44px',
          minWidth: '185px',
          '&:hover': {
            color: '#000',
            background: 'transparent',
            boxShadow: 'none',
          },
          ...sx,
        }}
      />
    </Box>
  )
}
