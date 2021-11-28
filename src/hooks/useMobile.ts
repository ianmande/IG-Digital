import { useWindowSize } from './useWindowSize'

export const useMobile = () => {
  const size = useWindowSize()
  return (size.width || 0) <= 640
}
