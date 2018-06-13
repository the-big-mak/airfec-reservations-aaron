CREATE DATABASE IF NOT EXISTS airFeCReservations;
USE airFeCReservations;

CREATE TABLE IF NOT EXISTS rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  avg_rating DECIMAL(2, 1),
  total_ratings SMALLINT,
  max_guests TINYINT,
  min_night_stay SMALLINT,
  cleaning_fee SMALLINT DEFAULT 0,
  addtl_guest_fee INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS nights (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT,
  avail_date DATE NOT NULL,
  rate INT NOT NULL,
  is_avail TINYINT DEFAULT 1,
  UNIQUE KEY room_date (room_id, avail_date),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE IF NOT EXISTS guests (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  UNIQUE KEY guest (first_name, last_name, email)
);

CREATE TABLE IF NOT EXISTS bookings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_id INT,
  guest_id INT,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  base_price SMALLINT,
  service_fee SMALLINT,
  adults TINYINT NOT NULL DEFAULT 0,
  children TINYINT NOT NULL DEFAULT 0,
  infants TINYINT NOT NULL DEFAULT 0,
  UNIQUE KEY booking (room_id, check_in),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (guest_id) REFERENCES guests(id)
);
