import { useEffect, useState } from 'react'

export function useWindow(): { window: Window } {
  const [_window, setWindow] = useState<Window | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindow(window)
    }
  }, [])
  return { window: _window }
}
