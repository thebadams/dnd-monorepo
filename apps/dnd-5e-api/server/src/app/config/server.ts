import { RegisterServerFunction } from '@dnd-monorepo/fastify-utilities';
import fastify from 'fastify';

export const registerServer: RegisterServerFunction = async () => {
  const server = fastify({ logger: true });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server.get('/', async (_request, _reply) => {
    return 'Hello World';
  });

  return {
    server,
    port: 4000,
  };
};
