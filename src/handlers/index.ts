import { FastifyPluginAsync } from 'fastify';
import * as replyUtils from '../utils/reply';

import { todosHandlers } from './todosHandlers';

export const handlers: FastifyPluginAsync = async (app) => {
  app.get('/', replyUtils.replyRedirect('/todos'));

  app.register(todosHandlers, { prefix: '/todos' });
};
