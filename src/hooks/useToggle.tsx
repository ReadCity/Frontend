import { useState } from 'react'

interface useToggleReturnTypes {
  value: boolean
  toggle: (value: boolean) => void
}

export default function useToggle (initialValue: boolean = false): useToggleReturnTypes {
  const [value, setValue] = useState(initialValue)
  function toggle (value: boolean): void {
    if (value) { setValue(value); return }
    setValue(previousValue => !previousValue)
  }
  return { value, toggle }
}
