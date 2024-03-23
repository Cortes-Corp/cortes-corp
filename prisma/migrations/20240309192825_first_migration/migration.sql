-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);
