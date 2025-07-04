'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins expose our environment variables to the rest of the application
 *
 * @see https://github.com/fastify/fastify-env
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/env'), {
    schema: {
        type: 'object',
        required: [ 'PORT', 'DB_CONNECTION' ],
        properties: {
            PORT: {
              type: 'string',
              default: 3000 
            },
            DB_CONNECTION: {
              type: 'string',
            }
        }
    },
  })
})
