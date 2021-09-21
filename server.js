const http = require('http')
const fs= require('fs')
const path = require('path')
const static = require('node-static')

const files = new static.Server(path.resolve(__dirname, './dist'), {})

const server = http.createServer((req, res) => {
    // Start a simple static server to serve static file located in 'dist'  
    req.addListener('end', () => {
        files.serve(req, res)        
    }).resume()
    
    // Read html5 template from static file.
    // if (req.url === '/' || req.url === '') {
    //     rs = fs.createReadStream(path.join(__dirname, 'index.html'), 'utf8') 
    //     rs.pipe(res).on('error', err => {
    //         if (err) {
    //             console.log(err)
    //             res.statusCodek = 500
    //             res.setHeader('Content-Type', 'text/plain')
    //             res.end(err.message)
    //         }
    //     })
    // }
})

const port = 3003
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})