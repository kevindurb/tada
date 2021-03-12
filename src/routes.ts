import { FastifyPluginAsync } from 'fastify';
import * as replyUtils from './utils/reply';

import { TodosController } from './controllers/TodosController';

export const routes: FastifyPluginAsync = async (app) => {
  app.get('/', replyUtils.replyRedirect('/todos'));

  app.get('/todos', TodosController.getList);
};
