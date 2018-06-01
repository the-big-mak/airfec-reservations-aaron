DROP DATABASE IF EXISTS airFeCReservations;
CREATE DATABASE airFeCReservations;

USE airFeCReservations;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  avg_rating DECIMAL(2, 1),
  total_ratings SMALLINT,
  max_guests TINYINT,
  min_night_stay SMALLINT,
  cleaning_fee SMALLINT DEFAULT 0,
  addtl_guest_fee INT DEFAULT 0
);

CREATE TABLE nights (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT,
  avail_date date NOT NULL,
  rate SMALLINT NOT NULL,
  FOREIGN KEY (room_id) REFERENCES listings(id)
);

CREATE TABLE guests (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE bookings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT,
  guest_id INT,
  check_in date NOT NULL,
  check_out date NOT NULL,
  base_price SMALLINT,
  cleaning_fee SMALLINT,
  service_fee SMALLINT,
  adults TINYINT NOT NULL DEFAULT 0,
  children TINYINT NOT NULL DEFAULT 0,
  infants TINYINT NOT NULL DEFAULT 0,
  addtl_guest_fee INT,
  FOREIGN KEY (room_id) REFERENCES listings(id),
  FOREIGN KEY (guest_id) REFERENCES guests(id)
);
