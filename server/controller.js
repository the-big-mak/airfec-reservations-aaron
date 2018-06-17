const db = require('../database/index');

module.exports = {
  get: {
    roomDetailsAndAvailNights(req, res) {
      const data = [];
      db.getRoomDetails(req.params.id)
        .then((roomDetails) => {
          data.push(roomDetails);
          return db.getAvailNights(req.params.id);
        })
        .then((availNights) => {
          data.push(availNights);
          res.json(data);
        })
        .catch(err => res.status(500).send(err));
    },
  },
  post: {
    booking(req, res) {
      const booking = req.body;
      booking.room_id = req.params.id;
      db.insertBooking(booking)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).send(err));
    },
  },
  options: {
    cors(req, res, next) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials': true,
      });
      next();
    },
  },
};
