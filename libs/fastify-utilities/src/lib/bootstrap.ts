import { FastifyInstance } from 'fastify';

interface ServerRegistration {
  server: FastifyInstance;
  port: string | number;
}

export type RegisterServerFunction = () => Promise<ServerRegistration>;

export async function bootstrap(registerServer: RegisterServerFunction) {
  const { server, port } = await registerServer();
  try {
    server.listen(port);
    console.log(`Server Started On Port ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
