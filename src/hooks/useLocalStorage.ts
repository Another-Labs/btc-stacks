import { useEffect, useState } from 'react'
import useEventChannel from './useEventChannel'

const tryParse = <T>(val: string | null | undefined, defaultValue?: T) => {
  if (!val) return defaultValue
  try {
    return JSON.parse(val) as T
  } catch (e) {
    return defaultValue
  }
}

function useLocalStorage<T>(
  key: string,
): [T | undefined, (newValue: T | undefined) => void]

function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (newValue: T) => void]

function useLocalStorage<T>(key: string, defaultValue?: T) {
  const lookupKey = `useLocalStorage:${key}`
  const { on, emit } = useEventChannel()

  const [value, setValue] = useState(
    tryParse<T>(localStorage.getItem(lookupKey), defaultValue),
  )

  useEffect(() => {
    on(lookupKey, (newValue) => {
      if (newValue === undefined) {
        localStorage.removeItem(lookupKey)
        setValue(undefined)
      } else {
        localStorage.setItem(lookupKey, JSON.stringify(newValue))
        setValue(newValue as T)
      }
    })
  })

  const set = (newValue: T | undefined) => {
    emit(lookupKey, newValue)
  }

  return [value, set] as const
}

export default useLocalStorage
