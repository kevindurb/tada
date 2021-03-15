import fastify, { FastifyInstance } from 'fastify';
import pov from 'point-of-view';
import fastifyFormBody from 'fastify-formbody';
import * as pug from 'pug';
import * as path from 'path';

import { Container } from './Container';
import { handlers } from './handlers';

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

  private static buildServer() {
    const server = fastify();
    server.register(pov, {
      engine: {
        pug,
      },
      root: path.join(__dirname, 'views'),
    });
    server.register(fastifyFormBody);

    server.register(handlers);

    return server;
  }

  static getServer() {
    if (!this.server) {
      this.server = this.buildServer();
    }
    return this.server;
  }
}
