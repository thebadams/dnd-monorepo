import { PrismaClient } from '@dnd-monorepo/dnd-5e-api/prisma';

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: 'Brian',
    email: 'bpeteradams@gmail.com',
  },
});
