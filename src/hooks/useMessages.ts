import useEventChannel from './useEventChannel'

export default function useMessages() {
  const { emit } = useEventChannel()

  const success = (message: string) => {
    emit('alert', { type: 'success', message })
  }

  const error = (message: string) => {
    emit('alert', { type: 'error', message })
  }

  return {
    success,
    error,
  }
}
