export const UPDATE_DB_DATA = 'UPDATE_DB_DATA';
export const CHANGE_MONTH = 'CHANGE_MONTH';
export const CHANGE_CHECK_IN_OR_OUT = 'CHANGE_CHECK_IN_OR_OUT';
export const CHANGE_GUESTS = 'CHANGE_GUESTS';
export const DATE_DROP_DOWN_ACTIVE = 'DATE_DROP_DOWN_ACTIVE';
export const GUEST_DROP_DOWN_ACTIVE = 'GUEST_DROP_DOWN_ACTIVE';
export const OUTSIDE_DROP_DOWN_CLICK = 'OUTSIDE_DROP_DOWN_CLICK';
export const SET_BOOK_IT_FIXED = 'SET_BOOK_IT_FIXED';
export const SHOW_BILL = 'SHOW_BILL';

export function updateDBData(data, avgNightlyRate) {
  return {
    type: UPDATE_DB_DATA,
    data,
    avgNightlyRate,
  };
}

export function changeMonth(dc, typeOperator) {
  return {
    type: CHANGE_MONTH,
    dc,
    typeOperator,
  };
}

export function changeCheckInOut(checkIn, checkOut) {
  return {
    type: CHANGE_CHECK_IN_OR_OUT,
    checkIn,
    checkOut,
  };
}

export function changeGuests(guests) {
  return {
    type: CHANGE_GUESTS,
    guests,
  };
}

export function updateDateDropDownActive(dateDropDownActive) {
  return {
    type: DATE_DROP_DOWN_ACTIVE,
    dateDropDownActive,
  };
}

export function toggleGuestDropDown() {
  return {
    type: GUEST_DROP_DOWN_ACTIVE,
  };
}

export function handleOutsideDropDownClick(dateDropDownActive) {
  return {
    type: OUTSIDE_DROP_DOWN_CLICK,
    dateDropDownActive,
  };
}

export function setIsBookItFixed(isBookItFixed) {
  return {
    type: SET_BOOK_IT_FIXED,
    isBookItFixed,
  };
}

export function handleShowBill(nightsUpd, isBillVisible) {
  return {
    type: SHOW_BILL,
    nightsUpd,
    isBillVisible,
  };
}
