import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import { loadFull } from 'tsparticles'

import { COLORS, PARTICLE_DENSITY, ZINDEX } from '../constants'

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.BACKGROUND};
`

const particlesInit = main => {
  loadFull(main)
}

const particleOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        area: PARTICLE_DENSITY,
      },
    },
    color: {
      value: COLORS.WHITE,
    },
    lineLinked: {
      distance: 125,
    },
    shape: {
      type: 'circle',
      polygon: {
        sides: 3,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: false,
    },
    links: {
      enable: true,
      distance: 150,
      color: '#FFF',
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'bounce',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: false,
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 500,
      },
    },
  },
  detectRetina: true,
  fpsLimit: 999,
  polygon: {
    enable: false,
    scale: 1,
    type: 'inline',
    inline: {
      arrangement: 'onePerPoint',
    },
    draw: {
      enable: false,
      stroke: {
        width: 0.5,
        color: 'rgba(255, 255, 255, .1)',
      },
    },
    move: {
      radius: 10,
      type: 'path',
    },
    url: '',
  },
}

export default () => (
  <StyledParticles
    init={particlesInit}
    options={particleOptions}
  />
)
