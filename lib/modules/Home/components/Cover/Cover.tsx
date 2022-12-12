import Button from 'components/Button'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from 'utils/conts'
import { homeImg, homeMobileImg, logo } from 'utils/images'
import { Buttons, Center, Email, Link, Logo, LogoWrap, Overlay, SCover, Title } from './styles'

const DynamicCoverImage = dynamic(() => import('components/CoverImage'), { ssr: false })

const Cover = () => {
  return (
    <SCover>
      <DynamicCoverImage
        img={{
          src: homeImg,
          mobileSrc: homeMobileImg,
        }}
      />
      <Overlay />
      <LogoWrap>
        <Logo>
          <Image
            src={logo}
            layout="fill"
            objectFit="cover"
            alt="logo"
            style={{ zIndex: 2, position: 'absolute', top: '24px' }}
          />
        </Logo>
      </LogoWrap>

      <Center>
        <Title>Web stranica u izradi!</Title>
        <Buttons>
          <Link href={INSTAGRAM_URL} target="_blank" rel={'noreferrer'}>
            <Button>Instagram</Button>
          </Link>
          <Link href={FACEBOOK_URL} target="_blank" rel={'noreferrer'}>
            <Button variant="outlined">Facebook</Button>
          </Link>
        </Buttons>
        <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'none' }}>
          <Email>{EMAIL}</Email>
        </a>
      </Center>
    </SCover>
  )
}

export default Cover
