import { FastifyPluginAsync } from 'fastify';
import * as replyUtils from './utils/reply';

import { handlers as todosHandlers } from './handlers/todosHandlers';

const handlers = [...todosHandlers];

export const routes: FastifyPluginAsync = async (app) => {
  app.get('/', replyUtils.replyRedirect('/todos'));

  handlers.forEach((handler) => {
    app.route(handler);
  });
};
