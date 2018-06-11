import moment from 'moment';

module.exports = {
  firstDayOfMonth: (dateContext) => {
    const d = dateContext;
    const firstDay = moment(d).startOf('month').format('d');
    return firstDay;
  },
  getArrayOfRowWeeksArrays: (dateContext) => {
    const blanks = module.exports.getBlanksArr(dateContext);
    const daysInMonth = module.exports.getDaysInMonthArr(dateContext);
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
  getDaysInMonthArr: (dateContext) => {
    const daysInMonthArr = [];
    const daysInMonthNum = dateContext.daysInMonth();
    for (let d = 1; d <= daysInMonthNum; d += 1) {
      daysInMonthArr.push({ day: d, active: true });
    }
    return daysInMonthArr;
  },
  getMomentDateFromDayAndMonthYear: (day, monthYear) => {
    const dateArr = monthYear.split(' ');
    dateArr.splice(1, 0, day);
    const momentDate = moment(dateArr.join(' '), 'MMMM D YYYY');
    return momentDate;
  },
  monthAndYear: dateContext => dateContext.format('MMMM YYYY'),
};
