import fastify from "fastify";

export const registerServer = async () => {
  const server = fastify({ logger: true });
  const PORT = process.env.PORT || 3000;
  server.get("/", async (request, reply) => {
    return {
      message: "Hello World",
    };
  });

  server.get("/greeting", async (request, reply) => {
    return {
      message: "Hello There, General Kenobi",
    };
  });

  return {
    port: PORT,
    server,
  };
};
