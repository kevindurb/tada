import { RouteHandlerMethod } from 'fastify';

export class TodosController {
  static getList: RouteHandlerMethod = async (request) => {
    return 'hello';
  };
}
