-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: fakeid
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `district` varchar(50) NOT NULL,
  `street_building_name` varchar(50) NOT NULL,
  `post_code` varchar(4) NOT NULL,
  `street_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'København N','17','2200','Lygten'),(2,'København N','17','2200','Lygten'),(3,'København N','37','2200','Lygten');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `audit_user`
--

DROP TABLE IF EXISTS `audit_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audit_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `new_serialnumber` varchar(50) DEFAULT NULL,
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
  `old_serialnumber` varchar(50) DEFAULT NULL,
  `action` varchar(4) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `db_host` varchar(50) NOT NULL,
  `db_user` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_user`
--

LOCK TABLES `audit_user` WRITE;
/*!40000 ALTER TABLE `audit_user` DISABLE KEYS */;
INSERT INTO `audit_user` VALUES (1,5,'Lisa Lalalaa','081290',NULL,1,NULL,'0812900002',NULL,8,'0002','23wefsdvsdg',5,'Lisa Lalala','081290',NULL,1,NULL,'0812900002',NULL,8,'0002','23wefsdvsdg','U','2020-11-12 13:00:31','root','localhost');
/*!40000 ALTER TABLE `audit_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_relation`
--

DROP TABLE IF EXISTS `family_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `family_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `child_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_relation`
--

LOCK TABLES `family_relation` WRITE;
/*!40000 ALTER TABLE `family_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `martial_status`
--

DROP TABLE IF EXISTS `martial_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `martial_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `martial_status`
--

LOCK TABLES `martial_status` WRITE;
/*!40000 ALTER TABLE `martial_status` DISABLE KEYS */;
INSERT INTO `martial_status` VALUES (1,'married'),(2,'divorced'),(6,'widowed'),(8,'single');
/*!40000 ALTER TABLE `martial_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `date_of_birth` varchar(6) NOT NULL,
  `address_id` int(11) NOT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `CPR` varchar(10) NOT NULL,
  `spouse_id` int(11) DEFAULT NULL,
  `marital_status_id` int(4) NOT NULL,
  `gender_value` varchar(4) NOT NULL,
  `serialnumber` varchar(50) NOT NULL,
  `CVR` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `address_id` (`address_id`),
  KEY `marital_status_id` (`marital_status_id`),
  KEY `spouse_id` (`spouse_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`marital_status_id`) REFERENCES `martial_status` (`id`),
  CONSTRAINT `user_ibfk_3` FOREIGN KEY (`spouse_id`) REFERENCES `user` (`id`),
  CONSTRAINT `CONSTRAINT_1` CHECK (`gender_value` in ('0001','0002'))
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Lisa Lalalaa','081290',1,NULL,'0812900002',NULL,8,'0002','23wefsdvsdg',NULL),(8,'Lars Lalala','181292',1,NULL,'1812920001',NULL,8,'0002','23wefddsdvsdg',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_insert_user` BEFORE INSERT ON `user` FOR EACH ROW BEGIN
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
         new_serialnumber,
         action,
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
             NEW.serialnumber,
             'I', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_update_user` BEFORE UPDATE ON `user` FOR EACH ROW BEGIN
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
        old_serialnumber,
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
         new_serialnumber,
         action,
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
        OLD.serialnumber,
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
             NEW.serialnumber,
             'U', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_delete_user` BEFORE DELETE ON `user` FOR EACH ROW BEGIN
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
         old_serialnumber,
         action,
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
             OLD.serialnumber,
             'D', 
            SUBSTRING(CURRENT_USER(),1,LOCATE('@', CURRENT_USER())-1), 				SUBSTRING(CURRENT_USER(),LOCATE('@', CURRENT_USER())+1)
            );
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user_family_relation`
--

DROP TABLE IF EXISTS `user_family_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_family_relation` (
  `user_id` int(11) NOT NULL,
  `family_relation_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`family_relation_id`),
  KEY `family_relation_id` (`family_relation_id`),
  CONSTRAINT `user_family_relation_ibfk_1` FOREIGN KEY (`family_relation_id`) REFERENCES `family_relation` (`id`),
  CONSTRAINT `user_family_relation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_family_relation`
--

LOCK TABLES `user_family_relation` WRITE;
/*!40000 ALTER TABLE `user_family_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_family_relation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 20:29:57
