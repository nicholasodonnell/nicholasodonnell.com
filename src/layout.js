import { setLayout } from 'actions'
import { BREAKPOINTS, COLORS } from 'constants'
import { Hero, Particles, SpaceInvaders } from 'containers'
import React, { useEffect } from 'react'
import { withState } from 'state'
import styled, { createGlobalStyle } from 'styled-components'

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

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  height: ${({ height }) => height}px;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: 100vw;
`

export default () => {
  const { dispatch, layout } = withState()

  useEffect(() => window.addEventListener('resize', () => dispatch(setLayout({
    height: window.innerHeight,
    width: window.innerWidth
  }))), [])

  return (
    <>
      <GlobalStyle />
      <StyledApp height={layout.height}>
        <Hero />
        <SpaceInvaders />
        <Particles />
      </StyledApp>
    </>
  )
}
