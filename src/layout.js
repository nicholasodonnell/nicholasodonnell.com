import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { setLayout } from './actions'
import { BREAKPOINTS, COLORS } from './constants'
import {
  Buttons,
  Hero,
  Particles,
} from './containers'
import { withState } from './state'

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

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: ${({ height }) => height}px;
  justify-content: center;
  max-height: 100vh;
  overflow: hidden;
  padding: 15px;
  position: relative;
  width: 100vw;
`

export default () => {
  const { dispatch, layout } = withState()

  useEffect(() => window.addEventListener('resize', () => dispatch(setLayout({
    height: window.innerHeight,
    width: window.innerWidth,
  }))), [])

  return (
    <>
      <GlobalStyle />
      <StyledApp height={layout.height}>
        <Hero />
        <Buttons />
        <Particles />
      </StyledApp>
    </>
  )
}
