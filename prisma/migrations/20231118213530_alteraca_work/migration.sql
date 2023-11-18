/*
  Warnings:

  - Added the required column `budget` to the `work` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `work` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduled_date` to the `work` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "work" ADD COLUMN     "budget" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "scheduled_date" TEXT NOT NULL;
