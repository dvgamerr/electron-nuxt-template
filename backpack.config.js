module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    config.entry.main = './.electron-nuxt/index.js'
    return config
  }
}