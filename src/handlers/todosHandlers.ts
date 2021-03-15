import { RouteHandlerMethod, RouteOptions } from 'fastify';
import 'point-of-view';
import { App } from '../App';

export const handlers: RouteOptions[] = [
  {
    method: 'POST',
    url: '/todos',
    async handler() {},
  },
  {
    method: 'GET',
    url: '/todos',
    async handler(request, reply) {
      const todosService = App.getContainer().get('todosService');
      return reply.view('todos.pug', { todos: await todosService.getTodos() });
    },
  },
];
