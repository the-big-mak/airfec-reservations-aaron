DROP DATABASE IF EXISTS airFeCReservations;
CREATE DATABASE airFeCReservations;

USE airFeCReservations;

CREATE TABLE listings (
  roomId INT NOT NULL PRIMARY KEY,
  ratingsScore DECIMAL(2,1),
  ratingsCount SMALLINT,
  maxGuests TINYINT,
  minNightStay SMALLINT
);

CREATE TABLE availabilities (
  roomId INT NOT NULL,
  date date,
  pricePerNight SMALLINT,
  cleaningFee SMALLINT,
  serviceFee SMALLINT,
  FOREIGN KEY (roomId)
    REFERENCES listings(roomId)
);

CREATE TABLE bookings (
    bookingId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    roomId INT NOT NULL,
    checkInDate date,
    checkOutDate data,
    roomPrice SMALLINT,
    cleaningFees SMALLINT,
    serviceFees SMALLINT,
    adultsReserved TINYINT,
    childsReserved TINYINT,
    infantsReserved TINYINT,
    FOREIGN KEY (roomId)
      REFERENCES listings(roomId)
);


INSERT INTO listings (roomId, ratingsScore, ratingsCount, maxGuests, minNightStay) VALUES (123456, 4.5, 460, 4, 3);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-05', 215, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-06', 215, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-07', 245, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-12', 245, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-13', 245, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-14', 195, 23, 23);
INSERT INTO availabilities (roomId, date, pricePerNight, cleaningFee, serviceFee) VALUES (123456, '2018-12-15', 245, 23, 23);
