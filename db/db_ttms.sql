/*
MySQL Data Transfer
Source Host: localhost
Source Database: db_ttms
Target Host: localhost
Target Database: db_ttms
Date: 26/04/2024 1:40:23 PM
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for tbl_booking
-- ----------------------------
DROP TABLE IF EXISTS `tbl_booking`;
CREATE TABLE `tbl_booking` (
  `booking_id` varchar(255) NOT NULL,
  `package_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `adult_headcount` varchar(255) NOT NULL,
  `child_headcount` varchar(255) NOT NULL,
  `flight_code` varchar(255) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for tbl_itinerary
-- ----------------------------
DROP TABLE IF EXISTS `tbl_itinerary`;
CREATE TABLE `tbl_itinerary` (
  `itinerary_id` varchar(255) NOT NULL,
  `pack_code` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `meals` varchar(255) NOT NULL,
  `hotel_slot` varchar(255) NOT NULL,
  `hotel` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `optional` varchar(255) NOT NULL,
  PRIMARY KEY (`itinerary_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for tbl_package
-- ----------------------------
DROP TABLE IF EXISTS `tbl_package`;
CREATE TABLE `tbl_package` (
  `pack_code` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `locations` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `inclusion` char(255) NOT NULL,
  `exclusion` char(255) NOT NULL,
  PRIMARY KEY (`pack_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Table structure for tbl_users
-- ----------------------------
DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE `tbl_users` (
  `username` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `mi` varchar(1) NOT NULL,
  `userlvl` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records 
-- ----------------------------
