import { PrismaClient } from "../../../../node_modules/.prisma/@dnd-5e-api/client";
import { Spell } from "@thebadams/5e-srd-sdk";
const seed = async () => {
  const spells = await Spell.FindAll();
  console.log(spells);
};

seed();
