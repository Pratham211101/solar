export function lerp(start: number, end: number, factor: number): number {
  return start * (1 - factor) + end * factor;
}

export function clamp(min: number, max: number, value: number): number {
  return Math.max(min, Math.min(max, value));
}
