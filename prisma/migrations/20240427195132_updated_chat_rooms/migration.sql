-- AlterTable
ALTER TABLE "chat_room" ADD COLUMN     "last_commented_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;
