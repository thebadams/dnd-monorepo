-- CreateEnum
CREATE TYPE "School" AS ENUM ('Abjuration', 'Evocation', 'Illusion', 'Divination', 'Transmutation', 'Necromancy', 'Conjuration', 'Enchantment');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Cantrip', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth');

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "school" "School" NOT NULL,
    "text" TEXT NOT NULL,
    "atHigherLevels" TEXT,
    "verbal" BOOLEAN NOT NULL,
    "somatic" BOOLEAN NOT NULL,
    "material" BOOLEAN NOT NULL,
    "cost" TEXT,
    "concentration" BOOLEAN NOT NULL,
    "ritual" BOOLEAN NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");
