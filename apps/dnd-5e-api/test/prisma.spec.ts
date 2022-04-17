import { PrismaClient } from "@dnd-5e-api/prisma";
import { expect } from "chai";
import { prisma } from "../src/config/prisma";

describe("Prisma", function () {
  it("Should Be An Instance of PrismaClient", function () {
    expect(prisma).to.be.instanceOf(PrismaClient);
  });

  it("Should Have A spell Property", function () {
    expect(prisma).to.haveOwnProperty("spell");
  });
});
