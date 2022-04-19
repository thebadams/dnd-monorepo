import { prisma } from "../config/prisma";

export const getAllSpells = async () => {
  try {
    const spells = await prisma.spell.findMany();
    return spells;
  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: error.message,
        error,
      };
    }
  }
};
