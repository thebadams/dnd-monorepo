import {
  PrismaClient,
  Prisma,
} from "../../../../node_modules/.prisma/@dnd-5e-api/client";
import { Spell } from "@thebadams/5e-srd-sdk";

enum Components {
  V = "V",
  S = "S",
  M = "M",
}

enum Levels {
  CANTRIP,
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
  SIXTH,
  SEVENTH,
  EIGHTH,
  NINTH,
}
interface SpellInfoShort {
  index: string;
  url: string;
  name: string;
}

enum Schools {
  ABJ = "Abjuration",
  EVO = "Evocation",
  CON = "Conjuration",
  NEC = "Necromancy",
  DIV = "Divination",
  TRANS = "Transmutation",
  ENCH = "Enchantment",
  ILL = "Illusion",
}

interface SpellInfoLong {
  _id: string;
  higher_level: string[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: Components[];
  material: string;
  ritual: boolean;
  concentration: boolean;
  casting_time: string;
  level: Levels;
  school: {
    name: Schools;
  };
  duration: string;
}
interface FindAllInterface {
  count: number;
  results: SpellInfoShort[];
}
const seed = async () => {
  const { results }: FindAllInterface = await Spell.FindAll();
  // console.log(spells);
  for (const spell of results) {
    const spellInfo: SpellInfoLong = await Spell.Find({ index: spell.index });
    const serializedSpellInfo: Prisma.SpellCreateInput = {
      name: spellInfo.name,
      level: "Cantrip", // TODO: implement logic to parse number provided by srd to string enum
      school: spellInfo.school.name,
      text: spellInfo.desc[0],
      atHigherLevels: spellInfo.higher_level[0],
      verbal: false, //TODO: implement  logic to parse booleans from components array
      somatic: false,
      material: false,
      cost: spellInfo.material,
      concentration: spellInfo.concentration,
      ritual: spellInfo.ritual,
    };
  }
};

seed();
