import {
  Box,
  Card,
  CardContent,
  Divider,
  Popover,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import CopyIcon from '../assets/copy.svg?react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Address } from 'sats-connect'
import GrayButton from './GrayButton'
import { useWallet } from '@suiet/wallet-kit'
import useMessages from '../hooks/useMessages'

const Dot = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: '#17b26a',
      }}
    ></Box>
  )
}

export default function ConnectedWallet({
  type,
  address,
}: {
  type: 'btc' | 'sui'
  address: string
}) {
  console.log(type)
  const addr = address.slice(0, 6) + '...' + address.slice(-4)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const [, setAddressInfo] = useLocalStorage<Address[]>('addresses', [])
  const suiWallet = useWallet()

  const handleDisconnect = () => {
    handleClose()
    if (type === 'btc') {
      setAddressInfo([])
    } else {
      suiWallet.disconnect()
    }
  }

  const messages = useMessages()

  const handleCopy = () => {
    navigator.clipboard.writeText(address.toLocaleLowerCase())
    messages.success('Address copied')
  }

  return (
    <>
      <GrayButton
        aria-describedby={id}
        variant="outlined"
        size="large"
        onClick={handleClick}
      >
        {addr.toLocaleLowerCase()}
      </GrayButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 1 }}
      >
        <Card variant="outlined" sx={{ width: '285px' }}>
          <CardContent sx={{ p: 3 }}>
            <Typography fontSize={14} color="#a0a0ab">
              Connected Wallet
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={1}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Dot />
                <Typography>{addr.toLocaleLowerCase()}</Typography>
              </Stack>
              <Box
                sx={{ display: 'inline-flex', cursor: 'pointer' }}
                onClick={handleCopy}
              >
                <CopyIcon />
              </Box>
            </Stack>
            <Divider sx={{ m: '32px 0' }} />
            <GrayButton variant="outlined" fullWidth onClick={handleDisconnect}>
              Disconnect Wallet
            </GrayButton>
          </CardContent>
        </Card>
      </Popover>
    </>
  )
}
