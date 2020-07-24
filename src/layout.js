import { setLayout } from 'actions'
import { Hero, Particles, SpaceInvaders } from 'containers'
import React, { useEffect } from 'react'
import { withState } from 'state'
import styled from 'styled-components'

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: ${({ height }) => height}px;
  justify-content: center;
  overflow: hidden;
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
    <StyledApp height={layout.height}>
      <Hero />
      <SpaceInvaders />
      <Particles />
    </StyledApp>
  )
}
