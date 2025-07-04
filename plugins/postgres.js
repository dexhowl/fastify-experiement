'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to connect to our postgres database
 *
 * @see https://github.com/fastify/fastify-postgres
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/postgres'), {
    connectionString: process.env.DB_CONNECTION
    
  })
})
