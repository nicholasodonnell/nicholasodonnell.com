import { setLayout } from 'actions'
import { Content, Hero, Particles } from 'containers'
import React, { useEffect } from 'react'
import { withState } from 'state'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  flex: 1;
  height: ${({ height }) => height}px;
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
      <Content>
        <Hero />
      </Content>
      <Particles />
    </StyledApp>
  )
}
