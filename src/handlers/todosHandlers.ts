import { FastifyPluginAsync } from 'fastify';
import 'point-of-view';
import { App } from '../App';
import * as TodoSchema from '../schemas/todo.json';
import { Todo as TodoType } from '../types/todo';

export const todosHandlers: FastifyPluginAsync = async (app) => {
  app.addSchema(TodoSchema);

  app.get('/', async (request, reply) => {
    const todosService = App.getContainer().get('todosService');
    return reply.view('todos.pug', { todos: await todosService.getTodos() });
  });

  app.post<{
    Body: TodoType;
  }>('/', { schema: { body: { $ref: 'todo' } } }, async (request, reply) => {
    const todosService = App.getContainer().get('todosService');
    await todosService.createTodo(request.body);
    return reply.redirect('/todos');
  });
};
