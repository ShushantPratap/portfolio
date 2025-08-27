-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 04:40 PM
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
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `userId` varchar(50) NOT NULL,
  `Name` varchar(25) NOT NULL,
  `Mobile` varchar(25) NOT NULL,
  `ProductData` varchar(10000) NOT NULL,
  `Item` varchar(2) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `DeliveryCharge` varchar(5) NOT NULL,
  `Delivery` varchar(20) NOT NULL,
  `Payment` varchar(20) NOT NULL,
  `OrderTime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`userId`, `Name`, `Mobile`, `ProductData`, `Item`, `Address`, `DeliveryCharge`, `Delivery`, `Payment`, `OrderTime`) VALUES
('@hello5', 'hello', '08527817122,08527817122', '[Product-Id : 2, \r\n    Product-Name : pants, \r\n    Product-Quantity : 1, \r\n    Product-Price : ₹1199, \r\n    Cloth-Size : XL, \r\n    Cloth-Color : green, \r\n    Image-Src : img/3.jpg\r\n    ]', '1', 'Name : shushant, Phone : 08527817122/ 08527817122, Delhi, New Delhi 110091, \n      255, ddd', '', 'Arriving', '', 'Sat Jun 29 2024 04:07:27 GMT+0530 (India Standard '),
('@hello5', 'hello', '08527817122,08527817122', 'Product-Id : 2, \r\n    Product-Name : pants, \r\n    Product-Quantity : 1, \r\n    Product-Price : ₹1199, \r\n    Cloth-Size : M, \r\n    Cloth-Color : yellow, \r\n    Image-Src : img/3.jpg\r\n    ', '1', 'Name : hello, Phone : 08527817122/ 08527817122, DELHI, New Delhi 110091, \n      12, holi', '', 'Arriving', '', 'Sat Jun 29 2024 04:19:30 GMT+0530 (India Standard ');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `Id` int(5) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Fname` varchar(100) NOT NULL,
  `Price` varchar(10) NOT NULL,
  `Rprice` varchar(10) NOT NULL,
  `Size` varchar(100) NOT NULL,
  `Color` varchar(500) NOT NULL,
  `Details` varchar(500) NOT NULL,
  `Category` varchar(20) NOT NULL,
  `Arrival` varchar(10) NOT NULL,
  `Sell` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Id`, `Image`, `Name`, `Fname`, `Price`, `Rprice`, `Size`, `Color`, `Details`, `Category`, `Arrival`, `Sell`) VALUES
(1, 'img/2.jpg,img/3.jpg,img/5.jpg,img/4.jpg', 'pants', 'bottom pants', '399', '1999', 'S,M,X,XL,XXL', 'red,green,yellow,blue', 'nylon,color red,cotton', 'pants', 'new', 'best'),
(2, 'img/2.jpg,img/3.jpg,img/5.jpg,img/4.jpg', 'Shirt', 'Upper Shirt', '1299', '2999', 'S,M,XL,XXL', 'red,green,yellow,blue', 'full cotton,blue', 'shirts', 'new', 'best');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `Id` int(8) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `Name` varchar(35) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Mobile` varchar(10) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Registerdate` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`Id`, `userId`, `Name`, `Email`, `Mobile`, `Password`, `Registerdate`) VALUES
(5, '@hello5', 'hello', 'su@g.co', '7011859352', '123', 'Sat Jun 29 2024 00:24:07 GMT+0530 (India Standard Time)'),
(6, '@suny6', 'suny', 'su@1.co', '1234567890', '123', 'Tue Jul 16 2024 22:17:21 GMT+0800 (China Standard Time)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `Mobile` (`Mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `Id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
