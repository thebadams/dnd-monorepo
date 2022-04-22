import { FastifyReply, FastifyRequest } from 'fastify';
import { getAllSpells } from '../services/spell.service';

export const getAllSpellsHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const spells = await getAllSpells();
    if (spells.length === 0) {
      reply.statusCode = 404;
      return {
        message: 'No Spells Found',
      };
    } else {
      reply.statusCode = 200;
      return spells;
    }
  } catch (error) {
    reply.statusCode = 500;
    return error;
  }
};
