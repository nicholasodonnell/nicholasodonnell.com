export const BREAKPOINTS = {
  SMALL: '576px',
  MEDIUM: '768px',
  LARGE: '992px',
  EXTRA_LARGE: '1200px'
}

export const COLORS = {
  BLACK: '#000000',
  DARK_BLUE: '#2B2D36',
  RED: '#E31B6D',
  WHITE: '#FFFFFF'
}

export const DIRECTIONS = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

export const FONT_FAMILIES = {
  MONO: 'VT323, monospace',
  SANS_SERIF: 'Raleway, sans-serif'
}

export const FONT_SIZES = {
  MEDIUM: '1.2rem',
  LARGE: '2.65rem',
  EXTRA_LARGE: '4rem'
}

export const FONT_WEIGHTS = {
  LIGHT: 300,
  REGULAR: 400,
  SEMI_BOLD: 600
}

export const GAME_DISPATCH_THROTTLE = 150

// 60fps
export const GAME_UPDATE_EVERY = 1000 / 60

export const INITIAL_STATE = {
  canvas: {
    height: 0,
    width: 0
  },
  game: {
    initialized: false,
    playing: false
  },
  layout: {
    height: window.innerHeight,
    width: window.innerWidth
  },
  missles: [],
  ship: {
    height: 0,
    width: 0,
    x: 0,
    y: 0
  }
}

export const MISSLE_PIXELS_HEIGHT = 20

export const MISSLE_PIXELS_WIDTH = 4

export const MISSLE_STEP_TIMING = 25

export const PARTICLE_PER_SQUARE_PIXELS = 40000

export const SHIP_WIDTH = '3.125rem'

export const SPRITE_MOVE_DISTANCE = 30

export const TIMINGS = {
  FAST: '100ms',
  SHORT: '200ms',
  MEDIUM: '500ms',
  LONG: '1000ms',
  EXTRA_LONG: '1500ms'
}

export const ZINDEX = {
  PARTICLES: 1,
  SPACE_INVADERS: 2,
  HERO: 3
}
