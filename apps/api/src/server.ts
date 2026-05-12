import { createApp } from './app'
import { parsePort } from '@bizpilothub/utils'

const port = parsePort(process.env.PORT, 4000)

export function startServer() {
  const app = createApp()

  return app.listen(port, () => {
    console.log(`BizPilotHub API listening on port ${port}`)
  })
}

startServer()