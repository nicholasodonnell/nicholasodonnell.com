import {
  ANIMATIONS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS
} from 'constants'
import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  border: 1px solid ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.SANS_SERIF};
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  line-height: 1;
  margin: 0 1.5rem;
  padding: 1rem 2rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: border-color ${ANIMATIONS.SHORT} ease-in-out,
    color ${ANIMATIONS.SHORT} ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2.8rem;
    height: 1px;
    background-color: ${COLORS.WHITE};
    transform: translateX(-50%) translateY(-50%);
    transition: background-color ${ANIMATIONS.SHORT} ease-in-out,
      transform ${ANIMATIONS.SHORT} ease-in-out;
  }

  &:hover {
    color: ${COLORS.RED};
    border-color: ${COLORS.RED};

    &:before {
      background-color: ${COLORS.RED};
      transform: translateX(-75%) translateY(-50%);
    }
  }
`

export default ({
  children, className, href, target
}) => (
  <Button className={className} href={href} target={target}>
    {children}
  </Button>
)
