-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Jan 29. 12:59
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `jatekbusiness`
--
CREATE DATABASE IF NOT EXISTS `jatekbusiness` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `jatekbusiness`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE IF NOT EXISTS `felhasznalok` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `felhasznalo_nev` varchar(30) NOT NULL,
  `jelszo` varchar(1000) NOT NULL,
  `adminisztrator` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `felhasznalo_nev`, `jelszo`, `adminisztrator`) VALUES
(1, 'Admin', '$2b$10$vBFxXaai.mo2v1JCKrq6I.VQxtVb853tG2Hkwamu8AyODSVGuDlw2', 1),
(2, 'Sigma69', '$2b$10$v2ouI6mJGphiP7mxppLpguWDPU.D44yxikHH20Y8xGnifwq2Ccue6', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekok`
--

CREATE TABLE IF NOT EXISTS `jatekok` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jatek_nev` varchar(1000) NOT NULL,
  `leiras` varchar(1000) NOT NULL,
  `kategoria_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kategoriak` (`kategoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatekok`
--

INSERT INTO `jatekok` (`id`, `jatek_nev`, `leiras`, `kategoria_id`) VALUES
(1, 'Supermarket Simulator', 'Vezesd a saját szupermarketed! Töltsd fel a polcokat, állítsd be az árakat, kezeld a fizetéseket, alkalmazz dolgozókat, bővítsd és tervezd meg az üzleted. Az online rendelések és kiszállítás, bolti tolvajok, biztonsági személyzet és a helyi piac hamarosan érkeznek.', 1),
(2, 'Callisto Protocol', 'Éld túl a Callisto borzalmait, és fedezd fel Jupiter halott holdjának sötét titkait, hogy megszökhess!', 4),
(3, 'Stray', 'Elveszetten, egyedül és családjától elszakítva egy kóbor macskának fel kell göngyölítenie egy ősi rejtélyt, hogy kijusson egy rég elfeledett kibervárosból és hazataláljon.', 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kategoriak`
--

CREATE TABLE IF NOT EXISTS `kategoriak` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `kategoria` varchar(1000) NOT NULL,
  `kategoriak_ar` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kategoriak`
--

INSERT INTO `kategoriak` (`id`, `kategoria`, `kategoriak_ar`) VALUES
(1, 'Simulator', 4999),
(2, 'Rougelike', 7599),
(3, 'Soulslike', 8999),
(4, 'Horror', 1599),
(5, 'Adventure', 3999),
(6, 'Indie', 3799),
(7, 'Multiplayer', 1799),
(8, 'Shooter', 3699),
(9, 'Racing', 3499),
(10, 'Hack and slash', 5699);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jatekok`
--
ALTER TABLE `jatekok`
  ADD CONSTRAINT `kategoriak` FOREIGN KEY (`kategoria_id`) REFERENCES `kategoriak` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
