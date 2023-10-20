import { Prisma, PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

const main = async () => {
  const cars: Prisma.carCreateManyArgs = {
    data: [
      { id: 1, name: 'Toyota', color: 'Rojo' },
      { id: 2, name: 'BMW', color: 'Azul' },
    ],
    skipDuplicates: true,
  };

  await prismaClient.car.createMany(cars);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
