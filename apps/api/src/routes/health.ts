import { Router } from 'express'
import type { ApiHealthResponse } from '@bizpilothub/types'

export const healthRouter = Router()

healthRouter.get('/', (_request, response) => {
  const payload: ApiHealthResponse = {
    status: 'ok',
    service: 'api',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
  }

  response.json(payload)
})