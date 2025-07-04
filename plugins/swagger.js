'use strict'

const fp = require('fastify-plugin')

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-swagger
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/swagger'), {
    swagger: {
        info: {title: 'games-api'}
    },
  })
  fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  },
  })
})
