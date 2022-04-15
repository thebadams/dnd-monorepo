import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return {
    message: "Hello World",
  };
});

server.listen(3000).then(() => console.log("Server Started On PORT 3000"));
