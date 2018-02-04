module.exports = {
  electron: {
    width: 600,
    height: 360,
    minWidth: 600,
    minHeight: 360,
    maxWidth: 600,
    maxHeight: 360,
    'node-integration': false,
    icon: 'src/renderer/assets/touno.ico',
    show: true,
    movable: true,
    resizable: false,
    alwaysOnTop: false,
    skipTaskbar: false,
    transparent: false
  },
  build: {
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.target = 'electron-renderer'
      }
    }
  }
}
