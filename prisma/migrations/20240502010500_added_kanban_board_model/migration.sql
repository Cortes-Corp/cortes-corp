-- CreateTable
CREATE TABLE "kanban_board" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "column" TEXT NOT NULL,

    CONSTRAINT "kanban_board_pkey" PRIMARY KEY ("id")
);
