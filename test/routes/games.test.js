'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const { build } = require('../helper')

test('games is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/games'
  })
  assert.equal(res.payload, 'this is a game')
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
