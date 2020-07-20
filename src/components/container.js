import { GUTTER, LAYOUT } from 'constants'
import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: ${LAYOUT.MAX_WIDTH};
  padding: ${GUTTER};
  width: ${LAYOUT.WIDTH};
`

export default ({ children, className }) => (
  <Container className={className}>{children}</Container>
)
