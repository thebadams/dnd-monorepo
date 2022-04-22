import { prisma } from '../config/prisma';
import { Prisma } from '@dnd-monorepo/dnd-5e-api/prisma';

export async function getAllSpells() {
  try {
    const spells = await prisma.spell.findMany({});
    return spells;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
}

export async function findSpells(findSpellsOptions: Prisma.SpellWhereInput) {
  try {
    const spells = await prisma.spell.findMany({
      where: findSpellsOptions,
    });
    return spells;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
}
