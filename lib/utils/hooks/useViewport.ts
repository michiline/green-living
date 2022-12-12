import { useMemo, useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { useTheme } from 'styled-components'

const useViewport = () => {
  const theme = useTheme()
  const [isMobile, setIsMobile] = useState(true)
  const handleResize = useMemo(() => debounce(() => setIsMobile(window.innerWidth <= 768), 50), [])
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])
  return { isMobile }
}

export default useViewport
