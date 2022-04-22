-- CreateEnum
CREATE TYPE "School" AS ENUM ('Abjuration', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation', 'Divination', 'Enchantment', 'Conjuration');

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "school" "School" NOT NULL,
    "level" INTEGER NOT NULL,
    "atHigherLevel" TEXT,
    "text" TEXT NOT NULL,
    "verbal" BOOLEAN NOT NULL,
    "somatic" BOOLEAN NOT NULL,
    "material" BOOLEAN NOT NULL,
    "cost" TEXT,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);
