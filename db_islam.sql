-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 05 Feb 2022 pada 11.03
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_islam`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `community`
--

CREATE TABLE `community` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `community_discussion`
--

CREATE TABLE `community_discussion` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `content` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `community_member`
--

CREATE TABLE `community_member` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `knowledge`
--

CREATE TABLE `knowledge` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `slug` text NOT NULL,
  `description` text NOT NULL,
  `thumbnail` text NOT NULL,
  `type` set('article','video','mp3','') NOT NULL,
  `date_update` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `knowledge_category`
--

CREATE TABLE `knowledge_category` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `slug` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `slug` text DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`) VALUES
(1, 'arifhendrap87@gmail.com', 'asdasdasfsd', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `worship_additional`
--

CREATE TABLE `worship_additional` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `worship_additional`
--

INSERT INTO `worship_additional` (`id`, `name`, `slug`, `description`) VALUES
(1, 'sholat', 'sholat', ''),
(2, 'alquran', 'alquran', ''),
(3, 'sedekah', 'sedekah', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `worship_additional_activity`
--

CREATE TABLE `worship_additional_activity` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_worship_additional` int(11) NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `worship_main`
--

CREATE TABLE `worship_main` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `worship_main`
--

INSERT INTO `worship_main` (`id`, `name`, `slug`, `description`) VALUES
(1, 'sholat', 'sholat', ''),
(2, 'alquran', 'alquran', ''),
(3, 'sedekah', 'sedekah', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `worship_main_activity`
--

CREATE TABLE `worship_main_activity` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_worship` int(11) NOT NULL,
  `data` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `worship_main_activity`
--

INSERT INTO `worship_main_activity` (`id`, `id_user`, `id_worship`, `data`) VALUES
(1, 1, 1, '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `community`
--
ALTER TABLE `community`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `community_discussion`
--
ALTER TABLE `community_discussion`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `community_member`
--
ALTER TABLE `community_member`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `knowledge`
--
ALTER TABLE `knowledge`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `knowledge_category`
--
ALTER TABLE `knowledge_category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `worship_additional`
--
ALTER TABLE `worship_additional`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `worship_additional_activity`
--
ALTER TABLE `worship_additional_activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_worship_additional` (`id_worship_additional`);

--
-- Indeks untuk tabel `worship_main`
--
ALTER TABLE `worship_main`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `worship_main_activity`
--
ALTER TABLE `worship_main_activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_worship` (`id_worship`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `community`
--
ALTER TABLE `community`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `community_discussion`
--
ALTER TABLE `community_discussion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `community_member`
--
ALTER TABLE `community_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `knowledge`
--
ALTER TABLE `knowledge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `knowledge_category`
--
ALTER TABLE `knowledge_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `worship_additional`
--
ALTER TABLE `worship_additional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `worship_additional_activity`
--
ALTER TABLE `worship_additional_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `worship_main`
--
ALTER TABLE `worship_main`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `worship_main_activity`
--
ALTER TABLE `worship_main_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `worship_additional_activity`
--
ALTER TABLE `worship_additional_activity`
  ADD CONSTRAINT `worship_additional_activity_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `worship_additional_activity_ibfk_2` FOREIGN KEY (`id_worship_additional`) REFERENCES `worship_additional` (`id`);

--
-- Ketidakleluasaan untuk tabel `worship_main_activity`
--
ALTER TABLE `worship_main_activity`
  ADD CONSTRAINT `worship_main_activity_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `worship_main_activity_ibfk_2` FOREIGN KEY (`id_worship`) REFERENCES `worship_main` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
