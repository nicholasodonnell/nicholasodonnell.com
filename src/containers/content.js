import { ANIMATIONS, ZINDEX } from 'constants'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2%);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Content = styled.div`
  animation: ${fadeIn} ${ANIMATIONS.LONG} ease ${ANIMATIONS.SHORT} 1 forwards;
  height: 100%;
  width: 100%;
  z-index: ${ZINDEX.CONTENT};
  opacity: 0;
  transform: translateY(-2%);
`

export default ({ children }) => (
  <Content>
    {children}
  </Content>
)
