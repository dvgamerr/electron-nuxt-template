import http from 'http'
import { Nuxt, Builder } from 'nuxt'
import electron from './electron'

const ServerRender =  async () => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'production'
  let win = null // Current window

  // Import and Set Nuxt.js options
  let config = require('./../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  config.rootDir = __dirname // for electron-packager
  if (config.dev) process.env.DEBUG = 'nuxt:*'

  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const builder = new Builder(nuxt)
  const server = http.createServer(nuxt.render)

  // Build only in dev mode
  if (config.dev) await builder.build()

  // Listen the serverasdasd
  await server.listen()
  await electron(config, server)
}

ServerRender().then(() => {

}).catch(ex => {
  console.log('ex', ex)
})
