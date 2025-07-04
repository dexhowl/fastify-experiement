'use strict'



module.exports = async function (fastify, opts) {
    const games = require('../../data/games');
  fastify.get('/', async function (request, reply) {
    return games
  })
}
