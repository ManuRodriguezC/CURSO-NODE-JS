const { Resolver } = require('node:dns')
const net = require('node:net')

function findAvailablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.closet(() => {
                Resolver(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolver(port))
            } else {
                reject(err)
            }
        })
    })
}