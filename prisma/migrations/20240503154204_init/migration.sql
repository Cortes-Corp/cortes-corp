-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "beds" TEXT NOT NULL,
    "footage" TEXT NOT NULL,
    "baths" TEXT NOT NULL,
    "imgs" TEXT[],

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);
