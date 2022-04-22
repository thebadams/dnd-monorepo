import { Prisma, Spell } from '@dnd-monorepo/dnd-5e-api/prisma';
import { FastifyReply, FastifyRequest } from 'fastify';
import { request } from 'http';
import { findSpells, getAllSpells } from '../services/spell.service';

export const spellsHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    let spells: Spell[];
    if (request.query) {
      spells = await findSpells(request.query);
    } else {
      spells = await getAllSpells();
    }
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
