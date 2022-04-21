import { FastifyInstance } from 'fastify';
import { registerServer } from './app/config/server';

const bootstrap = async () => {
  const server = await registerServer();
  server.listen(4000);
};

bootstrap();
