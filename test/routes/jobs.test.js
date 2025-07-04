'use strict'

const { test } = require('node:test')
const assert = require('node:assert')
const { build } = require('../helper')

let job = [{"id":"1","title":"Separating Machine Operators","location":"Rogerton","description":"Ratione error quas ipsam nostrum consequuntur iure nam.","name":"Bins, Schuster and Jast","salary":"83064"}]


test('jobs show route active', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    method: 'GET',
    url: '/jobs/1'
  })
  t.assert.equal(res.payload, JSON.stringify(job))
})

test('jobs index route active', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    method: 'GET',
    url: '/jobs'
  })

  t.assert.strictEqual(res.statusCode, 200, 'returned status code 200');
})

