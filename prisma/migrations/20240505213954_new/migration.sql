/*
  Warnings:

  - You are about to drop the column `imgs` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "imgs",
ADD COLUMN     "src" TEXT NOT NULL DEFAULT '';
