-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2020 at 01:04 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

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

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `district` varchar(50) NOT NULL,
  `street_building_name` varchar(50) NOT NULL,
  `post_code` varchar(4) NOT NULL,
  `street_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `district`, `street_building_name`, `post_code`, `street_name`) VALUES
(1, 'København N', '17', '2200', 'Lygten'),
(2, 'København N', '17', '2200', 'Lygten'),
(3, 'København N', '37', '2200', 'Lygten');

-- --------------------------------------------------------

--
-- Table structure for table `family_relation`
--

CREATE TABLE `family_relation` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `martial_status`
--

CREATE TABLE `martial_status` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `martial_status`
--

INSERT INTO `martial_status` (`id`, `name`) VALUES
(1, 'married'),
(2, 'divorced'),
(6, 'widowed'),
(8, 'single');

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
  `marital_status_id` int(4) NOT NULL,
  `gender_value` varchar(4) NOT NULL,
  `serial_number` varchar(50) NOT NULL,
  `CVR` varchar(8) DEFAULT NULL
) ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `date_of_birth`, `address_id`, `company_name`, `CPR`, `spouse_id`, `marital_status_id`, `gender_value`, `serial_number`, `CVR`) VALUES
(5, 'Lisa Lalala', '081290', 1, NULL, '0812900002', NULL, 8, '0002', '23wefsdvsdg', NULL),
(8, 'Lars Lalala', '181292', 1, NULL, '1812920001', NULL, 8, '0002', '23wefddsdvsdg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_family_realation`
--

CREATE TABLE `user_family_realation` (
  `user_id` int(11) NOT NULL,
  `family_relation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_relation`
--
ALTER TABLE `family_relation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `martial_status`
--
ALTER TABLE `martial_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `serial_number` (`serial_number`),
  ADD KEY `address_id` (`address_id`),
  ADD KEY `marital_status_id` (`marital_status_id`),
  ADD KEY `spouse_id` (`spouse_id`);

--
-- Indexes for table `user_family_realation`
--
ALTER TABLE `user_family_realation`
  ADD PRIMARY KEY (`user_id`,`family_relation_id`),
  ADD KEY `family_relation_id` (`family_relation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `family_relation`
--
ALTER TABLE `family_relation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `martial_status`
--
ALTER TABLE `martial_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`marital_status_id`) REFERENCES `martial_status` (`id`),
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`spouse_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user_family_realation`
--
ALTER TABLE `user_family_realation`
  ADD CONSTRAINT `user_family_realation_ibfk_1` FOREIGN KEY (`family_relation_id`) REFERENCES `family_relation` (`id`),
  ADD CONSTRAINT `user_family_realation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
