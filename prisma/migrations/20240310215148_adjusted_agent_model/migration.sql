/*
  Warnings:

  - You are about to drop the column `fullName` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Agent` table. All the data in the column will be lost.
  - Added the required column `cell` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `office` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "fullName",
DROP COLUMN "img",
ADD COLUMN     "cell" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "office" TEXT NOT NULL,
ADD COLUMN     "src" TEXT NOT NULL;
