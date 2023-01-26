import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log('Server on port ${3000}')