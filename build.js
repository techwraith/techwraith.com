const startTime = Date.now()
console.log('starting build\n')
/* core */
const fs = require('fs')

/* deps */
const titlecase = require('titlecase')
const rmrf = require('rimraf').sync
const hbs = require('handlebars').compile
const highlighter = require('highlight.js')
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && highlighter.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               highlighter.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
const pkg = require('./package.json')

/* helpers */
const removeMD = (str) => str.replace('.md', '')
const title = (str) => titlecase(str.replace(/-/g, ' '))
const readfile = (path) => {
  return fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : null
}
const appendSiteTitle = (str) => str + ' – ' + pkg.name
const render = (path) => md.render(readfile(path))

/* content */
const essays = fs.readdirSync('./essays').map((filename) => {
  return {
    title: title(removeMD(filename)),
    slug: removeMD(filename),
    body: render('./essays/' + filename)
  }
})
const intro = {
  body: render('./intro.md'),
  essays: essays
}
const templates = {
  layout: hbs(readfile('./theme/layout.hbs')),
  home: hbs(readfile('./theme/home.hbs')),
  essay: hbs(readfile('./theme/essay.hbs')),
  style: readfile('./theme/index.css'),
  js: readfile('./theme/index.js'),
  fourohfour: render('./theme/404.hbs')
}

/* renders */
const essayPages = essays.map((essay) => {
  return {
    html: templates.layout({
      body: templates.essay(essay),
      title: appendSiteTitle(essay.title),
      essays: essays
    }),
    ...essay
  }
})
const homepage = templates.layout({
  body: templates.home(intro),
  title: appendSiteTitle('Welcome'),
  essays: essays
})
const fourohfour = templates.layout({
  body: templates.fourohfour,
  title: appendSiteTitle('four oh four'),
  essays: essays
})

/* ok lets go */
const buildPath = './build/'
const buildDir = fs.existsSync(buildPath)

if (!buildDir) {
  fs.mkdirSync(buildPath)
} else {
  rmrf(buildPath)
  fs.mkdirSync(buildPath)
}

if (templates.style) {
  console.log('  writing css')
  fs.writeFileSync(buildPath + '/index.css', templates.style)
}

if (templates.js) {
  console.log('  writing js')
  fs.writeFileSync(buildPath + '/index.js', templates.js)
}

console.log('  writing homepage')
fs.writeFileSync(buildPath + '/index.html', homepage)

console.log('  writing 404')
fs.writeFileSync(buildPath + '/404.html', fourohfour)

console.log('  writing essay pages:')
essayPages.forEach((page, i) => {
  const dirname = page.slug
  console.log('  ' + (i + 1) + '.', dirname)
  fs.mkdirSync(buildPath + '/' + dirname)
  fs.writeFileSync(buildPath + '/' + dirname + '/index.html', page.html)
})

console.log('\nfinished in', Date.now() - startTime, 'ms')
