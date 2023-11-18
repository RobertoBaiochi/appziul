/*
  Warnings:

  - You are about to drop the column `visit_id` on the `Work` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_visit_id_fkey";

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "visit_id";

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
