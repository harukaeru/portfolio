const fs = require('fs-extra')

const ja = fs.readFileSync('./public/static/locales/ja/common.json', 'utf-8')
const jaOptimized = JSON.stringify(JSON.parse(ja))

fs.outputFileSync('./public/static/opti-locs/ja/common.json', jaOptimized)

const en = fs.readFileSync('./public/static/locales/en/common.json', 'utf-8')
const enOptimized = JSON.stringify(JSON.parse(en))

fs.outputFileSync('./public/static/opti-locs/en/common.json', enOptimized)
