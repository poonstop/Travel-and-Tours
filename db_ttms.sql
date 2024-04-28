-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2024 at 06:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ttms`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_book`
--

CREATE TABLE `tbl_book` (
  `booking_id` int(11) NOT NULL,
  `package_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passport` varchar(255) NOT NULL,
  `adult_headcount` varchar(255) NOT NULL,
  `child_headcount` varchar(255) NOT NULL,
  `flight_code` varchar(255) NOT NULL,
  `request` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_flight`
--

CREATE TABLE `tbl_flight` (
  `flight_code` int(11) NOT NULL,
  `pack_code` varchar(255) NOT NULL,
  `travel_date` varchar(255) NOT NULL,
  `flight_info` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_itinerary`
--

CREATE TABLE `tbl_itinerary` (
  `itinerary_id` int(11) NOT NULL,
  `pack_code` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `meals` varchar(255) NOT NULL,
  `hotel_stat` varchar(255) NOT NULL,
  `hotel` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `poi` varchar(255) NOT NULL,
  `optional` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_itinerary`
--

INSERT INTO `tbl_itinerary` (`itinerary_id`, `pack_code`, `day`, `meals`, `hotel_stat`, `hotel`, `activity`, `poi`, `optional`) VALUES
(17, '', '1', 'X/L/X', 'Check-In', 'Golden Pacific Hotel  or similar', 'Visit', 'Chungshe Flower Garden > Sun Moon Lake > Tea Garden', 'Free time at Night Market'),
(18, '', '2', 'B/L/X', 'Transfer', 'Tao Garden Hotel or similar', 'Visit', 'Cake Shop > Chiang Kai-Shek Shilin Residence Garden > Liberty Square > Taipei 101', 'Shopping at Ximending'),
(19, '', '3', 'B/', 'Check-In', 'Tao Garden Hotel or similar', 'Visit', 'Jade Handicraft > Yehliu Geopark > Shifen waterfall > Shifen Old street', 'Chinese Lantern || Visit Duty free shop or cosmetic shop'),
(44, '20240428_121402_738', '1', 'Hello', 'Check-In', 'Hello', 'Hello', 'Hello', 'Hello'),
(45, '20240428_121402_738', '2', 'Hello', 'Check-In', 'Hello', 'Hello', 'Hello', 'Hello'),
(46, '20240428_122944_121', '1', 'zvzv', 'N/A', 'zvzv', 'zv', 'vvzvz', 'vzv'),
(47, '20240428_122944_121', '2', 'zvzv', 'N/A', 'zvzv', 'zvz', 'vzvz', 'vzvzv');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pack`
--

CREATE TABLE `tbl_pack` (
  `pack_code` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `locations` varchar(255) NOT NULL,
  `inclusion` varchar(1000) NOT NULL,
  `exclusion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_pack`
--

INSERT INTO `tbl_pack` (`pack_code`, `title`, `locations`, `inclusion`, `exclusion`) VALUES
('', 'adad', 'adad', 'adad', 'ad'),
('1', 'ad', 'dad', 'sample list\n-hello\n-my\n-name\n-is\n-Ducky', 'adada'),
('20240428_121402_738', 'Hello', 'Hello', 'Hello', 'Hello'),
('20240428_122944_121', 'zvz', 'zvzv', 'zzvzv', 'zvzvz');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_price`
--

CREATE TABLE `tbl_price` (
  `price_code` int(11) NOT NULL,
  `pack_code` int(11) NOT NULL,
  `currency` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `price_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `username` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `mi` varchar(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `userlvl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_book`
--
ALTER TABLE `tbl_book`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `tbl_flight`
--
ALTER TABLE `tbl_flight`
  ADD PRIMARY KEY (`flight_code`);

--
-- Indexes for table `tbl_itinerary`
--
ALTER TABLE `tbl_itinerary`
  ADD PRIMARY KEY (`itinerary_id`);

--
-- Indexes for table `tbl_pack`
--
ALTER TABLE `tbl_pack`
  ADD PRIMARY KEY (`pack_code`);

--
-- Indexes for table `tbl_price`
--
ALTER TABLE `tbl_price`
  ADD PRIMARY KEY (`price_code`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_book`
--
ALTER TABLE `tbl_book`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_flight`
--
ALTER TABLE `tbl_flight`
  MODIFY `flight_code` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_itinerary`
--
ALTER TABLE `tbl_itinerary`
  MODIFY `itinerary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_price`
--
ALTER TABLE `tbl_price`
  MODIFY `price_code` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
