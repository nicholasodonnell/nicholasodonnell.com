import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  TIMINGS
} from 'constants'
import React from 'react'
import styled, { css } from 'styled-components'
import { animations } from 'utils'

const SpaceInvadersInstructions = styled.div`
  animation: ${animations.fadeInDown} ${TIMINGS.LONG} ease ${TIMINGS.MEDIUM} 1 forwards;
  opacity: 0;
  position: absolute;
  transform: translateY(-2%);
`

const Intro = styled.h2`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONO};
  font-size: ${FONT_SIZES.EXTRA_LARGE};
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
`

const Instructions = styled.div`
  display: table;
  margin: 0 auto;
`

const Instruction = styled.h3`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONO};
  font-size: ${FONT_SIZES.LARGE};
  margin-top: 2rem;
  text-transform: uppercase;
`

const KeyboardButton = styled.span`
  box-shadow:
    inset 0 -2px 0 #aaaaaa,
    inset 0px 1px 1px -1px #fff,
    0px 1px 1px 0px #7a7a7a;
  color: ${COLORS.RED};
  padding: 0 0.625rem;
  background-color: ${COLORS.WHITE};
  border-radius: 0.3rem;

  & {
    animation: ${({ pulse }) => pulse && css`${animations.pulse} ${TIMINGS.EXTRA_LONG} linear ${TIMINGS.LONG} infinite forwards`};
  }
`

const Title = styled.span`
  color: ${COLORS.RED};
  font-size: 130%;
`

export default ({ active }) => (
  <SpaceInvadersInstructions active={active}>
    <Intro>
      <Title>Space Invaders</Title>
      <br />
      Press
      {' '}
      <KeyboardButton pulse>
        Enter
      </KeyboardButton>
      {' '}
      to Play!
    </Intro>
    <Instructions>
      <Instruction>
        <KeyboardButton>Left</KeyboardButton>
        {' '}
        Move Left
      </Instruction>
      <Instruction>
        <KeyboardButton>Right</KeyboardButton>
        {' '}
        Move Right
      </Instruction>
      <Instruction>
        <KeyboardButton>Space</KeyboardButton>
        {' '}
        Shoot
      </Instruction>
    </Instructions>
  </SpaceInvadersInstructions>
)
