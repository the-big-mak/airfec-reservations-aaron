import moment from 'moment';

module.exports = {
  year: dateContext => dateContext.format('Y'),
  month: dateContext => dateContext.format('MMMM'),
  monthAndYear: dateContext => dateContext.format('MMMM YYYY'),
  daysInMonth: dateContext => dateContext.daysInMonth(),
  threeMonthsFromNow: () => moment().add(6, 'days').add(3, 'months').format('MM/DD/YYYY'),
  currentDay: dateContext => dateContext.format('D'),
  firstDayOfMonth: (dateContext) => {
    const d = dateContext;
    const firstDay = moment(d).startOf('month').format('d');
    return firstDay;
  },
  getArrayOfRowWeeksArrays: (dateContext) => {
    const blanks = [];
    for (let i = 0; i < module.exports.firstDayOfMonth(dateContext); i += 1) {
      blanks.push({ day: null, active: null });
    }
    const daysInMonth = [];
    for (let d = 1; d <= module.exports.daysInMonth(dateContext); d += 1) {
      daysInMonth.push({ day: d, active: true });
    }
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
};
