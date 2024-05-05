-- AlterTable
ALTER TABLE "contact_request" ADD COLUMN     "claimed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "claimed_by" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "column" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '';
