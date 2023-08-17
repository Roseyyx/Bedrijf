-- AlterTable
ALTER TABLE `order` ADD COLUMN `paymentStatusId` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `PaymentStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PaymentStatus_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_paymentStatusId_fkey` FOREIGN KEY (`paymentStatusId`) REFERENCES `PaymentStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
