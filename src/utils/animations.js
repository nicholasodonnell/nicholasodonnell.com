import { keyframes } from 'styled-components'

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-2%);
  }
`
