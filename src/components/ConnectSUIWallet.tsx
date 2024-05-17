import { Box, Button, Menu, MenuItem, styled } from '@mui/material'
import { ConnectButton, useWallet, addressEllipsis } from '@suiet/wallet-kit'
import '@suiet/wallet-kit/style.css' // don't forget to import default stylesheet
import { useEffect, useRef, useState } from 'react'

const CustomButton = styled(ConnectButton)({
  background: '#000',
  borderRadius: '8px',
  width: '189px',
  height: '44px',
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: '#000',
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
    if (buttonContainerRef.current) {
      const buttonElement = buttonContainerRef.current.querySelector('button')
      if (buttonElement) {
        buttonElement.innerHTML = 'Connect SUI Wallet'
      }
    }
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
