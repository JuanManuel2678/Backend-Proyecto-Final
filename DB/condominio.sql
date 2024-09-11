-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2024 a las 19:53:54
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
(24, 'Juan Manuel ', 'Martinez C', 8, '8 - A', 922823245, 'Juan_m@gmail.com', '$2b$10$2XwVKC4VrVwnRCCU.OiNx.ikDv.MC8.Kk8oTZkQV/qHiK4HBKXpUa', 'administrador'),
(25, 'Francisco', 'Martinez', 5, '5 - A', 999222333, 'francisco@gmail.com', '$2b$10$.s0S4rHW2Eb43oNWqBGHcObJmtaR9X53NqNFxFqyh2QShZHFEbeT.', 'residente'),
(26, 'Pedro', 'Picapiedra', 2, '2 - A', 987147321, 'pedro@gmail.com', '$2b$10$uW0NzJNFk/.BREiKzHPOY.yYW/xaTy590t79aWZjedKZegNIzfgrC', 'residente'),
(27, 'Diego', 'D Vega', 7, '7 - A', 987528456, 'Diego@gmail.com', '$2b$10$vt7uK.6ygbLQUibYslWXhOlS.Xb4pL4Q3oMUTM.Wfog5cUdP.PRBe', 'residente');

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
