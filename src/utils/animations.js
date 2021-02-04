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

export const glitch1 = keyframes`
  0% {
    clip-path: inset(27% 0 1% 0);
  }

  5.88235% {
    clip-path: inset(39% 0 28% 0);
  }

  11.76471% {
    clip-path: inset(4% 0 29% 0);
  }

  17.64706% {
    clip-path: inset(88% 0 2% 0);
  }

  23.52941% {
    clip-path: inset(80% 0 19% 0);
  }

  29.41176% {
    clip-path: inset(69% 0 3% 0);
  }

  35.29412% {
    clip-path: inset(87% 0 6% 0);
  }

  41.17647% {
    clip-path: inset(5% 0 70% 0);
  }

  47.05882% {
    clip-path: inset(84% 0 4% 0);
  }

  52.94118% {
    clip-path: inset(19% 0 2% 0);
  }

  58.82353% {
    clip-path: inset(63% 0 2% 0);
  }

  64.70588% {
    clip-path: inset(78% 0 8% 0);
  }

  70.58824% {
    clip-path: inset(8% 0 87% 0);
  }

  76.47059% {
    clip-path: inset(58% 0 17% 0);
  }

  82.35294% {
    clip-path: inset(100% 0 1% 0);
  }

  88.23529% {
    clip-path: inset(72% 0 12% 0);
  }

  94.11765% {
    clip-path: inset(71% 0 21% 0);
  }

  100% {
    clip-path: inset(42% 0 3% 0);
  }
`

export const glitch2 = keyframes`
  0% {
    clip-path: inset(46% 0 20% 0);
  }

  5.88235% {
    clip-path: inset(18% 0 19% 0);
  }

  11.76471% {
    clip-path: inset(61% 0 40% 0);
  }

  17.64706% {
    clip-path: inset(44% 0 5% 0);
  }

  23.52941% {
    clip-path: inset(61% 0 17% 0);
  }

  29.41176% {
    clip-path: inset(82% 0 13% 0);
  }

  35.29412% {
    clip-path: inset(33% 0 24% 0);
  }

  41.17647% {
    clip-path: inset(57% 0 1% 0);
  }

  47.05882% {
    clip-path: inset(98% 0 1% 0);
  }

  52.94118% {
    clip-path: inset(48% 0 35% 0);
  }

  58.82353% {
    clip-path: inset(58% 0 34% 0);
  }

  64.70588% {
    clip-path: inset(98% 0 3% 0);
  }

  70.58824% {
    clip-path: inset(82% 0 8% 0);
  }

  76.47059% {
    clip-path: inset(4% 0 87% 0);
  }

  82.35294% {
    clip-path: inset(9% 0 79% 0);
  }

  88.23529% {
    clip-path: inset(46% 0 23% 0);
  }

  94.11765% {
    clip-path: inset(45% 0 12% 0);
  }

  100% {
    clip-path: inset(71% 0 21% 0);
  }
`
