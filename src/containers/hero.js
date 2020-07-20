import {
  COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS
} from 'constants'
import { Button, Container } from 'components'
import React from 'react'
import styled from 'styled-components'

const CTAButtons = styled.div`
  display: flex;
`

const Headline = styled.h1`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.SANS_SERIF};
  font-size: ${FONT_SIZES.LARGE};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  line-height: 1.25;
  margin-bottom: 1.25rem;
  text-align: center;
`

const Highlight = styled.span`
  color: ${COLORS.RED};
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
`

const StyledContainer = styled(Container)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default () => (
  <StyledContainer>
    <Headline>
      Hello, I&apos;m
      {' '}
      <Highlight>Nicholas O&apos;Donnell</Highlight>
      .
      <br />
      I&apos;m a full-stack software engineer.
    </Headline>
    <CTAButtons>
      <Button
        href="https://github.com/nicholasodonnell"
        target="_blank"
      >
        Explore Work
      </Button>
      <Button
        href="https://www.linkedin.com/in/nicholas-odonnell"
        target="_blank"
      >
        View Profile
      </Button>
    </CTAButtons>
  </StyledContainer>
)
