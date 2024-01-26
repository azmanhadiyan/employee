-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2024 at 05:17 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `absensi`
--

CREATE TABLE `absensi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` bigint(20) UNSIGNED NOT NULL,
  `departement_id` bigint(20) UNSIGNED NOT NULL,
  `in` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `out` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `absensi`
--

INSERT INTO `absensi` (`id`, `employee_id`, `departement_id`, `in`, `out`, `status`, `date`, `created_at`, `updated_at`) VALUES
(24, 1, 1, '06:50', '16:15', 'Hadir', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(25, 3, 1, '07:50', '16:10', 'Terlambat', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(26, 4, 1, '06:15', '16:15', 'Hadir', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(27, 5, 2, '0', '0', 'Cuti', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(28, 6, 2, '06:26', '16:30', 'Hadir', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(29, 7, 2, '0', '0', 'Alfa', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(30, 8, 3, '0', '0', 'Cuti', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(31, 9, 3, '09:10', '16:10', 'Terlambat', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41'),
(32, 10, 3, '0', '0', 'Alfa', '2024-01-26', '2024-01-25 20:16:41', '2024-01-25 20:16:41');

-- --------------------------------------------------------

--
-- Table structure for table `departements`
--

CREATE TABLE `departements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kode_departement` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departements`
--

INSERT INTO `departements` (`id`, `name`, `kode_departement`, `created_at`, `updated_at`) VALUES
(1, 'DIGITAL', '001', '2024-01-25 14:50:25', '2024-01-25 14:50:25'),
(2, 'PPIC', '002', '2024-01-25 14:52:42', '2024-01-25 14:52:42'),
(3, 'WAREHOUSE', '003', '2024-01-25 14:53:26', '2024-01-25 14:53:26'),
(4, 'CUTTING', '004', '2024-01-25 14:53:26', '2024-01-25 18:39:00');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nik` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `departement_id` bigint(20) UNSIGNED NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entry_date` date NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `nik`, `name`, `address`, `departement_id`, `position`, `date_of_birth`, `gender`, `entry_date`, `status`, `created_at`, `updated_at`) VALUES
(1, '001', 'Azman Zakka Hadiyan', 'kopo', 1, 'Staff', '1996-08-08', 'Male', '1996-10-27', 'Permanent', '2024-01-25 18:18:27', '2024-01-25 18:18:27'),
(3, '002', 'Hadiyan', 'bandung', 1, 'Staff', '1996-11-14', 'Male', '2023-07-02', 'Permanent', '2024-01-26 01:53:46', '2024-01-26 01:53:51'),
(4, '003', 'Ade', 'buahbatu', 1, 'Staff', '1997-09-04', 'Male', '2023-02-06', 'Kontrak', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(5, '004', 'Rizky', 'buahbatu', 2, 'Leader', '1998-09-04', 'Male', '2023-02-06', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(6, '005', 'Riska', 'kopo', 2, 'Staff', '1999-09-04', 'Female', '2023-03-06', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(7, '006', 'Nur', 'kopo', 2, 'Staff', '1999-08-04', 'Female', '2023-10-06', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(8, '007', 'Anggraeni', 'kopo', 3, 'Leader', '1997-08-04', 'Female', '2022-10-06', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(9, '008', 'Resti', 'banjaran', 3, 'Staff', '1997-08-04', 'Female', '2023-12-06', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08'),
(10, '009', 'Fajar', 'Sukamenak', 3, 'Staff', '1999-08-04', 'Male', '2023-08-12', 'Permanent', '2024-01-26 01:54:08', '2024-01-26 01:54:08');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_01_25_124809_create_departements_table', 2),
(6, '2024_01_25_125118_create_employees_table', 2),
(7, '2024_01_25_131047_create_absensi_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','operator') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'My Admin', 'myadmin@gmail.com', NULL, '$2y$10$.OTZVOiA31oLtWiu1CqbpOEADc05FKCCql6h4q8R8gULPmD4SjTm6', 'admin', NULL, '2024-01-24 20:12:22', '2024-01-24 20:12:22'),
(2, 'My Operator', 'myoperator@gmail.com', NULL, '$2y$10$6ZCQLuk2Wm3/t3Z4GSv1CuUrQh53DVR8OywAppd0nV9nlOS/a53dC', 'operator', NULL, '2024-01-24 20:12:22', '2024-01-24 20:12:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absensi`
--
ALTER TABLE `absensi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `absensi_employee_id_foreign` (`employee_id`),
  ADD KEY `absensi_departement_id_foreign` (`departement_id`);

--
-- Indexes for table `departements`
--
ALTER TABLE `departements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employees_departement_id_foreign` (`departement_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absensi`
--
ALTER TABLE `absensi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `departements`
--
ALTER TABLE `departements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absensi`
--
ALTER TABLE `absensi`
  ADD CONSTRAINT `absensi_departement_id_foreign` FOREIGN KEY (`departement_id`) REFERENCES `departements` (`id`),
  ADD CONSTRAINT `absensi_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`);

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_departement_id_foreign` FOREIGN KEY (`departement_id`) REFERENCES `departements` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
