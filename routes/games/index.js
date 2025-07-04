'use strict'

const games = require('../../data/games');

module.exports = async function (fastify, opts) {
    // Index
  fastify.get('/', async function (request, reply) {

    return games
  });

    // Show
  fastify.get('/:id', async function (request, reply) {

    const {id} = request.params;

    const game = games.find((game) => {
        return game.id === id
        
    });

    return game
  });

}
