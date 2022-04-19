import { prisma } from "../config/prisma";

export const getAllSpells = async () => {
  try {
    const spells = await prisma.spell.findMany();
    return spells;
  } catch (error) {
    console.error(error);
    throw {
      message: "There was an error getting Spells",
    };
  }
};
