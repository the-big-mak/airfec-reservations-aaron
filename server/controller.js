const db = require('./../database/index');

module.exports = {
  get: {
    availNights: function (req, res) {
      return db.getAvailNights(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err));
    }
  },
  post: {
    booking: function (req, res) {
      let booking = req.body;
      booking.room_id = req.params.id;
      return db.insertBooking(booking)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).send(err));
    }
  }
};
