-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2019 a las 16:23:47
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mrm_env_checker`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `environment_status`
--

CREATE TABLE `environment_status` (
  `env_id` int(11) NOT NULL,
  `env_name` varchar(50) NOT NULL,
  `env_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `environment_status`
--

INSERT INTO `environment_status` (`env_id`, `env_name`, `env_status`) VALUES
(1, 'dev01', 1),
(2, 'dev02', 1),
(3, 'dev03', 1),
(4, 'dev04', 1),
(5, 'dev05', 1),
(6, 'itl01', 1),
(7, 'itl02', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `environment_status`
--
ALTER TABLE `environment_status`
  ADD PRIMARY KEY (`env_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `environment_status`
--
ALTER TABLE `environment_status`
  MODIFY `env_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
