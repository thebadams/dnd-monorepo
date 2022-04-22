import { FastifyPluginAsync } from 'fastify';
import { spellsHandler } from '../controllers/spell.controller';

const spellRoutes: FastifyPluginAsync = async (fastify, _options) => {
  fastify.get('/', spellsHandler);
};

export const registerSpellRoutes: FastifyPluginAsync = async (
  fastify,
  _options
) => {
  fastify.register(spellRoutes, { prefix: '/spells' });
};
