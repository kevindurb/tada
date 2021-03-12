import fastify, { FastifyInstance } from 'fastify';
import pov from 'point-of-view';
import * as pug from 'pug';
import * as path from 'path';

import { Container } from './Container';
import { routes } from './routes';

import { TodosService } from './services/TodosService';
import { Database } from './services/Database';
import { Environment } from './utils/Environment';

const containerDefinition = {
  todosService: () => new TodosService(),
  database: () => new Database(),
};

export class App {
  private server: FastifyInstance;
  container: Container<typeof containerDefinition>;

  constructor() {
    this.container = new Container(containerDefinition);
    this.server = fastify();
  }

  async boot() {
    this.server.register(pov, {
      engine: {
        pug,
      },
      root: path.join(__dirname, 'views'),
    });

    this.server.register(routes);

    this.server.listen(Environment.getPort(), (err, address) => {
      if (err) {
        return console.error(err);
      }

      console.log(`Listening on ${address}`);
    });
  }
}
