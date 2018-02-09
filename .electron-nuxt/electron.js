import electron from 'electron'
import path from 'path'
import url from 'url'

export default async (config, server) => {
  const _NUXT_URL_ = `http://localhost:${server.address().port}`
  console.log(`Nuxt working on ${_NUXT_URL_}`)

  /*
  ** Electron app
  */
  const POLL_INTERVAL = 300
  const pollServer = () => {
    http.get(_NUXT_URL_, res => {
      const SERVER_DOWN = res.statusCode !== 200
      SERVER_DOWN ? setTimeout(pollServer, POLL_INTERVAL) : win.loadURL(_NUXT_URL_)
    })
    .on('error', pollServer)
  }

  const newWin = () => {
    win = new electron.BrowserWindow({
      width: config.electron.width || 800,
      height: config.electron.height || 600
    })
    if (!config.dev) {
      return win.loadURL(_NUXT_URL_)
    }
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
    win.on('closed', () => win = null)
    pollServer()
  }

  electron.app.on('ready', newWin)
  electron.app.on('window-all-closed', () => electron.app.quit())
  electron.app.on('activate', () => win === null && newWin())

}