'use strict'



module.exports = async function (fastify, opts) {
    // Index
  fastify.get('/', async function (request, reply) {
        const client = await fastify.pg.connect();

        try {
            const { rows } = await client.query('SELECT id, title, company, description FROM job_listings')
            // Note: avoid doing expensive computation here, this will block releasing the client
            return rows
        } finally {
            // Release the client immediately after query resolves, or upon error
            client.release()
        }
  });

    // Show
  fastify.get('/:id', async function (request, reply) {
    const client = await fastify.pg.connect();
        try {
            const { rows } = await client.query('SELECT job.id, job.title, job.location, job.description, emp.name, job.salary  FROM job_listings job JOIN employers emp on job.company = emp.id::varchar WHERE job.id=$1', [request.params.id])
            // Note: avoid doing expensive computation here, this will block releasing the client
            return rows;
        } finally {
            // Release the client immediately after query resolves, or upon error
            client.release();
        }
  });

}
