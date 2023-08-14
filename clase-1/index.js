const os = require('node:os')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
//console.log('CPUs del sistema operativo', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('time', os.uptime()/ 60 / 60)
