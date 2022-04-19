import fastify from "fastify";
import { registerSpellRoutes } from "../routes/spell.routes";

export const registerServer = async () => {
  const server = fastify({ logger: true });
  const PORT = process.env.PORT || 3000;
  server.register(registerSpellRoutes);

  return {
    port: PORT,
    server,
  };
};
