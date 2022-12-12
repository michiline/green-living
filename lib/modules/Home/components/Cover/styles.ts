import styled from 'styled-components'

export const SCover = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0px 24px;
  @media only screen and (max-width: 376px) {
    padding: 0px 16px;
  }
  position: relative;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(11, 44, 24, 0.3), rgba(255, 255, 255, 0.4));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`

export const Email = styled.p`
  text-shadow: 1.5594px 3.89849px 3.89849px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  color: ${p => p.theme.colors.tone.secondary};
  font-size: 32px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    font-size: 24px;
  }
`

export const Title = styled.h1`
  text-shadow: 1.5594px 3.89849px 3.89849px rgba(0, 0, 0, 0.2);
  color: ${p => p.theme.colors.brand.primary};
  font-size: ${p => p.theme.typography.size.H1}px;
  text-align: center;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    font-size: ${p => p.theme.typography.size.H1 * 0.65}px;
  }
`

export const LogoWrap = styled.div`
  position: absolute;
  top: 0px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    width: 100%;
    max-width: 400px;
  }
`

export const Logo = styled.div`
  width: 400px;
  aspect-ratio: 2;
  zindex: 2;
  position: relative;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    width: 100%;
  }
`

export const Link = styled.a`
  text-decoration: none;
  margin-left: 16px;
  &:first-of-type {
    margin-left: 0;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    margin-top: 16px;
    margin-left: 0;
    &:first-of-type {
      margin-top: 0;
    }
  }
`
