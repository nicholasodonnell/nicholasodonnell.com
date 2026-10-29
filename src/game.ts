export const DT = 1 / 60
export const PADDLE_W = 2
export const PADDLE_INSET = 4
export const BALL = 2

const SERVE_DELAY = 1
const START_CROSS_SECONDS = 2.2
const MAX_CROSS_SECONDS = 0.9
const SPEEDUP = 1.05
const MAX_BOUNCE_ANGLE = (50 * Math.PI) / 180
const SERVE_MAX_ANGLE = (30 * Math.PI) / 180
const BOT_SPEED = 1.0
const HARD_BOT_SPEED = 0.3
const PLAYER_SPEED = 1.2
const BOT_AIM_SPREAD = 0.45
const HARD_AIM_MIN = 0
const HARD_AIM_MAX = 0.15
// Fraction of the remaining distance a bot covers per step, so it eases in instead of stopping dead.
const BOT_EASING = 0.4
// Steps a bot takes to go from standing still to full speed.
const BOT_ACCEL_STEPS = 5

export type Side = 'left' | 'right'
export type GameEvent = 'paddle' | 'wall' | 'score'

export interface Paddle {
  y: number
  aim: number
  vy: number
}

export interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  speed: number
}

export interface GameState {
  cols: number
  rows: number
  paddleH: number
  left: Paddle
  right: Paddle
  ball: Ball
  serveTimer: number
  serveTo: Side
  score: { left: number; right: number }
}

export interface StepInput {
  // null: the left paddle is a bot. Otherwise the user plays the left paddle against the hard bot and points count.
  playerDir: -1 | 0 | 1 | null
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const LEFT_FACE = PADDLE_INSET + PADDLE_W

const rightFace = (cols: number) => cols - PADDLE_INSET - PADDLE_W

function randomAim(paddleH: number, hard: boolean): number {
  if (!hard) {
    return (Math.random() * 2 - 1) * BOT_AIM_SPREAD * paddleH
  }
  const sign = Math.random() < 0.5 ? -1 : 1
  return sign * (HARD_AIM_MIN + Math.random() * (HARD_AIM_MAX - HARD_AIM_MIN)) * paddleH
}

function withAim(state: GameState, side: Side, playing: boolean): GameState {
  const aim = randomAim(state.paddleH, side === 'right' && playing)
  return { ...state, [side]: { ...state[side], aim } }
}

export function createGame(cols: number, rows: number): GameState {
  const paddleH = Math.max(8, Math.round(rows / 8))
  const paddleY = (rows - paddleH) / 2
  return {
    cols,
    rows,
    paddleH,
    left: { y: paddleY, aim: randomAim(paddleH, false), vy: 0 },
    right: { y: paddleY, aim: randomAim(paddleH, false), vy: 0 },
    ball: { x: cols / 2 - BALL / 2, y: rows / 2 - BALL / 2, vx: 0, vy: 0, speed: 0 },
    serveTimer: SERVE_DELAY,
    serveTo: Math.random() < 0.5 ? 'left' : 'right',
    score: { left: 0, right: 0 },
  }
}

export function resizeGame(state: GameState, cols: number, rows: number): GameState {
  return { ...createGame(cols, rows), score: state.score }
}

function movePaddle(state: GameState, paddle: Paddle, target: number, maxStep: number): Paddle {
  const delta = target - (paddle.y + state.paddleH / 2)
  const desired = clamp(delta * BOT_EASING, -maxStep, maxStep)
  const accel = maxStep / BOT_ACCEL_STEPS
  const vy = paddle.vy + clamp(desired - paddle.vy, -accel, accel)
  const y = clamp(paddle.y + vy, 0, state.rows - state.paddleH)
  return { ...paddle, y, vy: y - paddle.y }
}

// Folds the straight-line path back into the court to account for wall bounces.
function predictY(state: GameState, face: number): number {
  const { ball } = state
  const t = (face - (ball.x + BALL)) / ball.vx
  const raw = ball.y + ball.vy * t
  const span = state.rows - BALL
  const folded = ((raw % (2 * span)) + 2 * span) % (2 * span)
  return folded <= span ? folded : 2 * span - folded
}

function isApproaching(state: GameState, side: Side): boolean {
  if (state.serveTimer > 0) {
    return false
  }
  return side === 'left' ? state.ball.vx < 0 : state.ball.vx > 0
}

function ambientBot(state: GameState, side: Side): Paddle {
  const paddle = state[side]
  const target = isApproaching(state, side) ? state.ball.y + BALL / 2 + paddle.aim : state.rows / 2
  return movePaddle(state, paddle, target, BOT_SPEED * state.rows * DT)
}

function hardBot(state: GameState): Paddle {
  const paddle = state.right
  const target = isApproaching(state, 'right')
    ? predictY(state, rightFace(state.cols)) + BALL / 2 + paddle.aim
    : state.rows / 2
  return movePaddle(state, paddle, target, HARD_BOT_SPEED * state.rows * DT)
}

function playerPaddle(state: GameState, dir: -1 | 0 | 1): Paddle {
  const y = clamp(state.left.y + dir * PLAYER_SPEED * state.rows * DT, 0, state.rows - state.paddleH)
  return { ...state.left, y, vy: y - state.left.y }
}

function serve(state: GameState, playing: boolean): GameState {
  const serveTimer = state.serveTimer - DT
  if (serveTimer > 0) {
    return { ...state, serveTimer }
  }
  const speed = state.cols / START_CROSS_SECONDS
  const angle = (Math.random() * 2 - 1) * SERVE_MAX_ANGLE
  const direction = state.serveTo === 'left' ? -1 : 1
  const ball = {
    x: state.cols / 2 - BALL / 2,
    y: state.rows / 2 - BALL / 2,
    vx: direction * speed * Math.cos(angle),
    vy: speed * Math.sin(angle),
    speed,
  }
  return withAim({ ...state, serveTimer: 0, ball }, state.serveTo, playing)
}

function hitSide(state: GameState, previousX: number, ball: Ball): Side | null {
  const overlaps = (paddle: Paddle) => ball.y + BALL > paddle.y && ball.y < paddle.y + state.paddleH
  const right = rightFace(state.cols)
  if (ball.vx < 0 && previousX >= LEFT_FACE && ball.x < LEFT_FACE && overlaps(state.left)) {
    return 'left'
  }
  if (ball.vx > 0 && previousX + BALL <= right && ball.x + BALL > right && overlaps(state.right)) {
    return 'right'
  }
  return null
}

function bounce(state: GameState, ball: Ball, side: Side, playing: boolean): GameState {
  const paddle = state[side]
  const offset = clamp((ball.y + BALL / 2 - (paddle.y + state.paddleH / 2)) / (state.paddleH / 2), -1, 1)
  const angle = offset * MAX_BOUNCE_ANGLE
  const speed = Math.min(ball.speed * SPEEDUP, state.cols / MAX_CROSS_SECONDS)
  const direction = side === 'left' ? 1 : -1
  const x = side === 'left' ? LEFT_FACE : rightFace(state.cols) - BALL
  const bounced = { x, y: ball.y, vx: direction * speed * Math.cos(angle), vy: speed * Math.sin(angle), speed }
  return withAim({ ...state, ball: bounced }, side === 'left' ? 'right' : 'left', playing)
}

function scorer(state: GameState, ball: Ball): Side | null {
  if (ball.x + BALL < 0) {
    return 'right'
  }
  return ball.x > state.cols ? 'left' : null
}

function moveBall(state: GameState): { ball: Ball; events: GameEvent[] } {
  const { ball, rows } = state
  const x = ball.x + ball.vx * DT
  const y = ball.y + ball.vy * DT
  if (y <= 0) {
    return { ball: { ...ball, x, y: 0, vy: Math.abs(ball.vy) }, events: ['wall'] }
  }
  if (y + BALL >= rows) {
    return { ball: { ...ball, x, y: rows - BALL, vy: -Math.abs(ball.vy) }, events: ['wall'] }
  }
  return { ball: { ...ball, x, y }, events: [] }
}

function play(state: GameState, playing: boolean): { state: GameState; events: GameEvent[] } {
  const { ball, events } = moveBall(state)
  const side = hitSide(state, state.ball.x, ball)
  if (side) {
    return { state: bounce(state, ball, side, playing), events: [...events, 'paddle'] }
  }
  const winner = scorer(state, ball)
  if (!winner) {
    return { state: { ...state, ball }, events }
  }
  const scored = {
    ...state,
    ball,
    score: playing ? { ...state.score, [winner]: state.score[winner] + 1 } : state.score,
    serveTo: winner === 'left' ? 'right' : 'left',
    serveTimer: SERVE_DELAY,
  } satisfies GameState
  return { state: scored, events: [...events, 'score'] }
}

export function step(state: GameState, input: StepInput): { state: GameState; events: GameEvent[] } {
  const playing = input.playerDir !== null
  const left = input.playerDir === null ? ambientBot(state, 'left') : playerPaddle(state, input.playerDir)
  const right = playing ? hardBot(state) : ambientBot(state, 'right')
  const moved = { ...state, left, right }
  if (moved.serveTimer > 0) {
    return { state: serve(moved, playing), events: [] }
  }
  return play(moved, playing)
}
