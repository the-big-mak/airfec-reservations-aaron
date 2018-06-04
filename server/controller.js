const db = require('./../database/index');

module.exports = {
  get: {
    availNights = (req, res) => {
      db.getAvailNights(req.params.id)
        .then(data => res.json(data.data))
        .catch(err => res.sendStatus(500));
    }
  },
  post: {
    booking = (req, res) => {
      let booking = req.body;
      booking.room_id = req.params.id;
      db.insertBooking(booking)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).send(err));
    }
  }
};
