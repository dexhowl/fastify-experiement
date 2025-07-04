'use strict'

const players = require('../../data/players');

module.exports = async function (fastify, opts) {
    // Index
  fastify.get('/', async function (request, reply) {

    return players
  });

    // Show
  fastify.get('/:id', async function (request, reply) {

    const {id} = request.params;

    const player = players.find((player) => {
        return player.id === id
        
    });

    return player
  });

}
