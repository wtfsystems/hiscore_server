#!/usr/bin/env node
/**
 * @author Matthew Evans
 * @module wtfsystems/hiscore_server
 * @see README.md
 * @copyright MIT see LICENSE.md
 */

import tls from 'tls'
import fs from 'fs'
import mysql from 'mysql'

/**
 * SERVER SETTINGS OBJECT
 */
const settings = {
    port: 7050,

    serverOpts: {
        key: fs.readFileSync('private-key.pem'),
        cert: fs.readFileSync('client-cert.pem'),
        //rejectUnauthorized: false,
        ca: [ fs.readFileSync('server-csr.pem')]
    }
}

console.log(`Starting High Score Server`)
console.log(`Press Ctrl+C to exit`)

var server = tls.createServer(settings.serverOpts, (socket) => {
    socket.on('data', (data) => {
        console.log(data)
    })

    server.close(() => {
        //
    })
})

server.listen({ port: settings.port }, () => {
    console.log(`Listening at port: ${settings.port}`)
})
