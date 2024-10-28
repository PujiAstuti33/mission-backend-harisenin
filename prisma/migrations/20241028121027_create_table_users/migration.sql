-- CreateTable
CREATE TABLE `users` (
    `ID_User` INTEGER NOT NULL AUTO_INCREMENT,
    `Fullname` VARCHAR(100) NOT NULL,
    `Username` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Password` VARCHAR(100) NOT NULL,
    `Profile_Picture` VARCHAR(255) NULL,
    `Created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ID_User`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DaftarSaya` (
    `ID_Daftar` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_User` INTEGER NOT NULL,
    `ID_EpisodeMovie` INTEGER NOT NULL,
    `Tanggal_Ditambahkan` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID_Daftar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genre` (
    `ID_Genre` INTEGER NOT NULL AUTO_INCREMENT,
    `Nama_Genre` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`ID_Genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `series_film` (
    `ID_SeriesFilm` INTEGER NOT NULL AUTO_INCREMENT,
    `Judul` VARCHAR(255) NOT NULL,
    `Deskripsi` TEXT NOT NULL,
    `ID_Genre` INTEGER NOT NULL,

    PRIMARY KEY (`ID_SeriesFilm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EpisodeMovie` (
    `ID_EpisodeMovie` INTEGER NOT NULL AUTO_INCREMENT,
    `Judul` VARCHAR(191) NOT NULL,
    `Durasi` INTEGER NOT NULL,
    `Tanggal_Rilis` DATETIME(3) NOT NULL,
    `ID_SeriesFilm` INTEGER NOT NULL,

    PRIMARY KEY (`ID_EpisodeMovie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pakets` (
    `ID_Paket` INTEGER NOT NULL AUTO_INCREMENT,
    `Nama_Paket` VARCHAR(100) NOT NULL,
    `Harga_Paket` DOUBLE NOT NULL,
    `Jumlah_Akun` INTEGER NOT NULL,

    PRIMARY KEY (`ID_Paket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `ID_Order` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_User` INTEGER NOT NULL,
    `ID_Paket` INTEGER NOT NULL,
    `Tanggal_Order` DATETIME(3) NOT NULL,
    `Status_Order` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`ID_Order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pembayaran` (
    `ID_Pembayaran` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_User` INTEGER NOT NULL,
    `ID_Order` INTEGER NOT NULL,

    PRIMARY KEY (`ID_Pembayaran`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movies` (
    `ID_Movie` INTEGER NOT NULL AUTO_INCREMENT,
    `Judul` VARCHAR(255) NOT NULL,
    `Genre` VARCHAR(100) NOT NULL,
    `ReleaseYear` INTEGER NOT NULL,
    `Created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`ID_Movie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DaftarSaya` ADD CONSTRAINT `DaftarSaya_ID_User_fkey` FOREIGN KEY (`ID_User`) REFERENCES `users`(`ID_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DaftarSaya` ADD CONSTRAINT `DaftarSaya_ID_EpisodeMovie_fkey` FOREIGN KEY (`ID_EpisodeMovie`) REFERENCES `EpisodeMovie`(`ID_EpisodeMovie`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `series_film` ADD CONSTRAINT `series_film_ID_Genre_fkey` FOREIGN KEY (`ID_Genre`) REFERENCES `genre`(`ID_Genre`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EpisodeMovie` ADD CONSTRAINT `EpisodeMovie_ID_SeriesFilm_fkey` FOREIGN KEY (`ID_SeriesFilm`) REFERENCES `series_film`(`ID_SeriesFilm`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ID_User_fkey` FOREIGN KEY (`ID_User`) REFERENCES `users`(`ID_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ID_Paket_fkey` FOREIGN KEY (`ID_Paket`) REFERENCES `pakets`(`ID_Paket`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pembayaran` ADD CONSTRAINT `pembayaran_ID_User_fkey` FOREIGN KEY (`ID_User`) REFERENCES `users`(`ID_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pembayaran` ADD CONSTRAINT `pembayaran_ID_Order_fkey` FOREIGN KEY (`ID_Order`) REFERENCES `orders`(`ID_Order`) ON DELETE RESTRICT ON UPDATE CASCADE;
