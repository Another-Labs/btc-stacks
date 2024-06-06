export default function useEventBus() {
  const eventChannel = new BroadcastChannel('btc-stacks')

  const emit = (event: string, data?: unknown) => {
    eventChannel.postMessage({ event, data })
  }

  const on = (event: string, callback: (data: unknown) => void) => {
    const listener = (messageEvent: MessageEvent) => {
      if (messageEvent.data.event === event) {
        callback(messageEvent.data.data)
      }
    }

    eventChannel.addEventListener('message', listener)
  }

  // useEffect(() => {
  //   return () => {
  //     eventChannel.close()
  //   }
  // }, [])

  return {
    emit,
    on,
  }
}
