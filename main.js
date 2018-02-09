let win = null // Current window

const http = require('http')
const { Nuxt, Builder } = require('nuxt')

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
config.rootDir = __dirname // for electron-packager

// Init Nuxt.js
const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
const server = http.createServer(nuxt.render)

// Build only in dev mode
if (config.dev) {
  builder.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Listen the serverasdasd
server.listen()
