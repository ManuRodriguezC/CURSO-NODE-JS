const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url == "/") {
        res.statuscode = 200
        res.end('Bienvenido a mi página de inicio')
    } else if (req.url == "/imagen-super-binita.png") {
        res.setHeader('Content-Type', 'image/png')

        fs.readFile('./fami.png', (err, data) => {
            if (err) {
                res.statuscode = 500
                res.end('<h1>500 Internal Server Error</1>')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else if (req.url == '/contacto') {
        res.statuscode = 200
        res.end('<h1>Contacto</h1>')
    } else {
        res.statuscode = 404
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})
