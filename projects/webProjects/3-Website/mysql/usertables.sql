-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 04:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usertables`
--

-- --------------------------------------------------------

--
-- Table structure for table `@hello5`
--

CREATE TABLE `@hello5` (
  `Id` int(5) NOT NULL,
  `Page` varchar(25) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Size` varchar(20) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Quantity` int(3) NOT NULL,
  `Price` varchar(10) NOT NULL,
  `TotalPrice` varchar(10) NOT NULL,
  `DeliveryCharge` varchar(4) NOT NULL,
  `Mobile` varchar(25) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Delivery` varchar(25) NOT NULL,
  `Payment` varchar(25) NOT NULL,
  `OrderTime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `@hello5`
--

INSERT INTO `@hello5` (`Id`, `Page`, `Name`, `Image`, `Size`, `Color`, `Quantity`, `Price`, `TotalPrice`, `DeliveryCharge`, `Mobile`, `Address`, `Delivery`, `Payment`, `OrderTime`) VALUES
(2, 'order', 'pants', 'img/3.jpg', 'XL', 'green', 1, '1199', '1199', '', '08527817122,08527817122', 'Name : shushant, Phone : 08527817122/ 08527817122, Delhi, New Delhi 110091, \n      255, ddd', 'Arriving', '', 'Sat Jun 29 2024 04:07:27 GMT+0530 (India Standard Time)'),
(2, 'order', 'pants', 'img/3.jpg', 'M', 'yellow', 1, '1199', '1199', '', '08527817122,08527817122', 'Name : hello, Phone : 08527817122/ 08527817122, DELHI, New Delhi 110091, \n      12, holi', 'Arriving', '', 'Sat Jun 29 2024 04:19:30 GMT+0530 (India Standard Time)'),
(1, 'cart', 'Jumpsuit', 'img/2.jpg', 'M', 'red', 1, '1299', '1299', '', '', '', '', '', ''),
(2, 'cart', 'pants', 'img/3.jpg', 'Select a size', 'Select a color', 1, '1199', '1199', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `@suny6`
--

CREATE TABLE `@suny6` (
  `Id` int(5) NOT NULL,
  `Page` varchar(25) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Size` varchar(20) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Quantity` int(3) NOT NULL,
  `Price` varchar(10) NOT NULL,
  `TotalPrice` varchar(10) NOT NULL,
  `DeliveryCharge` varchar(4) NOT NULL,
  `Mobile` varchar(25) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Delivery` varchar(25) NOT NULL,
  `Payment` varchar(25) NOT NULL,
  `OrderTime` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
