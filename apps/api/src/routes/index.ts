import { Router } from 'express'
import { healthRouter } from './health'

export const apiRouter = Router()

apiRouter.get('/', (_request, response) => {
  response.json({
    name: 'BizPilotHub API',
    status: 'running',
    routes: ['/api/health'],
  })
})

apiRouter.use('/health', healthRouter)