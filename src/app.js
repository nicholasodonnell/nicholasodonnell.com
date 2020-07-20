import { BREAKPOINTS, COLORS } from 'constants'
import React from 'react'
import { StateProvider } from 'state'
import { createGlobalStyle } from 'styled-components'
import Layout from './layout'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: ${COLORS.DARK_BLUE};
    font-size: 9px;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
      font-size: 10px;
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
      font-size: 12px;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
      font-size: 14px;
    }

    @media (min-width: ${BREAKPOINTS.EXTRA_LARGE}) {
      font-size: 16px;
    }
  }
`

export default () => (
  <StateProvider>
    <GlobalStyle />
    <Layout />
  </StateProvider>
)
