-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-01-2019 a las 15:43:40
-- Versión del servidor: 5.7.24-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nouWEBSOCKET`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `birthday` date NOT NULL,
  `gender` text NOT NULL,
  `note` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `date` date NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `birthday`, `gender`, `note`, `status`, `date`, `createdAt`, `updatedAt`) VALUES
(7, 'gerson', '2018-12-30', 'Male', 'asdasd', 0, '2019-01-23', '2019-01-23', '2019-01-23'),
(9, 'Luis', '2018-12-30', 'Femele', 'ascxasd', 1, '2019-01-23', '2019-01-23', '2019-01-24'),
(12, 'Sore', '2018-12-29', 'Femele', 'asdasd', 1, '2019-01-23', '2019-01-23', '2019-01-24'),
(13, 'wladi', '2018-12-30', 'Male', 'asdasd', 1, '2019-01-24', '2019-01-24', '2019-01-24'),
(14, 'Dani', '2019-01-30', 'Femele', 'sdfdsfdsf', 1, '2019-01-24', '2019-01-24', '2019-01-24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
