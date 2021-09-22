import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { BREAKPOINTS, COLORS } from './constants'
import {
  Buttons,
  Hero,
  Particles,
} from './containers'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: ${COLORS.DARK_BLUE};
    font-size: 13px;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
      font-size: 14px;
    }

    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
      font-size: 15px;
    }

    @media (min-width: ${BREAKPOINTS.LARGE}) {
      font-size: 16px;
    }
  }
`

const Layout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  padding: 15px;
  position: fixed;
  width: 100vw;
`

export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <Hero />
      <Buttons />
      <Particles />
    </Layout>
  </>
)
