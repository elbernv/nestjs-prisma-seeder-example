-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(1024) NOT NULL,
    "color" VARCHAR(1024) NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);
