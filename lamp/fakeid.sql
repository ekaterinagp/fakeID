-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2021 at 11:46 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fakeid`
--
CREATE DATABASE IF NOT EXISTS `fakeid` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fakeid`;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `district` varchar(50) NOT NULL,
  `street_building_name` varchar(50) NOT NULL,
  `post_code` varchar(4) NOT NULL,
  `street_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`address_id`, `district`, `street_building_name`, `post_code`, `street_name`) VALUES
(1, 'København N', '17', '2200', 'Lygten'),
(2, 'København N', '37', '2200', 'Lygten');

-- --------------------------------------------------------

--
-- Table structure for table `audit_user`
--

CREATE TABLE `audit_user` (
  `id` int(11) NOT NULL,
  `new_id` int(11) DEFAULT NULL,
  `new_name` varchar(50) DEFAULT NULL,
  `new_date_of_birth` varchar(6) DEFAULT NULL,
  `new_CVR` varchar(8) DEFAULT NULL,
  `new_address_id` int(11) DEFAULT NULL,
  `new_company_name` varchar(50) DEFAULT NULL,
  `new_CPR` varchar(10) DEFAULT NULL,
  `new_spouse_id` int(11) DEFAULT NULL,
  `new_marital_status_id` int(11) DEFAULT NULL,
  `new_gender_value` varchar(4) DEFAULT NULL,
  `new_serial_number` varchar(50) DEFAULT NULL,
  `old_id` int(11) DEFAULT NULL,
  `old_name` varchar(50) DEFAULT NULL,
  `old_date_of_birth` varchar(6) DEFAULT NULL,
  `old_CVR` varchar(9) DEFAULT NULL,
  `old_address_id` int(11) DEFAULT NULL,
  `old_company_name` varchar(50) DEFAULT NULL,
  `old_CPR` varchar(10) DEFAULT NULL,
  `old_spouse_id` int(11) DEFAULT NULL,
  `old_marital_status_id` int(11) DEFAULT NULL,
  `old_gender_value` varchar(4) DEFAULT NULL,
  `old_serial_number` varchar(50) DEFAULT NULL,
  `db_action` varchar(4) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `db_host` varchar(50) NOT NULL,
  `db_user` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `audit_user`
--

INSERT INTO `audit_user` (`id`, `new_id`, `new_name`, `new_date_of_birth`, `new_CVR`, `new_address_id`, `new_company_name`, `new_CPR`, `new_spouse_id`, `new_marital_status_id`, `new_gender_value`, `new_serial_number`, `old_id`, `old_name`, `old_date_of_birth`, `old_CVR`, `old_address_id`, `old_company_name`, `old_CPR`, `old_spouse_id`, `old_marital_status_id`, `old_gender_value`, `old_serial_number`, `db_action`, `timestamp`, `db_host`, `db_user`) VALUES
(1, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 16:23:35', 'root', 'localhost'),
(2, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 16:23:42', 'root', 'localhost'),
(3, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 16:23:57', 'root', 'localhost'),
(4, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 16:24:59', 'root', 'localhost'),
(5, 0, 'Mark Hamill', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, 0, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-27 18:30:49', 'root', 'localhost'),
(6, 0, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', NULL, 0, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-27 18:31:32', 'root', 'localhost'),
(7, 0, 'Urg Flurg', '090909', NULL, 1, NULL, '0909090001', NULL, 0, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-27 18:31:51', 'root', 'localhost'),
(8, 0, 'Lamp of Linux', '310590', NULL, 2, NULL, '3105900001', NULL, 8, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-27 18:33:27', 'root', 'localhost'),
(9, 4, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', NULL, 8, '0002', '', 4, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', NULL, 0, '0002', '', 'U', '2020-11-27 18:34:02', 'root', 'localhost'),
(10, 5, 'Urg Flurg', '090909', NULL, 1, NULL, '0909090001', NULL, 8, '0001', '', 5, 'Urg Flurg', '090909', NULL, 1, NULL, '0909090001', NULL, 0, '0001', '', 'U', '2020-11-27 18:34:16', 'root', 'localhost'),
(11, 3, 'Mark Hamill', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', 3, 'Mark Hamill', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, 0, '0001', '', 'U', '2020-11-27 18:35:31', 'root', 'localhost'),
(12, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 19:50:00', 'root', 'localhost'),
(13, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 19:50:06', 'root', 'localhost'),
(14, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 19:50:13', 'root', 'localhost'),
(15, 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 19:50:40', 'root', 'localhost'),
(16, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 19:52:06', 'root', 'localhost'),
(17, 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:01:18', 'root', 'localhost'),
(18, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:01:27', 'root', 'localhost'),
(19, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:01:40', 'root', 'localhost'),
(20, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:02:41', 'root', 'localhost'),
(21, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:04:18', 'root', 'localhost'),
(22, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:04:30', 'root', 'localhost'),
(23, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:05:29', 'root', 'localhost'),
(24, 1, 'kakaaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:11:32', 'root', 'localhost'),
(25, 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kakaaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:11:37', 'root', 'localhost'),
(26, 1, 'kaka', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:12:55', 'root', 'localhost'),
(27, 1, 'kakaaa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:14:32', 'root', 'localhost'),
(28, 1, 'kaka', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kakaaa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:14:41', 'root', 'localhost'),
(29, 1, 'kakaaa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kaka', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:14:45', 'root', 'localhost'),
(30, 1, 'kakaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kakaaa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:14:53', 'root', 'localhost'),
(31, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'kakaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:15:00', 'root', 'localhost'),
(32, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-27 20:18:49', 'root', 'localhost'),
(33, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 09:22:55', 'root', 'localhost'),
(34, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 09:23:04', 'root', 'localhost'),
(35, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 09:24:49', 'root', 'localhost'),
(36, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 09:27:08', 'root', 'localhost'),
(37, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 09:28:48', 'root', 'localhost'),
(38, 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 09:29:05', 'root', 'localhost'),
(39, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, '4aefa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 09:29:16', 'root', 'localhost'),
(40, 1, 'Lisaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 09:29:54', 'root', 'localhost'),
(41, 1, 'name', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisaaa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:32:49', 'root', 'localhost'),
(42, 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'name', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:33:53', 'root', 'localhost'),
(43, 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:39:47', 'root', 'localhost'),
(44, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:39:50', 'root', 'localhost'),
(45, 1, 'Lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:40:01', 'root', 'localhost'),
(46, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:49:12', 'root', 'localhost'),
(47, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:49:22', 'root', 'localhost'),
(48, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:49:40', 'root', 'localhost'),
(49, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:49:47', 'root', 'localhost'),
(50, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:49:58', 'root', 'localhost'),
(51, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:50:13', 'root', 'localhost'),
(52, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:50:25', 'root', 'localhost'),
(53, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:50:37', 'root', 'localhost'),
(54, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:50:46', 'root', 'localhost'),
(55, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:52:26', 'root', 'localhost'),
(56, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:52:33', 'root', 'localhost'),
(57, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:52:39', 'root', 'localhost'),
(58, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:52:43', 'root', 'localhost'),
(59, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:52:47', 'root', 'localhost'),
(60, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:52:52', 'root', 'localhost'),
(61, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:52:56', 'root', 'localhost'),
(62, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:53:05', 'root', 'localhost'),
(63, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:53:21', 'root', 'localhost'),
(64, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '0001', 'U', '2020-11-28 10:53:48', 'root', 'localhost'),
(65, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:54:16', 'root', 'localhost'),
(66, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 8, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 10:54:19', 'root', 'localhost'),
(67, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 8, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 8, '0002', '0001', 'U', '2020-11-28 10:54:32', 'root', 'localhost'),
(68, 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 8, '0002', '0001', 'U', '2020-11-28 10:54:44', 'root', 'localhost'),
(69, 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 11:05:26', 'root', 'localhost'),
(70, 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 11:05:56', 'root', 'localhost'),
(71, 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 8, '0002', '0001', 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 11:06:00', 'root', 'localhost'),
(72, 1, 'Lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 1, 'Lisa', '081290', NULL, 2, NULL, '0812900002', NULL, 8, '0002', '0001', 'U', '2020-11-28 11:07:34', 'root', 'localhost'),
(73, 1, 'Lisa Lalalaa', '081290', NULL, 2, NULL, '0812900002', NULL, 8, '0002', '0001', 1, 'Lisaa', '081290', NULL, 1, NULL, '0812900002', NULL, 1, '0002', '0001', 'U', '2020-11-28 11:07:46', 'root', 'localhost'),
(74, 1, 'Lisa Lalalaa', '081290', NULL, 2, NULL, '0812900002', 2, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 2, NULL, '0812900002', NULL, 8, '0002', '0001', 'U', '2020-11-30 14:25:07', 'root', 'localhost'),
(75, 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', NULL, 1, '0001', '0002', 'U', '2020-11-30 14:25:07', 'root', 'localhost'),
(76, 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 'U', '2020-11-30 14:42:25', 'root', 'localhost'),
(77, 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 'U', '2020-11-30 14:42:45', 'root', 'localhost'),
(78, 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 'U', '2020-11-30 14:42:57', 'root', 'localhost'),
(79, 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 2, 'Lars Lalala', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 'U', '2020-11-30 14:43:02', 'root', 'localhost'),
(80, 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 'U', '2020-11-30 14:43:06', 'root', 'localhost'),
(81, 0, 'Martin Smartin', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-30 14:43:29', 'root', 'localhost'),
(82, 0, 'Martin Smartin', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-30 14:43:30', 'root', 'localhost'),
(83, 0, 'Marfa Marta', '081075', '12345678', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-30 14:46:22', 'root', 'localhost'),
(84, 0, 'Marfa Marta', '081073', '12345678', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-11-30 14:46:55', 'root', 'localhost'),
(85, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 2, NULL, '0812900002', 2, 2, '0002', '0001', 'U', '2020-11-30 14:55:28', 'root', 'localhost'),
(86, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:56:49', 'root', 'localhost'),
(87, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:57:03', 'root', 'localhost'),
(88, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:57:35', 'root', 'localhost'),
(89, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:57:37', 'root', 'localhost'),
(90, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:57:59', 'root', 'localhost'),
(91, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-11-30 14:58:11', 'root', 'localhost'),
(92, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-01 09:04:21', 'root', 'localhost'),
(93, 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 0, 2, '0001', '0002', 'U', '2020-12-01 09:04:24', 'root', 'localhost'),
(95, 4, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 4, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', NULL, 8, '0002', '', 'U', '2020-12-01 10:06:00', 'root', 'localhost'),
(96, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '0001', 'U', '2020-12-01 10:51:19', 'root', 'localhost'),
(97, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-01 10:51:23', 'root', 'localhost'),
(98, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-01 10:51:42', 'root', 'localhost'),
(99, 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-01 10:52:17', 'root', 'localhost'),
(100, 0, 'Kali Kool', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-09 20:29:00', 'root', 'localhost'),
(101, 0, 'Karl Bretaprins', '121250', NULL, 2, NULL, '1212500001', NULL, 8, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-09 20:34:30', 'root', 'localhost'),
(102, 0, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-09 20:35:06', 'root', 'localhost'),
(103, 12, 'Karl Bretaprins', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 12, 'Karl Bretaprins', '121250', NULL, 2, NULL, '1212500001', NULL, 8, '0001', '', 'U', '2020-12-09 20:35:24', 'root', 'localhost'),
(104, 13, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', 12, 2, '0002', '', 13, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', NULL, 8, '0002', '', 'U', '2020-12-09 20:35:24', 'root', 'localhost'),
(105, 13, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 13, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', 12, 2, '0002', '', 'U', '2020-12-09 20:36:39', 'root', 'localhost'),
(106, 0, 'Tina Ipsen', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-18 12:58:57', 'root', 'localhost'),
(107, 0, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-22 13:58:15', 'root', 'localhost'),
(108, 1, 'Mary Trenter', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Lisa Lalalaa', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(109, 2, 'Mary Trenter', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 2, 'Lars Lalalaa', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(110, 3, 'Mary Trenter', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', 3, 'Mark Hamill', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(111, 4, 'Mary Trenter', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 4, 'Nicole Kidman', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(112, 5, 'Mary Trenter', '090909', NULL, 1, NULL, '0909090001', NULL, 8, '0001', '', 5, 'Urg Flurg', '090909', NULL, 1, NULL, '0909090001', NULL, 8, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(113, 6, 'Mary Trenter', '310590', NULL, 2, NULL, '3105900001', NULL, 8, '0001', '', 6, 'Lamp of Linux', '310590', NULL, 2, NULL, '3105900001', NULL, 8, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(114, 7, 'Mary Trenter', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 7, 'Martin Smartin', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(115, 8, 'Mary Trenter', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 8, 'Martin Smartin', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(116, 9, 'Mary Trenter', '081075', '12345678', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', 9, 'Marfa Marta', '081075', '12345678', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(117, 10, 'Mary Trenter', '081073', '12345678', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', 10, 'Marfa Marta', '081073', '12345678', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(118, 11, 'Mary Trenter', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 11, 'Kali Kool', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(119, 12, 'Mary Trenter', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 12, 'Karl Bretaprins', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(120, 13, 'Mary Trenter', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 13, 'Camilla Parker brjöls', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(121, 14, 'Mary Trenter', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 14, 'Tina Ipsen', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(122, 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 'U', '2020-12-22 13:59:12', 'root', 'localhost'),
(123, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 2, 'Mary Trenter', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 'U', '2020-12-22 13:59:49', 'root', 'localhost'),
(124, 3, 'Tim Robinson', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', 3, 'Mary Trenter', '310525', '12345678', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', 'U', '2020-12-22 13:59:59', 'root', 'localhost'),
(125, 4, 'Rose Valsdottir', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 4, 'Mary Trenter', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 'U', '2020-12-22 14:00:14', 'root', 'localhost'),
(126, 5, 'Charles Breta', '090909', NULL, 1, NULL, '0909090001', NULL, 8, '0001', '', 5, 'Mary Trenter', '090909', NULL, 1, NULL, '0909090001', NULL, 8, '0001', '', 'U', '2020-12-22 14:00:27', 'root', 'localhost'),
(127, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 1, 'Mary Trenter', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-22 14:00:40', 'root', 'localhost'),
(128, 6, 'Matt Kalson', '310590', NULL, 2, NULL, '3105900001', NULL, 8, '0001', '', 6, 'Mary Trenter', '310590', NULL, 2, NULL, '3105900001', NULL, 8, '0001', '', 'U', '2020-12-22 14:00:52', 'root', 'localhost'),
(129, 7, 'Lars Larson', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 7, 'Mary Trenter', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-22 14:00:58', 'root', 'localhost'),
(130, 8, 'Jonas Jonassen', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 8, 'Mary Trenter', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-22 14:01:04', 'root', 'localhost'),
(131, 9, 'Freya Hansen', '081075', '12345678', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', 9, 'Mary Trenter', '081075', '12345678', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', 'U', '2020-12-22 14:01:16', 'root', 'localhost'),
(132, 10, 'Ursula Olafsen', '081073', '12345678', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', 10, 'Mary Trenter', '081073', '12345678', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', 'U', '2020-12-22 14:01:34', 'root', 'localhost'),
(133, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 11, 'Mary Trenter', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 'U', '2020-12-22 14:01:40', 'root', 'localhost'),
(134, 12, 'Lea Roben', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 12, 'Mary Trenter', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 'U', '2020-12-22 14:01:47', 'root', 'localhost'),
(135, 12, 'Leon Roben', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 12, 'Lea Roben', '121250', NULL, 2, NULL, '1212500001', 13, 2, '0001', '', 'U', '2020-12-22 14:01:52', 'root', 'localhost'),
(136, 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 13, 'Mary Trenter', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 'U', '2020-12-22 14:02:03', 'root', 'localhost'),
(137, 14, 'Tina Quar', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 14, 'Mary Trenter', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 'U', '2020-12-22 14:02:20', 'root', 'localhost'),
(138, 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 'U', '2020-12-22 14:02:32', 'root', 'localhost'),
(139, 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 'U', '2020-12-22 14:16:39', 'root', 'localhost'),
(140, 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 15, 'Mary Trenter', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 'U', '2020-12-22 14:16:50', 'root', 'localhost'),
(141, 14, 'Trina Quarks', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 14, 'Tina Quar', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 'U', '2020-12-22 14:17:10', 'root', 'localhost'),
(142, NULL, 'Trina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:50:36', 'root', 'localhost'),
(143, NULL, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, 0, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:50:36', 'root', 'localhost'),
(144, NULL, 'Trina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:50:57', 'root', 'localhost'),
(145, NULL, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:50:57', 'root', 'localhost'),
(146, NULL, 'Simon Trent', '071256', NULL, 2, NULL, '0712560001', 15, 5, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:52:33', 'root', 'localhost'),
(147, NULL, 'Rose Lerso', '090909', NULL, 1, NULL, '0909090002', NULL, 8, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:52:33', 'root', 'localhost'),
(148, 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', 20, 8, '0002', '', 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', NULL, 8, '0002', '', 'U', '2020-12-28 09:52:46', 'root', 'localhost'),
(149, 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', 20, 5, '0002', '', 15, 'Mary Trent', '080890', NULL, 1, NULL, '0808900002', 20, 8, '0002', '', 'U', '2020-12-28 09:52:51', 'root', 'localhost'),
(150, NULL, 'Olaf Olafsen', '050678', '12345678', 1, 'EE A/S', '0506780001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:54:34', 'root', 'localhost'),
(151, NULL, 'Olive Hansen', '050825', NULL, 2, NULL, '0508250002', NULL, 3, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:54:34', 'root', 'localhost'),
(152, NULL, 'Fred Trusel', '070526', '12345678', 1, 'EE A/S', '0705260001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:55:59', 'root', 'localhost'),
(153, NULL, 'Ulrik Johanburg', '080760', NULL, 2, NULL, '0807600001', NULL, 8, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:55:59', 'root', 'localhost'),
(154, NULL, 'Karli Karlsen', '080777', '12345678', 2, 'EE A/S', '0807770002', NULL, NULL, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:57:35', 'root', 'localhost'),
(155, NULL, 'Freya Fnas', '140586', NULL, 1, NULL, '1405860002', 7, 2, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:57:35', 'root', 'localhost'),
(156, NULL, 'Karli Karlsen', '140586', NULL, 1, NULL, '1405860002', 7, 2, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:59:41', 'root', 'localhost'),
(157, NULL, 'Rose Lerso', '310460', '12345678', 2, 'EE A/S', '3104600002', NULL, NULL, '0002', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 09:59:41', 'root', 'localhost'),
(158, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 28, 'Karli Karlsen', '140586', NULL, 1, NULL, '1405860002', 7, 2, '0002', '', 'D', '2020-12-28 10:00:15', 'root', 'localhost'),
(159, 29, 'Mikaela Lerso', '310460', '12345678', 2, 'EE A/S', '3104600002', NULL, NULL, '0002', '', 29, 'Rose Lerso', '310460', '12345678', 2, 'EE A/S', '3104600002', NULL, NULL, '0002', '', 'U', '2020-12-28 10:00:26', 'root', 'localhost'),
(160, 7, 'Lars Larson', '090977', NULL, 2, NULL, '0909770001', NULL, 2, '0001', '', 7, 'Lars Larson', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-28 10:00:38', 'root', 'localhost'),
(161, 7, 'Lars Larson', '090977', NULL, 2, NULL, '0909770001', 27, 2, '0001', '', 7, 'Lars Larson', '090977', NULL, 2, NULL, '0909770001', NULL, 2, '0001', '', 'U', '2020-12-28 10:00:47', 'root', 'localhost'),
(162, NULL, 'Mikael Jonasson', '070699', '12345678', 2, 'EE A/S', '0706990001', NULL, NULL, '0001', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'I', '2020-12-28 10:01:28', 'root', 'localhost'),
(163, 17, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, 1, '0001', '', 17, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, 0, '0001', '', 'U', '2020-12-28 10:06:19', 'root', 'localhost'),
(164, 8, 'Jonas Jonassen', '090977', NULL, 2, NULL, '0909770001', NULL, 8, '0001', '', 8, 'Jonas Jonassen', '090977', NULL, 2, NULL, '0909770001', NULL, NULL, '0001', '', 'U', '2020-12-28 10:06:36', 'root', 'localhost'),
(165, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 'U', '2020-12-28 10:06:43', 'root', 'localhost'),
(166, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:06:45', 'root', 'localhost'),
(167, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:06:49', 'root', 'localhost'),
(168, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:06:51', 'root', 'localhost'),
(169, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:06:54', 'root', 'localhost'),
(170, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:07:00', 'root', 'localhost'),
(171, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, NULL, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:07:02', 'root', 'localhost'),
(172, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, NULL, '0002', '', 'U', '2020-12-28 10:07:11', 'root', 'localhost'),
(173, 14, 'Trina Quarks', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, NULL, '0002', '', 14, 'Trina Quarks', '081280', '12345678', 1, 'EE A/S', '0812800002', NULL, 8, '0002', '', 'U', '2020-12-28 10:07:14', 'root', 'localhost'),
(174, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:07:22', 'root', 'localhost'),
(175, 19, 'Walter Walt', '010550', '12345678', 1, 'EE A/S', '0105500001', NULL, NULL, '0001', '', 19, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, NULL, '0001', '', 'U', '2020-12-28 10:07:27', 'root', 'localhost'),
(176, 17, 'Walter Walt', '010550', '12345678', 1, 'EE A/S', '0105500001', NULL, 1, '0001', '', 17, 'Walter Walt', '010550', '12345678', 1, '010550', '0105500001', NULL, 1, '0001', '', 'U', '2020-12-28 10:07:36', 'root', 'localhost'),
(177, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:07:45', 'root', 'localhost'),
(178, 17, 'Walter Walt', '010550', '12345678', 1, 'EE A/S', '0105500001', NULL, NULL, '0001', '', 17, 'Walter Walt', '010550', '12345678', 1, 'EE A/S', '0105500001', NULL, 1, '0001', '', 'U', '2020-12-28 10:07:46', 'root', 'localhost'),
(179, 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 12, 3, '0002', '', 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 0, 3, '0002', '', 'U', '2020-12-28 10:37:43', 'root', 'localhost'),
(180, 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 12, 2, '0002', '', 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 12, 3, '0002', '', 'U', '2020-12-28 10:37:47', 'root', 'localhost'),
(181, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:22', 'root', 'localhost'),
(182, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:24', 'root', 'localhost'),
(183, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:26', 'root', 'localhost'),
(184, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:27', 'root', 'localhost'),
(185, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:28', 'root', 'localhost'),
(186, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:33', 'root', 'localhost'),
(187, 18, 'Martina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 18, 'Trina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 'U', '2020-12-28 10:41:34', 'root', 'localhost'),
(188, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:54', 'root', 'localhost'),
(189, 18, 'Martina Falk', '300389', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 18, 'Martina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 'U', '2020-12-28 10:41:55', 'root', 'localhost'),
(190, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:41:57', 'root', 'localhost'),
(191, 18, 'Martina Falk', '300389', NULL, 2, NULL, '3003890002', NULL, 8, '0002', '', 18, 'Martina Falk', '300389', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 'U', '2020-12-28 10:42:01', 'root', 'localhost'),
(192, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:42:06', 'root', 'localhost'),
(193, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:03', 'root', 'localhost'),
(194, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:04', 'root', 'localhost'),
(195, 16, 'Trina Falk', '081212', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 16, 'Trina Falk', '081299', NULL, 2, NULL, '0812990002', NULL, 8, '0002', '', 'U', '2020-12-28 10:43:07', 'root', 'localhost'),
(196, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:15', 'root', 'localhost'),
(197, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:24', 'root', 'localhost'),
(198, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '0001', 'U', '2020-12-28 10:43:26', 'root', 'localhost'),
(199, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:28', 'root', 'localhost'),
(200, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '0002', 'U', '2020-12-28 10:43:32', 'root', 'localhost'),
(201, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:34', 'root', 'localhost'),
(202, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:37', 'root', 'localhost'),
(203, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 0, 2, '0002', '', 'U', '2020-12-28 10:43:38', 'root', 'localhost'),
(204, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:41', 'root', 'localhost'),
(205, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:43:55', 'root', 'localhost'),
(206, 4, 'Rose Valsdottir', '081077', NULL, 2, NULL, '0810770002', NULL, 1, '0002', '', 4, 'Rose Valsdottir', '081077', NULL, 2, NULL, '0810770002', 0, 1, '0002', '', 'U', '2020-12-28 10:43:56', 'root', 'localhost'),
(207, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:46:16', 'root', 'localhost'),
(208, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:46:23', 'root', 'localhost'),
(209, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:46:31', 'root', 'localhost'),
(210, 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', 11, 'Marcy Jacobs', '091299', '12345678', 1, 'EE A/S', '0912990002', NULL, 0, '0002', '', 'U', '2020-12-28 10:46:34', 'root', 'localhost'),
(211, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', NULL, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2020-12-28 10:48:29', 'root', 'localhost'),
(212, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 'U', '2020-12-28 10:48:29', 'root', 'localhost'),
(213, 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', NULL, 2, '0002', '', 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 12, 2, '0002', '', 'U', '2020-12-28 10:50:12', 'root', 'localhost'),
(214, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', NULL, 2, '0002', '', 'U', '2020-12-28 11:04:03', 'root', 'localhost'),
(215, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', NULL, 2, '0001', '', 'U', '2020-12-28 11:04:06', 'root', 'localhost'),
(216, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', NULL, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2020-12-28 11:04:15', 'root', 'localhost'),
(217, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', NULL, 2, '0001', '', 'U', '2020-12-28 11:05:42', 'root', 'localhost'),
(218, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 'U', '2020-12-28 11:10:57', 'root', 'localhost'),
(219, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2020-12-28 11:10:57', 'root', 'localhost'),
(220, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2020-12-28 11:42:43', 'root', 'localhost'),
(221, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 'U', '2020-12-28 11:42:43', 'root', 'localhost'),
(222, 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', 12, 2, '0002', '', 13, 'Lea Groben', '060650', NULL, 2, NULL, '0606500002', NULL, 2, '0002', '', 'U', '2020-12-28 12:01:11', 'root', 'localhost'),
(223, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2021-01-03 15:25:03', 'root', 'localhost'),
(224, 1, 'Lola Ulrik', '081290', NULL, 2, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 'U', '2021-01-03 15:25:03', 'root', 'localhost'),
(225, 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 2, 'Jakob Sweiz', '181292', NULL, 1, NULL, '1812920001', 1, 2, '0001', '', 'U', '2021-01-03 15:25:13', 'root', 'localhost'),
(226, 1, 'Lola Ulrik', '081290', NULL, 1, NULL, '0812900002', 2, 2, '0002', '', 1, 'Lola Ulrik', '081290', NULL, 2, NULL, '0812900002', 2, 2, '0002', '', 'U', '2021-01-03 15:25:13', 'root', 'localhost'),
(227, 4, 'Rose Valiant', '081077', NULL, 2, NULL, '0810770002', NULL, 1, '0002', '', 4, 'Rose Valsdottir', '081077', NULL, 2, NULL, '0810770002', NULL, 1, '0002', '', 'U', '2021-01-05 15:57:20', 'root', 'localhost');

-- --------------------------------------------------------

--
-- Table structure for table `family_relation`
--

CREATE TABLE `family_relation` (
  `relation_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `family_relation`
--

INSERT INTO `family_relation` (`relation_id`, `parent_id`, `child_id`) VALUES
(1, 2, 16),
(2, 1, 16),
(3, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date_of_birth` varchar(6) NOT NULL,
  `address_id` int(11) NOT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `CPR` varchar(10) NOT NULL,
  `spouse_id` int(11) DEFAULT NULL,
  `marital_status_id` int(4) DEFAULT NULL,
  `gender_value` varchar(4) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `CVR` varchar(8) DEFAULT NULL
) ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `date_of_birth`, `address_id`, `company_name`, `CPR`, `spouse_id`, `marital_status_id`, `gender_value`, `serial_number`, `CVR`) VALUES
(1, 'Lola Ulrik', '081290', 1, NULL, '0812900002', 2, 2, '0002', '', NULL),
(2, 'Jakob Sweiz', '181292', 1, NULL, '1812920001', 1, 2, '0001', '', NULL),
(3, 'Tim Robinson', '310525', 1, 'EE A/S', '3105250001', NULL, NULL, '0001', '', '12345678'),
(4, 'Rose Valiant', '081077', 2, NULL, '0810770002', NULL, 1, '0002', '', NULL),
(5, 'Charles Breta', '090909', 1, NULL, '0909090001', NULL, 8, '0001', '', NULL),
(6, 'Matt Kalson', '310590', 2, NULL, '3105900001', NULL, 8, '0001', '', NULL),
(7, 'Lars Larson', '090977', 2, NULL, '0909770001', 27, 2, '0001', '', NULL),
(8, 'Jonas Jonassen', '090977', 2, NULL, '0909770001', NULL, 8, '0001', '', NULL),
(9, 'Freya Hansen', '081075', 1, 'EE A/S', '0810750002', NULL, NULL, '0002', '', '12345678'),
(10, 'Ursula Olafsen', '081073', 2, 'EE A/S', '0810730002', NULL, NULL, '0002', '', '12345678'),
(11, 'Marcy Jacobs', '091299', 1, 'EE A/S', '0912990002', NULL, 8, '0002', '', '12345678'),
(12, 'Leon Roben', '121250', 2, NULL, '1212500001', 13, 2, '0001', '', NULL),
(13, 'Lea Groben', '060650', 2, NULL, '0606500002', 12, 2, '0002', '', NULL),
(14, 'Trina Quarks', '081280', 1, 'EE A/S', '0812800002', NULL, NULL, '0002', '', '12345678'),
(15, 'Mary Trent', '080890', 1, NULL, '0808900002', 20, 5, '0002', '', NULL),
(16, 'Trina Falk', '081212', 2, NULL, '0812990002', NULL, 8, '0002', '', NULL),
(17, 'Walter Walt', '010550', 1, 'EE A/S', '0105500001', NULL, NULL, '0001', '', '12345678'),
(18, 'Martina Falk', '300389', 2, NULL, '3003890002', NULL, 8, '0002', '', NULL),
(19, 'Walter Walt', '010550', 1, 'EE A/S', '0105500001', NULL, NULL, '0001', '', '12345678'),
(20, 'Simon Trent', '071256', 2, NULL, '0712560001', 15, 5, '0001', '', NULL),
(21, 'Rose Lerso', '090909', 1, NULL, '0909090002', NULL, 8, '0002', '', NULL),
(22, 'Olaf Olafsen', '050678', 1, 'EE A/S', '0506780001', NULL, NULL, '0001', '', '12345678'),
(23, 'Olive Hansen', '050825', 2, NULL, '0508250002', NULL, 3, '0002', '', NULL),
(24, 'Fred Trusel', '070526', 1, 'EE A/S', '0705260001', NULL, NULL, '0001', '', '12345678'),
(25, 'Ulrik Johanburg', '080760', 2, NULL, '0807600001', NULL, 8, '0001', '', NULL),
(26, 'Karli Karlsen', '080777', 2, 'EE A/S', '0807770002', NULL, NULL, '0002', '', '12345678'),
(27, 'Freya Fnas', '140586', 1, NULL, '1405860002', 7, 2, '0002', '', NULL),
(29, 'Mikaela Lerso', '310460', 2, 'EE A/S', '3104600002', NULL, NULL, '0002', '', '12345678'),
(30, 'Mikael Jonasson', '070699', 2, 'EE A/S', '0706990001', NULL, NULL, '0001', '', '12345678');

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `trg_delete_user` BEFORE DELETE ON `user` FOR EACH ROW BEGIN
	INSERT INTO audit_user 
    	(old_id, 
         old_name,
         old_date_of_birth,
         old_CVR,
         old_address_id,
         old_company_name,
         old_CPR,
         old_spouse_id,
         old_marital_status_id,
         old_gender_value,
         old_serial_number,
         db_action,
         db_host,
         db_user
        )
     VALUES (OLD.id,
             OLD.name,
             OLD.date_of_birth, 
             OLD.CVR,
             OLD.address_id,
             OLD.company_name,
             OLD.CPR,
             OLD.spouse_id,
             OLD.marital_status_id,
             OLD.gender_value,
             OLD.serial_number,
             'D', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_insert_user` BEFORE INSERT ON `user` FOR EACH ROW BEGIN
	INSERT INTO audit_user 
    	(new_id, 
         new_name,
         new_date_of_birth,
         new_CVR,
         new_address_id,
         new_company_name,
         new_CPR,
         new_spouse_id,
         new_marital_status_id,
         new_gender_value,
         new_serial_number,
         db_action,
         db_host,
         db_user
        )
     VALUES (NEW.id,
             NEW.name,
             NEW.date_of_birth, 
             NEW.CVR,
             NEW.address_id,
             NEW.company_name,
             NEW.CPR,
             NEW.spouse_id,
             NEW.marital_status_id,
             NEW.gender_value,
             NEW.serial_number,
             'I', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_update_user` BEFORE UPDATE ON `user` FOR EACH ROW BEGIN
	INSERT INTO audit_user 
        (old_id, 
        old_name,
        old_date_of_birth,
        old_CVR,
        old_address_id,
        old_company_name,
        old_CPR,
        old_spouse_id,
        old_marital_status_id,
        old_gender_value,
        old_serial_number,
        new_id, 
         new_name,
         new_date_of_birth,
         new_CVR,
         new_address_id,
         new_company_name,
         new_CPR,
         new_spouse_id,
         new_marital_status_id,
         new_gender_value,
         new_serial_number,
         db_action,
         db_host,
         db_user
        )
     VALUES (
        OLD.id,
        OLD.name,
        OLD.date_of_birth, 
        OLD.CVR,
        OLD.address_id,
        OLD.company_name,
        OLD.CPR,
        OLD.spouse_id,
        OLD.marital_status_id,
        OLD.gender_value,
        OLD.serial_number,
            NEW.id,
             NEW.name,
             NEW.date_of_birth, 
             NEW.CVR,
             NEW.address_id,
             NEW.company_name,
             NEW.CPR,
             NEW.spouse_id,
             NEW.marital_status_id,
             NEW.gender_value,
             NEW.serial_number,
             'U', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `audit_user`
--
ALTER TABLE `audit_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_relation`
--
ALTER TABLE `family_relation`
  ADD PRIMARY KEY (`relation_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_id` (`address_id`),
  ADD KEY `marital_status_id` (`marital_status_id`),
  ADD KEY `spouse_id` (`spouse_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `audit_user`
--
ALTER TABLE `audit_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=228;

--
-- AUTO_INCREMENT for table `family_relation`
--
ALTER TABLE `family_relation`
  MODIFY `relation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
