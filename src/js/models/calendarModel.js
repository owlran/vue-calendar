const isToday = (date) => {
  const someDate = typeof date === 'string'
    ? new Date(date)
    : date;
  const today = new Date();
  return someDate.getDate() === today.getDate()
    && someDate.getMonth() === today.getMonth()
    && someDate.getFullYear() === today.getFullYear();
};

class CalendarModel {
  constructor() {
    this.dateFormat = 'yyyy/mm/dd';
    this.dayText = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  getCalendarTitle(date) {
    return `${this.monthNames[date.getMonth()]} ${date.getFullYear()}`;
  }

  getMonthDays(date) {
    const weeks = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    const numDays = lastDate.getDate();

    let startDateOfWeek = 1;
    let endDateOfWeek = 7 - firstDate.getDay();

    while (startDateOfWeek <= numDays) {
      const days = [];
      for (let day = startDateOfWeek; day <= endDateOfWeek; day += 1) {
        const dateString = `${year}-${month + 1}-${day}`;
        days.push({
          date: dateString,
          day,
          hide: false,
          isToday: isToday(dateString),
        });
      }
      weeks.push({
        days,
      });
      startDateOfWeek = endDateOfWeek + 1;
      endDateOfWeek += 7;
      if (endDateOfWeek > numDays) {
        endDateOfWeek = numDays;
      }
    }
    return {
      weeks,
      month: this.monthNames[lastDate.getMonth()],
      year: lastDate.getFullYear(),
    };
  }

  getCurrentViewWeeks(date) {
    const monthDays = this.getMonthDays(date);
    return monthDays;
  }

  generateCalendar(date) {
    const dateObject = new Date(date);
    const newDate = new Date(dateObject.getFullYear(), dateObject.getMonth());
    const year = newDate.getFullYear();
    const month = this.monthNames[newDate.getMonth()];

    return {
      title: this.getCalendarTitle(newDate),
      date,
      month,
      weeks: this.getCurrentViewWeeks(newDate),
      year,
    };
  }
}

export default new CalendarModel();
