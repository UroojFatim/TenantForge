import type { RequestHandler } from 'express'

export const notFoundHandler: RequestHandler = (request, response) => {
  response.status(404).json({
    error: 'not_found',
    message: `No route matches ${request.method} ${request.originalUrl}`,
  })
}