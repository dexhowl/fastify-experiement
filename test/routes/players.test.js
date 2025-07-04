'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const { build } = require('../helper')

let players = [
    {id: '1', name: 'Shotzzy'},
    {id: '2', name: 'Dashy'},
    {id: '3', name: 'Mercules'},
]


test('players route is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/players'
  })
  assert.equal(res.payload, JSON.stringify(players))
})

