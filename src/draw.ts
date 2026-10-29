import { BALL, PADDLE_INSET, PADDLE_W, type GameState } from './game.ts'

// Alpha ranges from the top of the page to the bottom; the bottom piece alpha matches the headline in style.css.
const LINE_ALPHA = [0.07, 0.15]
const PIECE_ALPHA = [0.2, 0.85]

const white = ([top, bottom]: number[], progress: number) => `rgb(255 255 255 / ${top + (bottom - top) * progress})`

const DIGIT_PX = 2
const DIGIT_ADVANCE = 4 * DIGIT_PX
const SCORE_GAP = 8

const DIGITS = [
  '111101101101111',
  '010110010010111',
  '111001111100111',
  '111001111001111',
  '101101111001001',
  '111100111001111',
  '111100111101111',
  '111001001001001',
  '111101111101111',
  '111101111001111',
]

function drawNumber(ctx: CanvasRenderingContext2D, value: number, x: number, y: number): void {
  ;[...String(value)].forEach((char, index) => {
    const left = x + index * DIGIT_ADVANCE
    ;[...DIGITS[Number(char)]].forEach((bit, cell) => {
      if (bit === '1') {
        ctx.fillRect(left + (cell % 3) * DIGIT_PX, y + Math.floor(cell / 3) * DIGIT_PX, DIGIT_PX, DIGIT_PX)
      }
    })
  })
}

export function draw(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  view: { playing: boolean; progress: number; scoreY: number },
): void {
  const { cols, rows, paddleH, ball, score } = state
  ctx.clearRect(0, 0, cols, rows)

  ctx.fillStyle = white(LINE_ALPHA, view.progress)
  const centerX = Math.floor(cols / 2)
  for (let y = 0; y < rows; y += 8) {
    ctx.fillRect(centerX, y, 1, 4)
  }
  if (view.playing) {
    const leftWidth = String(score.left).length * DIGIT_ADVANCE - DIGIT_PX
    drawNumber(ctx, score.left, Math.round(cols / 2 - SCORE_GAP - leftWidth), view.scoreY)
    drawNumber(ctx, score.right, Math.round(cols / 2 + SCORE_GAP), view.scoreY)
  }
  ctx.fillStyle = white(PIECE_ALPHA, view.progress)
  if (state.serveTimer <= 0) {
    ctx.fillRect(Math.round(ball.x), Math.round(ball.y), BALL, BALL)
  }
  ctx.fillRect(cols - PADDLE_INSET - PADDLE_W, Math.round(state.right.y), PADDLE_W, paddleH)
  ctx.fillRect(PADDLE_INSET, Math.round(state.left.y), PADDLE_W, paddleH)
}
