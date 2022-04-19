import { FastifyPluginAsync } from "fastify";
import { getAllSpellsHandler } from "../handlers/spell.handler";

const spellRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/", getAllSpellsHandler);
};

export const registerSpellRoutes: FastifyPluginAsync = async (
  fastify,
  options
) => {
  fastify.register(spellRoutes, { prefix: "/spells" });
};
