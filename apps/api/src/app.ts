import cors from 'cors'
import express from 'express'
import { apiRouter } from './routes/index'
import { notFoundHandler } from './middlewares/notFound'
import { errorHandler } from './middlewares/errorHandler'

export function createApp() {
  const app = express()

  app.disable('x-powered-by')
  app.use(cors())
  app.use(express.json({ limit: '1mb' }))
  app.use('/api', apiRouter)
  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}