import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import useEventChannel from '../hooks/useEventChannel'

interface MessagePayload {
  type: 'success' | 'error'
  message: string
  duration?: number
}

export default function Messages() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'success' | 'error'>('success')
  const [message, setMessage] = useState<string>()
  const [duration, setDuration] = useState(2000)
  const { on } = useEventChannel()

  useEffect(() => {
    on('alert', (data) => {
      const { type, message, duration } = data as MessagePayload
      setOpen(true)
      setType(type)
      setMessage(message)
      if (duration) {
        setDuration(duration)
      }
    })
  })

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={duration}
      onClose={() => setOpen(false)}
    >
      <Alert variant="outlined" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  )
}
