/*
  Warnings:

  - You are about to drop the column `Description` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT;
