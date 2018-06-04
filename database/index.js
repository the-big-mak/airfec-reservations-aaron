const mysql = require('mysql');
const mysqlConfig = require('./config');
const db = mysql.createConnection(mysqlConfig);

const getAvailNights = roomId => {
  const queryStr = `SELECT avail_date, rate 
                    FROM nights 
                    WHERE id = ? AND 
                    avail_date >= CURDATE() AND 
                    is_avail = 1`;
  return new Promise((resolve, reject) => {
    db.query(queryStr, roomId, (err, data) => err ? reject(err) : resolve(data));
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
    db.query(queryStr, params, (err) => err ? reject(err) : resolve());
  });
};

const insertBooking = bookingObj => {
  const queryStr = `INSERT INTO bookings SET ?`;
  return new Promise((resolve, reject) => {
    db.query(queryStr, bookingObj, (err, data) => err ? reject(err) 
        : updateAvailNights(bookingObj.room_id, data.id)
            .then(err => err ? reject(err) : resolve()));
  });
};

module.exports = {
  getAvailNights,
  insertBooking
};
