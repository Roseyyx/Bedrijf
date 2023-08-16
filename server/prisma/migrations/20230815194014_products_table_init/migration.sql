/*
  Warnings:

  - You are about to alter the column `options` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `options` JSON NULL;
