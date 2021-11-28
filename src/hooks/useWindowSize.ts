import { useState, useEffect } from 'react'

const isClient = typeof window === 'object'
const getSize = () => {
  return {
    width: isClient ? window.innerWidth : null,
    height: isClient ? window.innerHeight : null
  }
}

// Based on https://usehooks.com/useWindowSize/
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
