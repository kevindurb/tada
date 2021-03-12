import { RouteHandlerMethod } from 'fastify';

export const replyRedirect = (
  location: string,
  code: number = 302,
): RouteHandlerMethod => async (request, reply) =>
  reply.redirect(code, location);
