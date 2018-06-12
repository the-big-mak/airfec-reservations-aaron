import React from 'react';
import Reservations from '../../src/components/Reservations';

describe('Reservations component', () => {
  let props;
  let shallowReservations;
  const reservations = () => {
    if (!shallowReservations) {
      shallowReservations = shallow(<Reservations {...props} />);
    }
    return shallowReservations;
  };

  beforeEach(() => {
    props = {
      avgNightlyRate: 0,
      stars: 0,
      totRatings: 0,
      availNights: [{}],
      maxGuests: 0,
      minNightStay: 0,
      cleaningFee: 0,
      addtlGuestFee: 0,
      dateDropDownActive: { checkIn: false, checkOut: false },
      handleDateDropDown: () => {},
      guestDropDownActive: false,
      handleGuestDropDown: () => {},
      handleOutsideDropDownClick: () => {},
      postBooking: () => {},
      isBookItFixed: false,
      views: 0,
      serviceFee: 0,
      checkIn: {},
      checkOut: {},
      guests: 0,
      handleChangeGuests: () => {},
      handleChangeCheckInOut: () => {},
      handleShowBill: () => {},
      isBillVisible: true,
      billPricePerNight: 0,
      nights: 0,
    };
    shallowReservations = undefined;
  });

  it('should render a NightlyRateAndStars component', () => {
    expect(reservations().find('NightlyRateAndStars').length).toEqual(1);
  });
  it('should render a BookItForm component', () => {
    expect(reservations().find('BookItForm').length).toEqual(1);
  });
});
