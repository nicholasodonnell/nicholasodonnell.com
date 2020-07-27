import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TIMINGS,
  ZINDEX
} from 'constants'
import { Button } from 'components'
import React from 'react'
import { withState } from 'state'
import styled, { css } from 'styled-components'
import { animations } from 'utils'

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
  animation: ${animations.fadeInDown} ${TIMINGS.LONG} ease ${TIMINGS.SHORT} 1 forwards;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-2%);
  z-index: ${ZINDEX.HERO};

  & {
    animation: ${({ hide }) => hide && css`${animations.fadeOutUp} ${TIMINGS.MEDIUM} ease 0s 1 forwards`};
    pointer-events: ${({ hide }) => hide && 'none'};
  }
`

export default () => {
  const { game } = withState()

  return (
    <Hero hide={game.initialized}>
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
}
