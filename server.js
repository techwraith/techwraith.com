const liveServer = require('live-server')
const fs = require('fs')
const {execSync} = require('child_process')

const params = {
  root: './build',
  watch: './build'
}
liveServer.start(params)

const runBuild = () => {
  execSync('npm run build')
}
const watch = (path) => {
  fs.watch(path, {recursive: true}, runBuild)
}

watch('./essays')
watch('./theme')
watch('./intro.md')
watch('./build.js')
