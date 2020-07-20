import { BREAKPOINTS, COLORS, ZINDEX } from 'constants'
import { Content, Hero, Particles } from 'containers'
import React from 'react'
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
  display: flex;
  flex: 1;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`

export default () => (
  <>
    <GlobalStyle />
    <StyledApp>
      <Content>
        <Hero />
      </Content>
      <Particles />
    </StyledApp>
  </>
)
