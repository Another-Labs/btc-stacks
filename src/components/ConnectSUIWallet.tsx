import { Box, Button, Menu, MenuItem, styled } from '@mui/material'
import { ConnectButton, useWallet, addressEllipsis } from '@suiet/wallet-kit'
import '@suiet/wallet-kit/style.css' // don't forget to import default stylesheet
import { useEffect, useRef, useState } from 'react'

const CustomButton = styled(ConnectButton)({
  position: 'relative',
  background: '#000',
  borderRadius: '12px',
  width: '185px',
  height: '44px',
  fontSize: '16px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    display: 'inline-flex',
    width: '189px',
    height: '48px',
    borderRadius: '12px',
    background:
      'linear-gradient(90deg, rgba(6,174,212,1) 0%, rgba(115,226,163,1) 100%)',
  },
  '&:hover': {
    color: '#000',
    background: 'transparent',
  },
})

export default function ConnectSUIWallet() {
  const wallet = useWallet()
  const buttonContainerRef = useRef<null | HTMLElement>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDisconnect = () => {
    wallet.disconnect()
    handleClose()
  }

  useEffect(() => {
    setTimeout(() => {
      if (buttonContainerRef.current) {
        const buttonElement = buttonContainerRef.current.querySelector('button')
        if (buttonElement) {
          buttonElement.innerHTML = 'Connect SUI Wallet'
        }
      }
    })
  }, [wallet.account])

  if (wallet.account) {
    return (
      <>
        <Button variant="outlined" size="large" onClick={handleClick}>
          {addressEllipsis(wallet.account?.address)}
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
        </Menu>
      </>
    )
  } else {
    return (
      <Box ref={buttonContainerRef}>
        <CustomButton />
      </Box>
    )
  }
}
