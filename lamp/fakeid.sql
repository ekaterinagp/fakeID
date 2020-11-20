-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2020 at 02:05 PM
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
-- Database: `fakeidd`
--
-- DROP DATABASE IF EXISTS `fakeid`;
CREATE DATABASE IF NOT EXISTS `fakeid` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fakeid`;

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
-- Table structure for table `family_relation`
--

CREATE TABLE `family_relation` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marital_status`
--

-- CREATE TABLE `marital_status` (
--   `id` int(11) NOT NULL,
--   `name` varchar(50) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marital_status`
--

-- INSERT INTO `marital_status` (`id`, `name`) VALUES
-- (1, 'unmarried'),
-- (2, 'married'),
-- (3, 'divorced'),
-- (4, 'widow'),
-- (5, 'registered_partnership'),
-- (6, 'abolition_of_registered_partnership'),
-- (7, 'deceased'),
-- (8, 'unknown');

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
(1, 'Lisa Lalalaa', '081290', 1, NULL, '0812900002', NULL, 1, '0002', '0001', NULL),
(2, 'Lars Lalala', '181292', 1, NULL, '1812920001', NULL, 1, '0001', '0002', NULL);

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

-- --------------------------------------------------------

--
-- Table structure for table `user_family_relation`
--

CREATE TABLE `user_family_relation` (
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
-- Indexes for table `audit_user`
--
ALTER TABLE `audit_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_relation`
--
ALTER TABLE `family_relation`
  ADD PRIMARY KEY (`id`);

-- --
-- -- Indexes for table `marital_status`
-- --
-- ALTER TABLE `marital_status`
--   ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_id` (`address_id`),
  ADD KEY `marital_status_id` (`marital_status_id`),
  ADD KEY `spouse_id` (`spouse_id`);

--
-- Indexes for table `user_family_relation`
--
ALTER TABLE `user_family_relation`
  ADD PRIMARY KEY (`user_id`,`family_relation_id`),
  ADD KEY `family_relation_id` (`family_relation_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `audit_user`
--
ALTER TABLE `audit_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `family_relation`
--
ALTER TABLE `family_relation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marital_status`
--
-- ALTER TABLE `marital_status`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

-- --
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
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`spouse_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `CONSTRAINT_1` CHECK (`gender_value` in ('0001','0002'));

--
-- Constraints for table `user_family_relation`
--
ALTER TABLE `user_family_relation`
  ADD CONSTRAINT `user_family_relation_ibfk_1` FOREIGN KEY (`family_relation_id`) REFERENCES `family_relation` (`id`),
  ADD CONSTRAINT `user_family_relation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
