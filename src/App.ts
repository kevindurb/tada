import fastify, { FastifyInstance } from 'fastify';
import pov from 'point-of-view';
import * as pug from 'pug';
import * as path from 'path';

import { Container } from './Container';
import { routes } from './routes';

import { TodosService } from './services/TodosService';
import { Database } from './services/Database';

const containerDefinition = {
  todosService: () => new TodosService(),
  database: () => new Database(),
};

export class App {
  private static server?: FastifyInstance;
  private static container?: Container<typeof containerDefinition>;

  static getContainer() {
    if (!this.container) {
      this.container = new Container(containerDefinition);
    }
    return this.container;
  }

  static getServer() {
    if (!this.server) {
      this.server = fastify();
      this.server.register(pov, {
        engine: {
          pug,
        },
        root: path.join(__dirname, 'views'),
      });

      this.server.register(routes);
    }
    return this.server;
  }
}
