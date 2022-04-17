import { registerServer } from "../src/config/server";
import { expect } from "chai";
import fastify, { FastifyInstance } from "fastify";

let server: FastifyInstance;
before("All", async function () {
  const fastifyRegistration = await registerServer();
  server = fastifyRegistration.server;
  console.log(server);
});

describe("Server", function () {
  it("First Test", function () {
    expect("test").to.equal("test");
  });
});
