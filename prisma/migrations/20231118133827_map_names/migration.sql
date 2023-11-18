/*
  Warnings:

  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_client_id_fkey";

-- DropForeignKey
ALTER TABLE "employer" DROP CONSTRAINT "employer_work_id_fkey";

-- DropTable
DROP TABLE "Work";

-- CreateTable
CREATE TABLE "work" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "work_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work" ADD CONSTRAINT "work_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employer" ADD CONSTRAINT "employer_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
