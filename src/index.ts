import fastify from 'fastify';
import pov from 'point-of-view';
import pug from 'pug';
import knex from 'knex';
import path from 'path';
import apicache from 'apicache';
import fastifyExpress from 'fastify-express';

(async () => {
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
  });

  const app = fastify();

  await app.register(fastifyExpress);
  app.use(apicache.middleware('5 minutes'));

  app.register(pov, {
    engine: {
      pug,
    },
    root: path.join(__dirname, 'views'),
  })

  app.get('/', async (req, reply) => {
    console.log('cache miss')
    const items = await db('test').select('name');
    return reply.view('index.pug', { list: items });
  });

  app.listen(8000, (err, address) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Listening on ${address}`);
  })
})();
