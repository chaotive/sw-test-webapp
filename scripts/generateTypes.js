const fs = require('fs')
const { compileFromFile } = require('json-schema-to-typescript')
const https = require('https')

function writeAndExecute(response) {
  const file = fs.createWriteStream('temp/planets.json')
  response.pipe(file)
  file.on('finish', () => file.close(compileSchema))
}

const compileSchema = () => compileFromFile('temp/planets.json')
  .then(ts => fs.writeFileSync('typings/swapi/planets.d.ts', ts))

fs.mkdir('temp', () => {
  https.get('https://swapi.co/api/planets/schema', writeAndExecute)
})
