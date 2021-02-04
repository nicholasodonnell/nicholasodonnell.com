import React from 'react'
import styled from 'styled-components'

import {
  BREAKPOINTS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TIMINGS,
} from '../constants'

const Button = styled.a`
  border: 1px solid ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONOSPACE};
  font-size: ${FONT_SIZES.MEDIUM};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  line-height: 1;
  margin: 2.5rem 1rem;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: border-color ${TIMINGS.SHORT} ease-in-out,
    color ${TIMINGS.SHORT} ease-in-out;

  @media (min-width: ${BREAKPOINTS.SMALL}) {
    margin: 2rem 1.5rem;
    padding: 1rem 2rem;
  }

  &:before {
    background-color: ${COLORS.WHITE};
    height: 1px;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: 2.8rem;
    transform: translateX(-50%) translateY(-50%);
    transition: background-color ${TIMINGS.SHORT} ease-in-out,
      transform ${TIMINGS.SHORT} ease-in-out;

    @media (min-width: ${BREAKPOINTS.SMALL}) {
      content: '';
    }
  }

  &:hover:before {
    transform: translateX(-75%) translateY(-50%);
  }

  &:first-child:hover {
    color: ${COLORS.BLUE};
    border-color: ${COLORS.BLUE};

    &:before {
      background-color: ${COLORS.BLUE};
    }
  }

  &:last-child:hover {
    color: ${COLORS.RED};
    border-color: ${COLORS.RED};

    &:before {
      background-color: ${COLORS.RED};
    }
  }
`

export default ({
  children,
  className,
  href,
  target,
}) => (
  <Button className={className} href={href} target={target}>
    {children}
  </Button>
)
