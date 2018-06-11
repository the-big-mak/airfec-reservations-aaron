import React from 'react';
import BookItForm from './../../src/components/BookItForm';

describe('BookItForm component', () => {
  let props;
  let shallowBookItForm;
  const bookItForm = () => {
    if (!shallowBookItForm) {
      shallowBookItForm = shallow(<BookItForm {...props} />);
    }
    return shallowBookItForm;
  };

  beforeEach(() => {
    props = {
      availNights: [{}],
      maxGuests: 0,
      minNightStay: 0,
      dateDropDownActive: { checkIn: false, checkOut: false },
      handleDateDropDown: () => {},
      guestDropDownActive: false,
      handleGuestDropDown: () => {},
      handleOutsideDropDownClick: () => {},
    };
    shallowBookItForm = undefined;
  });

  it('should render a BookItFields component', () => {
    expect(bookItForm().find('BookItFields').length).toEqual(1);
  });
  it('should render a BookingButton component', () => {
    expect(bookItForm().find('BookingButton').length).toEqual(1);
  });
});
