module.exports = {
  electron: {
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    maxWidth: 800,
    maxHeight: 600,
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
