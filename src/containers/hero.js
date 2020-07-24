import {
  ANIMATIONS, COLORS, FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, ZINDEX
} from 'constants'
import { Button } from 'components'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

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

const Hero = styled.section`
  align-items: center;
  animation: ${fadeInDown} ${ANIMATIONS.LONG} ease ${ANIMATIONS.SHORT} 1 forwards;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-2%);
  z-index: ${ZINDEX.HERO};
`

export default () => (
  <Hero>
    <Headline>
      Hello, I&apos;m
      {' '}
      <Highlight>Nicholas O&apos;Donnell</Highlight>
      .
      <br />
      I&apos;m a full-stack software engineer.
    </Headline>
    <CTAButtons>
      <Button href="https://github.com/nicholasodonnell" target="_blank">
        Explore Work
      </Button>
      <Button href="https://www.linkedin.com/in/nicholas-odonnell" target="_blank">
        View Profile
      </Button>
    </CTAButtons>
  </Hero>
)
