const nx = require('nuxt')
const http = require('http')
const { spawn } = require('child_process')
const electron = require('electron')
const path = require('path')

const mainServer = async (url) => {
  let proc = spawn(electron, ['--inspect=5858', path.join(__dirname, '../main.js'), url])

  proc.stdout.on('data', data => { console.log(data.toString()) })
  proc.stderr.on('data', data => { console.error(data.toString()) })
  proc.stderr.on('error', data => { console.error(data.toString()) })

  proc.on('close', () => { process.exit() })
  proc.on('exit', () => { process.exit() })
}

let server = null
const renderServer =  async () => {
  // Import and Set Nuxt.js options
  let config = require('./../nuxt.config.js')
  config.dev = !((process.env.NODE_ENV || 'production') === 'production')
  config.rootDir = `${__dirname}/../` // for electron-packager

  // Init Nuxt.js
  const nuxt = new nx.Nuxt(config)
  const builder = new nx.Builder(nuxt)
  server = http.createServer(nuxt.render)

  // Build only in dev mode
  if (config.dev) await builder.build()

  // Listen the serverasdasd
  await server.listen()
}

renderServer().then(() => {
  const _NUXT_URL_ = `http://localhost:${server.address().port}`
  console.log(`Nuxt working on ${_NUXT_URL_}`)
  return mainServer(_NUXT_URL_)
}).catch(ex => {
  console.log('ex', ex)
})
