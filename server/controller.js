const db = require('./../database/index');

module.exports = {
  get: {
    availNights = (req, res) => {
      db.getAvailNights(res.params.id)
        .then(data => res.json(data.data))
        .catch(err => res.sendStatus(500));
    }
  },
  post: {
    booking = (req, res) => {
      let booking = res.body;
      booking.room_id = res.params.id;
      db.insertBooking(booking)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).send(err));
    }
  }
};
