const mysql = require('mysql');
const moment = require('moment');
const mysqlConfig = require('./config/config');

const db = mysql.createConnection(mysqlConfig);

const getRoomDetails = (roomId) => {
  const queryStr = 'SELECT * FROM rooms WHERE id = ?';
  return new Promise((resolve, reject) => {
    db.query(queryStr, roomId, (err, data) => (err ? reject(err) : resolve(data)));
  });
};

const createHashTableNights = (availNightsArr) => {
  const nights = {};
  availNightsArr.forEach((night) => {
    nights[moment(night.avail_date).format('YYYY-MM-DD')] = night.rate;
  });
  return nights;
};

const getAvailNights = (roomId) => {
  const queryStr = `SELECT avail_date, rate 
                    FROM nights 
                    WHERE room_id = ? AND 
                    avail_date >= CURDATE() AND
                    is_avail = 1`;
  return new Promise((resolve, reject) => {
    db.query(queryStr, roomId, (err, data) => (err ? reject(err) :
      resolve(createHashTableNights(data))));
  });
};

const updateAvailNights = (roomId, bookingId) => {
  const queryStr = `UPDATE nights n
                    JOIN bookings b ON n.room_id = ? AND
                    n.room_id = b.room_id AND
                    b.id = ?
                    n.avail_date >= b.check_in AND
                    n.avail_date < b.check_out
                    SET n.is_avail = 0`;
  const params = [roomId, bookingId];
  return new Promise((resolve, reject) => {
    db.query(queryStr, params, err => (err ? reject(err) : resolve()));
  });
};

const insertBooking = (bookingObj) => {
  const queryStr = 'INSERT INTO bookings SET ?';
  return new Promise((resolve, reject) => {
    db.query(queryStr, bookingObj, (errIns, data) => {
      if (errIns) {
        reject(errIns);
      } else {
        updateAvailNights(bookingObj.room_id, data.id)
          .then(errUpd => (errUpd ? reject(errUpd) : resolve()));
      }
    });
  });
};

module.exports = {
  getRoomDetails,
  getAvailNights,
  insertBooking,
};
