import type { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  void _next

  const status = typeof error === 'object' && error !== null && 'status' in error
    ? Number((error as { status?: number }).status ?? 500)
    : 500

  const message = error instanceof Error ? error.message : 'Unexpected server error'

  response.status(status >= 400 ? status : 500).json({
    error: 'internal_server_error',
    message,
  })
}