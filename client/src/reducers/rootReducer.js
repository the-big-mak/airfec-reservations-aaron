import moment from 'moment';
import {
  UPDATE_DB_DATA, CHANGE_MONTH, CHANGE_CHECK_IN_OR_OUT, CHANGE_GUESTS,
  DATE_DROP_DOWN_ACTIVE, GUEST_DROP_DOWN_ACTIVE, OUTSIDE_DROP_DOWN_CLICK,
  SET_BOOK_IT_FIXED, SHOW_BILL,
} from '../actions/actions';

const initialState = {
  avgNightlyRate: 0,
  stars: 0,
  totalRatings: 0,
  availNights: {},
  maxGuests: 0,
  minNightStay: 0,
  cleaningFee: 0,
  serviceFee: 2000,
  addtlGuestFee: 0,
  guestDropDownActive: false,
  dateDropDownActive: {
    checkIn: false,
    checkOut: false,
  },
  roomId: window.location.pathname.split('/')[2],
  isBookItFixed: false,
  views: 367,
  checkIn: moment().add(6, 'days').add(2, 'months'),
  checkOut: '',
  guests: 1,
  isBillVisible: false,
  billPricePerNight: 10000,
  nights: 0,
  prevDateContext: moment().add(1, 'months'),
  curDateContext: moment().add(2, 'months'),
  nextDateContext: moment().add(3, 'months'),
  futureDateContext: moment().add(4, 'months'),
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DB_DATA: {
      const { data, avgNightlyRate } = action;
      return {
        ...state,
        stars: data[0][0].avg_rating,
        totalRatings: data[0][0].total_ratings,
        avgNightlyRate,
        availNights: data[1],
        maxGuests: data[0][0].max_guests,
        minNightStay: data[0][0].min_night_stay,
        cleaningFee: data[0][0].cleaning_fee,
        addtlGuestFee: data[0][0].addtl_guest_fee,
      };
    }
    case CHANGE_MONTH: {
      const newState = { ...state };
      const { dc, typeOperator } = action;
      newState[dc] = moment(newState[dc])[typeOperator](1, 'month');
      return newState;
    }
    case CHANGE_CHECK_IN_OR_OUT: {
      const { checkIn, checkOut } = action;
      return { ...state, checkIn, checkOut };
    }
    case CHANGE_GUESTS: {
      const { guests } = action;
      return { ...state, guests };
    }
    case DATE_DROP_DOWN_ACTIVE: {
      const { dateDropDownActive } = action;
      return { ...state, dateDropDownActive };
    }
    case GUEST_DROP_DOWN_ACTIVE: {
      let { guestDropDownActive } = state;
      guestDropDownActive = !guestDropDownActive;
      return { ...state, guestDropDownActive };
    }
    case OUTSIDE_DROP_DOWN_CLICK: {
      const { dateDropDownActive } = action;
      let { guestDropDownActive } = state;
      guestDropDownActive = false;
      return { ...state, dateDropDownActive, guestDropDownActive };
    }
    case SET_BOOK_IT_FIXED: {
      const { isBookItFixed } = action;
      return { ...state, isBookItFixed };
    }
    case SHOW_BILL: {
      const { nightsUpd, isBillVisible } = action;
      let { nights } = state;
      nights = nightsUpd || nights;
      return { ...state, isBillVisible, nights };
    }
    default: {
      return state;
    }
  }
}
