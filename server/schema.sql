DROP DATABASE IF EXISTS airfecReservations;
CREATE DATABASE airfecReservations;

USE airfecReservations;

CREATE TABLE reservations (
  roomId INT NOT NULL PRIMARY KEY,
  ratingsScore DECIMAL(2,1),
  ratingsCount SMALLINT,
  maxGuests TINYINT,
  minNightStay SMALLINT,
  adultsReserved TINYINT,
  childsReserved TINYINT,
  infantsReserved TINYINT
);

CREATE TABLE datesAndPrices (
  roomId INT NOT NULL,
  date date,
  pricePerNight SMALLINT,
  cleaningFee SMALLINT,
  serviceFee SMALLINT,
  FOREIGN KEY (roomId)
    REFERENCES reservations(roomId)
);


INSERT INTO reservations (roomId, ratingsScore, ratingsCount, maxGuests, minNightStay) VALUES (123456, 4.5, 460, 4, 3);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-05', 215, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-06', 215, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-07', 245, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-12', 245, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-13', 245, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-14', 195, 23, 23);
INSERT INTO datesAndPrices (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-15', 245, 23, 23);
