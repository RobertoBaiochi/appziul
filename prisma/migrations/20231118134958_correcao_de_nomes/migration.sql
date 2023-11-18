/*
  Warnings:

  - You are about to drop the `employer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `scheduled_date` to the `visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employer" DROP CONSTRAINT "employer_work_id_fkey";

-- AlterTable
ALTER TABLE "visit" ADD COLUMN     "scheduled_date" TEXT NOT NULL;

-- DropTable
DROP TABLE "employer";

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "name_employee" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "worked_today" BOOLEAN NOT NULL DEFAULT false,
    "dayly_value" TEXT NOT NULL,
    "work_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
