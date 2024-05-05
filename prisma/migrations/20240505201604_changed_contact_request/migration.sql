/*
  Warnings:

  - You are about to drop the column `column` on the `contact_request` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `contact_request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contact_request" DROP COLUMN "column",
DROP COLUMN "title";
