import { ship } from 'assets'
import { ANIMATIONS } from 'constants'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Ship = styled.image`
  cursor: pointer;
  height: auto;
  pointer-events: bounding-box;
  transform-box: fill-box;
  transform-origin: center center;
  transition: transform ${ANIMATIONS.SHORT} ease-in-out;
  width: 3rem;

  &:hover {
    transform: scale(1.1);
  }
`

export default ({ innerRef, x, y }) =>
// const element = useRef(null)
// const [boundingClientRect, setBoundingClientRect] = useState({})

// useEffect(() => {
//   setBoundingClientRect(element?.current?.getBoundingClientRect())
// }, [])

// console.log('boundingClientRect', boundingClientRect)

  (
    <Ship
      href={ship}
      onClick={() => console.log('click')}
      onMouseOver={() => console.log('mouse over')}
      ref={innerRef}
      x={x}
      y={y}
    />
  )
