-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 12:33 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `com_dept`
--

-- --------------------------------------------------------

--
-- Table structure for table `complains`
--

CREATE TABLE `complains` (
  `id` int(11) NOT NULL,
  `compfile1` varchar(100) NOT NULL,
  `compfile2` varchar(100) NOT NULL,
  `compfile3` varchar(100) NOT NULL,
  `compfile4` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `userphone` varchar(20) NOT NULL,
  `useremail` varchar(80) NOT NULL,
  `department` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `message` varchar(150) NOT NULL,
  `response` varchar(100) NOT NULL DEFAULT 'Pending',
  `userid` varchar(10) NOT NULL,
  `compid` varchar(10) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `compfile1`, `compfile2`, `compfile3`, `compfile4`, `username`, `userphone`, `useremail`, `department`, `address`, `message`, `response`, `userid`, `compid`, `date`) VALUES
(5, 'upload-1675503452141.jpg', 'upload-1675503452145.png', '', '', 'jish', '1234567890', 'jish@gmail.com', 'Nagar Nigam', 'Nothinggggg', 'ewgwergr', 'Hello Admin', '3', '252', '2023-02-04'),
(9, 'upload-1675507519489.jpg', 'upload-1675507519492.jpg', '', '', 'jish Shank', '1234567890', 'jish@gmail.com', 'Admin', 'UK London', 'qwert', 'ewgfgewrg', '3', '773', '2023-02-04'),
(22, 'upload-1675678603693.png', 'upload-1675678603697.pdf', 'upload-1675678603710.mp3', 'upload-1675678603712.mp4', 'jish Shank', '1234567890', 'jish@gmail.com', 'Nagar Nigam', 'Gwalior MP', 'Testing', 'Pending', '3', '762', '2023-02-06');

-- --------------------------------------------------------

--
-- Table structure for table `departs`
--

CREATE TABLE `departs` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `detail` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departs`
--

INSERT INTO `departs` (`id`, `image`, `title`, `detail`, `date`) VALUES
(7, 'image-1675419012794.webp', 'Electricity Supply', 'Electricity Department', '2023-02-03'),
(8, 'image-1675419369211.jpg', 'Water Supply', 'Water Department', '2023-02-03'),
(9, 'image-1675419520443.jpg', 'Police Department', 'Citizen secruity', '2023-02-03'),
(10, 'image-1675419687711.png', 'Nagar Nigam', 'Nagar Nigam Department', '2023-02-03'),
(11, 'image-1675419750714.jpg', 'Construction Department', 'Roads and Bridges', '2023-02-03');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `mname` varchar(50) NOT NULL,
  `memail` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `mname`, `memail`, `date`) VALUES
(3, 'test2', 'test2@gmail.com', '2023-02-03'),
(4, 'test3', 'test2@gmail.com', '2023-02-03'),
(5, 'test4', 'test2@gmail.com', '2023-02-03'),
(6, 'test5', 'test2@gmail.com', '2023-02-03'),
(10, 'test1', 'test1@gmail.com', '2023-02-08');

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `id` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `cemail` varchar(100) NOT NULL,
  `csubject` varchar(50) NOT NULL,
  `cmessage` varchar(200) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`id`, `cname`, `cemail`, `csubject`, `cmessage`, `date`) VALUES
(2, 'Jinny', 'Jinny@gmail.com', 'werty', 'wert78', '2023-02-03'),
(4, 'test', 'test1@', 'Department', 'Required department is not available', '2023-02-08'),
(5, 'testing', 'testing@gmail.com', 'Department', 'I want file complain.', '2023-02-08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `uphone` varchar(20) NOT NULL,
  `uemail` varchar(150) NOT NULL,
  `upassword` varchar(100) NOT NULL,
  `cpassword` varchar(100) NOT NULL,
  `department` varchar(50) NOT NULL DEFAULT 'user',
  `ustatus` varchar(50) NOT NULL DEFAULT 'active',
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `uphone`, `uemail`, `upassword`, `cpassword`, `department`, `ustatus`, `date`) VALUES
(1, 'test2', 'testing', '1234567890', 'admin@gmail.com', 'admin123', 'test123', 'admin', 'active', '2023-02-01'),
(2, 'test2', 'testing', '1234567890', 'test2@gmail.com', 'test123', 'test123', 'user', 'active', '2023-02-03'),
(3, 'jish', 'Shank', '1234567890', 'jish@gmail.com', 'jishank', 'jishank', 'user', 'active', '2023-02-03'),
(5, 'test', 'test2', '1234567890', 'test5@gmail.com', '12345', 'NA', 'Nagar Nigam', 'active', '2023-02-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complains`
--
ALTER TABLE `complains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departs`
--
ALTER TABLE `departs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complains`
--
ALTER TABLE `complains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `departs`
--
ALTER TABLE `departs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
