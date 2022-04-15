import { FastifyInstance } from "fastify";
import { registerServer } from "./config/server";
import { bootstrap } from "@utilities/fastify";

// const bootstrap = async (
//   registerServer: () => Promise<{
//     PORT: number | string;
//     server: FastifyInstance;
//   }>
// ) => {
//   const { server, PORT } = await registerServer();

//   try {
//     await server.listen(PORT);
//   } catch (error) {
//     server.log.error(error);
//   }
// };

bootstrap(registerServer);
