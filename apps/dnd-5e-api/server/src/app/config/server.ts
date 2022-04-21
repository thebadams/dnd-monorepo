import fastify from 'fastify';

export const registerServer = async () => {
  const server = fastify({ logger: true });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server.get('/', async (_request, _reply) => {
    return 'Hello World';
  });

  return server;
};
