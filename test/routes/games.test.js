'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const { build } = require('../helper')

let games = [
    {id: '1', name: 'RuneScape'},
    {id: '2', name: 'New World'},
    {id: '3', name: 'Hades'},
]

test('games is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/games'
  })
  assert.equal(res.payload, JSON.stringify(games))
})

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     assert.equal(res.payload, 'this is an example')
//   })
// })
