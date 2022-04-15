import { FastifyInstance } from "fastify";

export interface FastifyRegistration {
  server: FastifyInstance;
  port: number | string;
}

export type RegisterFastifyInstance = () => Promise<FastifyRegistration>;

export async function bootstrap(
  registerServer: RegisterFastifyInstance
): Promise<void> {
  const { server, port } = await registerServer();
  try {
    await server.listen(port);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
