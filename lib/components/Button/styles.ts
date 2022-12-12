import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

type SButtonProps = Pick<ButtonProps, 'variant'>

export const SButton = styled.button<SButtonProps>`
  font-weight: ${p => p.theme.typography.weight.Bold};
  font-size: ${p => p.theme.typography.size.Button}px;
  line-height: 1.4;
  outline: none;
  backdrop-filter: blur(4px);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 12px 32px;
  border-radius: 56px;
  text-transform: uppercase;
  ${p =>
    p.variant === 'contained' &&
    css`
      background-color: ${p => p.theme.colors.brand.primary};
      border: none;
      padding: 12px 48px;
      color: ${p => p.theme.colors.tone.secondary};
    `}
  ${p =>
    p.variant === 'outlined' &&
    css`
      color: ${p => p.theme.colors.brand.primary};
      border: 5px solid ${p => p.theme.colors.tone.secondary};
      padding: 7px 43px;
      background-color: transparent;
    `}
  }
  z-index: 3;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    font-size: ${p => p.theme.typography.size.Button * 0.8}px;
  }
`
