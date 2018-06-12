import moment from 'moment';

module.exports = {
  firstDayOfMonth: (dateContext) => {
    const d = dateContext;
    const firstDay = moment(d).startOf('month').format('d');
    return firstDay;
  },
  getArrayOfRowWeeksArrays: (dateContext, availNightsArr) => {
    const blanks = module.exports.getBlanksArr(dateContext);
    const daysInMonth = module.exports.getDaysInMonthArr(dateContext, availNightsArr);
    const totalSlots = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0 || i === 0) {
        cells.push(row);
      } else {
        const insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        const lastRow = cells.slice();
        rows.push(lastRow);
      }
    });
    return rows;
  },
  getBlanksArr: (dateContext) => {
    const blanksArr = [];
    for (let i = 0; i < module.exports.firstDayOfMonth(dateContext); i += 1) {
      blanksArr.push({ day: null, active: null });
    }
    return blanksArr;
  },
  getDaysInMonthArr: (dateContext, availNightsArr) => {
    const daysInMonthArr = [];
    const daysInMonthNum = dateContext.daysInMonth();
    let day;
    for (let d = 1; d <= daysInMonthNum; d += 1) {
      day = { day: d };
      day.active = module.exports.isDayActive(dateContext, d, availNightsArr);
      daysInMonthArr.push(day);
    }
    return daysInMonthArr;
  },
  getMomentDateFromDayAndMonthYear: (day, monthYear) => {
    const dateArr = monthYear.split(' ');
    dateArr.splice(1, 0, day);
    const momentDate = moment(dateArr.join(' '), 'MMMM D YYYY');
    return momentDate;
  },
  isAllDatesInBetweenAvail(momentCheckIn, momentCheckOut, availNightsArr) {
    let bool = true;
    const now = momentCheckIn.clone();
    while (now.isSameOrBefore(momentCheckOut)) {
      // Expensive time complexity.
      if (!availNightsArr.some(availDay => moment(availDay.avail_date).isSame(now))) {
        bool = false;
      }
      now.add(1, 'days');
    }
    return bool;
  },
  isDayActive: (dateContext, day, availNightsArr) => {
    const d = dateContext;
    let isActive = false;
    d.date(day);
    // Expensive time complexity.
    if (availNightsArr.some(availDay => moment(availDay.avail_date).isSame(d, 'day'))) {
      isActive = true;
    }
    return isActive;
  },
  monthAndYear: dateContext => dateContext.format('MMMM YYYY'),
};
