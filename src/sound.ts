import type { GameEvent } from './game.ts'

const TONES: Record<GameEvent, { frequency: number; duration: number }> = {
  paddle: { frequency: 460, duration: 0.05 },
  wall: { frequency: 230, duration: 0.05 },
  score: { frequency: 490, duration: 0.25 },
}

let audio: AudioContext | null = null

export function enableSound(): void {
  audio ??= new AudioContext()
  if (audio.state === 'suspended') {
    void audio.resume()
  }
}

export function beep(event: GameEvent): void {
  if (!audio) {
    return
  }
  const { frequency, duration } = TONES[event]
  const now = audio.currentTime
  const oscillator = audio.createOscillator()
  const gain = audio.createGain()
  oscillator.type = 'square'
  oscillator.frequency.value = frequency
  gain.gain.setValueAtTime(0.04, now)
  gain.gain.linearRampToValueAtTime(0, now + duration)
  oscillator.connect(gain).connect(audio.destination)
  oscillator.start(now)
  oscillator.stop(now + duration)
}
