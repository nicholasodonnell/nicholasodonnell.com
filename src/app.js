import { compose } from 'ramda'
import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { setLayout } from './actions'
import { BREAKPOINTS, COLORS } from './constants'
import {
  Buttons,
  Hero,
  Particles,
} from './containers'
import { layout as layoutUtil } from './utils'
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

const Layout = styled.main`
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
  const [ { layout }, dispatch ] = withState()

  useEffect(() => window.addEventListener('resize', compose(
    dispatch,
    setLayout,
    layoutUtil.calc,
  )), [])

  return (
    <>
      <GlobalStyle />
      <Layout height={layout.height}>
        <Hero />
        <Buttons />
        <Particles />
      </Layout>
    </>
  )
}
