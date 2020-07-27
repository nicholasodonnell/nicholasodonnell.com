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

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2%);
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

export const pulse = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
`
