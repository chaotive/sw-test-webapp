const fs = require('fs')
const { compileFromFile } = require('json-schema-to-typescript')
const https = require('https')

const file = fs.createWriteStream('planets.json')
const request = https.get('https://swapi.co/api/planets/schema', writeAndExecute)

function writeAndExecute(response) {
    response.pipe(file)
    // // compile from file
    file.on('finish', function() {
        file.close(compileSchema)  // close() is async, call cb after close completes.
    })
}

function compileSchema() {
    compileFromFile('planets.json')
        .then(ts => fs.writeFileSync('planets.d.ts', ts))
}
