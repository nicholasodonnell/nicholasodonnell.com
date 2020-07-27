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
  padding: 0 0.625rem;
  background-color: ${COLORS.WHITE};
  border-radius: 0.3rem;

  & {
    animation: ${({ pulse }) => pulse && css`${animations.pulse} ${TIMINGS.EXTRA_LONG} linear ${TIMINGS.LONG} infinite forwards`};
  }
`

export default ({ active }) => (
  <SpaceInvadersInstructions active={active}>
    <Intro>
      Space Invaders
      <br />
      Press
      {' '}
      <KeyboardButton pulse>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z" /></svg>
      </KeyboardButton>
      {' '}
      to Play!
    </Intro>
    <Instructions>
      <Instruction>
        <KeyboardButton><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" /></svg></KeyboardButton>
        {' '}
        Move Left
      </Instruction>
      <Instruction>
        <KeyboardButton><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /></svg></KeyboardButton>
        {' '}
        Move Right
      </Instruction>
      <Instruction>
        <KeyboardButton><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z" /></svg></KeyboardButton>
        {' '}
        Shoot
      </Instruction>
    </Instructions>
  </SpaceInvadersInstructions>
)
