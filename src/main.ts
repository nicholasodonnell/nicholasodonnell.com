import { draw } from './draw.ts'
import { createGame, DT, PADDLE_INSET, PADDLE_W, resizeGame, step } from './game.ts'
import { beep, enableSound } from './sound.ts'

const canvas = document.querySelector<HTMLCanvasElement>('#court')!
const headline = document.querySelector<HTMLElement>('#hero h1')!
const links = document.querySelector<HTMLElement>('#hero nav')!
const hint = document.querySelector<HTMLElement>('#hint')!
const ctx = canvas.getContext('2d')!

const GAME_KEYS: Record<string, true> = { ArrowUp: true, ArrowDown: true, KeyW: true, KeyS: true }
const HINT_MS = 3000
const canPlay = matchMedia('(hover: hover) and (pointer: fine)').matches

if (!canPlay) {
  document.documentElement.classList.add('no-play')
}

// Touch screens get a coarser grid so the ball and paddles stay visible on small screens.
const GRID_DIVISOR = canPlay ? 150 : 70

function layout(): { scale: number; cols: number; rows: number; offsetX: number; pixelsPerUnit: number } {
  const scale = Math.max(3, Math.floor(Math.min(innerWidth, innerHeight) / GRID_DIVISOR))
  // An odd column count puts the center line exactly on the viewport center.
  const cols = Math.ceil(innerWidth / scale) | 1
  const rows = Math.ceil(innerHeight / scale)
  const offsetX = (innerWidth - cols * scale) / 2
  const pixelsPerUnit = scale * devicePixelRatio
  canvas.width = Math.round(cols * pixelsPerUnit)
  canvas.height = Math.round(rows * pixelsPerUnit)
  ctx.setTransform(pixelsPerUnit, 0, 0, pixelsPerUnit, 0, 0)
  canvas.style.left = `${offsetX}px`
  canvas.style.width = `${cols * scale}px`
  canvas.style.height = `${rows * scale}px`
  return { scale, cols, rows, offsetX, pixelsPerUnit }
}

let view = layout()
let state = createGame(view.cols, view.rows)
let playing = false
let scoreY = 0
let scrollProgress = 0
let hintTimer = 0
let accumulator = 0
let lastTime = performance.now()
const held = new Set<string>()

function playerDir(): -1 | 0 | 1 {
  const down = held.has('ArrowDown') || held.has('KeyS')
  const up = held.has('ArrowUp') || held.has('KeyW')
  if (down === up) {
    return 0
  }
  return down ? 1 : -1
}

const measureScoreY = () => Math.ceil((headline.getBoundingClientRect().bottom + 28) / view.scale)

function positionHint(): void {
  hint.style.left = `${view.offsetX + (PADDLE_INSET + PADDLE_W / 2) * view.scale}px`
  hint.style.top = `calc(${state.left.y * view.scale}px - 1.5em)`
  hint.style.height = `calc(${state.paddleH * view.scale}px + 3em)`
}

function enterPlay(): void {
  playing = true
  state = { ...state, score: { left: 0, right: 0 } }
  scoreY = measureScoreY()
  positionHint()
  hint.classList.add('visible')
  hintTimer = setTimeout(() => hint.classList.remove('visible'), HINT_MS)
}

function exitPlay(): void {
  playing = false
  held.clear()
  clearTimeout(hintTimer)
  hint.classList.remove('visible')
}

function onScroll(): void {
  const max = document.documentElement.scrollHeight - innerHeight
  const progress = max > 0 ? Math.min(Math.max(scrollY / max, 0), 1) : 0
  document.documentElement.style.setProperty('--p', String(progress))
  scrollProgress = progress
  links.inert = progress >= 0.5
  const next = canPlay && progress >= 0.99
  if (next === playing) {
    return
  }
  if (next) {
    enterPlay()
  } else {
    exitPlay()
  }
}

function onResize(): void {
  const previous = view
  view = layout()
  if (view.cols !== previous.cols || view.rows !== previous.rows) {
    state = resizeGame(state, view.cols, view.rows)
  }
  onScroll()
  if (playing) {
    scoreY = measureScoreY()
  }
}

function frame(time: number): void {
  accumulator += Math.min(Math.max(time - lastTime, 0) / 1000, 0.1)
  lastTime = time
  while (accumulator >= DT) {
    const result = step(state, { playerDir: playing ? playerDir() : null })
    state = result.state
    if (playing) {
      result.events.forEach(beep)
    }
    accumulator -= DT
  }
  if (playing) {
    positionHint()
  }
  draw(ctx, state, { playing, progress: scrollProgress, scoreY, pixelsPerUnit: view.pixelsPerUnit })
  requestAnimationFrame(frame)
}

addEventListener('keydown', (event) => {
  if (!playing || !GAME_KEYS[event.code]) {
    return
  }
  event.preventDefault()
  held.add(event.code)
  enableSound()
})
addEventListener('keyup', (event) => held.delete(event.code))
addEventListener('blur', () => held.clear())
addEventListener('scroll', onScroll, { passive: true })
addEventListener('resize', onResize)

onScroll()
requestAnimationFrame(frame)
