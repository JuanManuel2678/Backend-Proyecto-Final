-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2024 a las 19:33:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `condominio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `incidencias_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `incidencia` varchar(250) DEFAULT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `tipo` varchar(250) DEFAULT NULL,
  `estado` varchar(250) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`incidencias_id`, `user_id`, `incidencia`, `descripcion`, `tipo`, `estado`, `imagen`, `fecha_inicio`) VALUES
(30, 32, 'bombnillo apagado', 'escalera del piso 3 no tiene luz', 'electrico', 'enviado', 'CRUD videos.png', '2024-09-13 13:03:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `nombres` varchar(150) NOT NULL,
  `apellidos` varchar(150) DEFAULT NULL,
  `piso` int(11) DEFAULT NULL,
  `apartamento` varchar(150) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `rol` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `nombres`, `apellidos`, `piso`, `apartamento`, `telefono`, `email`, `password`, `rol`) VALUES
(23, 'Carlos Alberto ', 'Martinez Carhuapoma', 1, '1 - B', 999222444, 'carlos@gmail.com', '$2b$10$TpvDNmYhxSofysp6X2VWRObaUbTb6nLhi2KJ/TNJiO61kCeK3GTye', 'residente'),
(24, 'Juan Manuel ', 'Martinez Carhuapoma', 8, '8 - A', 922823245, 'Juan_m@gmail.com', '$2b$10$2XwVKC4VrVwnRCCU.OiNx.ikDv.MC8.Kk8oTZkQV/qHiK4HBKXpUa', 'administrador'),
(28, 'Pedro', 'Picapiedras', 1, '1 - B', 988777444, 'pedro@gmail.com', '$2b$10$wbWwmob6smuewtRVV.GG/eQ/BlZQBHlkKC3nqHShCzTgPWBuPIR0y', 'residente'),
(30, 'Pablo', 'Marmol', 1, '1 - B', 922285574, 'pablo@gmail.com', '$2b$10$RyaCeu8.6SsSoITpqSo3UeRQ7yOMEKbqVBBUok9d0m1D5543dp772', 'residente'),
(32, 'Barnie', 'Gozilla', 2, '2 - B', 78978, 'barnie@gmail.com', '$2b$10$T6XWcn5..UuoXbIxdmomG.n6Zd6ah1tUXtPpFuAbeU2/n69kkmwYm', 'residente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`incidencias_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `incidencias_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD CONSTRAINT `incidencias_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
