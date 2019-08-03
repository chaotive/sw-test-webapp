const fs = require('fs')
const { compileFromFile } = require('json-schema-to-typescript')
const https = require('https')

function writeAndExecute(response, schemaName) {
  const file = fs.createWriteStream('temp/' + schemaName + '.json')
  response.pipe(file)
  file.on('finish', () => file.close(() => compileSchema(schemaName)))
}

const compileSchema = schemaName => compileFromFile('temp/' + schemaName + '.json')
  .then(ts => fs.writeFileSync('typings/swapi/' + schemaName + '.d.ts', ts))

const generate = schemaName => https.get('https://swapi.co/api/' + schemaName + '/schema', response =>
  writeAndExecute(response, schemaName)
)

fs.mkdir('temp', () => {
  generate('planets')
  generate('starships')
})
