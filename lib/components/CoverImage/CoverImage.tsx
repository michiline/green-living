import Image from 'next/image'
import { useTheme } from 'styled-components'
import useViewport from 'utils/hooks/useViewport'

const CoverImage = ({ img }) => {
  const isMobile = window.innerWidth <= 768
  useViewport()
  return (
    <Image
      src={isMobile ? img.mobileSrc : img.src}
      alt="alt"
      layout="fill"
      objectFit="cover"
      quality={100}
      sizes={'100vw'}
      priority={true}
    />
  )
}

export default CoverImage
