export function joinClassNames(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(' ')
}

export function normalizeUrl(value: string | undefined, fallback: string): string {
  return (value ?? fallback).replace(/\/+$/, '')
}

export function parsePort(value: string | undefined, fallback: number): number {
  const port = Number(value)
  return Number.isFinite(port) && port > 0 ? port : fallback
}