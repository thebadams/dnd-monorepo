import { FastifyReply, FastifyRequest, RouteHandlerMethod } from "fastify";
import { getAllSpells } from "../services/spell.service";

export const getAllSpellsHandler: RouteHandlerMethod = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const spells = await getAllSpells();
    if (spells && spells.length === 0) {
      reply.statusCode = 404;
      return {
        message: "No Spells Found",
      };
    } else if (spells && spells.length >= 1) {
      reply.statusCode = 200;
      return {
        spells,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      reply.statusCode = 500;

      return {
        message: error.message,
      };
    }
  }
};
