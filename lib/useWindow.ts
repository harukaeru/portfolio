import { useEffect, useState } from 'react'

export function useWindow() {
  const [_window, setWindow] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindow(window)
    }
  }, [])
  return { window: _window }
}
