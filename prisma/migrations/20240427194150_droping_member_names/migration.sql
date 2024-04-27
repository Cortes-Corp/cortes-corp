/*
  Warnings:

  - You are about to drop the column `member_names` on the `chat_room` table. All the data in the column will be lost.
  - You are about to drop the `user_chat_room` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "chat_room" DROP COLUMN "member_names";

-- DropTable
DROP TABLE "user_chat_room";
