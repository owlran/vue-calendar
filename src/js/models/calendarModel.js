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

  getMonthDays({ year, month, shouldBeHide = false }) {
    const weeks = [];

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
          hide: shouldBeHide,
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
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthDays = this.getMonthDays({ year, month });
    const {
      0: firstWeekDays,
      [monthDays.weeks.length - 1]: lastWeekDays,
    } = monthDays.weeks;

    if (firstWeekDays.days.length !== 7) {
      // extract previous month week days
      const previousMonthDays = this.getMonthDays({
        year,
        month: month - 1,
        shouldBeHide: true,
      });
      const {
        [previousMonthDays.weeks.length - 1]: lastWeekOfPreviousMonthDays,
      } = previousMonthDays.weeks;

      monthDays.weeks[0].days = [
        ...lastWeekOfPreviousMonthDays.days,
        ...firstWeekDays.days,
      ];
    }
    const nextMonthDays = this.getMonthDays({
      year,
      month: month + 1,
      shouldBeHide: true,
    });
    if (lastWeekDays.days.length !== 7) {
      // extract next month week days
      lastWeekDays.days = [
        ...lastWeekDays.days,
        ...nextMonthDays.weeks.shift().days,
      ];
    }
    let numberOfDays = monthDays.weeks.reduce((totalDays, currentWeek) => {
      // eslint-disable-next-line no-param-reassign
      totalDays += currentWeek.days.length;
      return totalDays;
    }, 0);
    while (numberOfDays < 42) {
      const incomingWeeks = nextMonthDays.weeks.shift();
      monthDays.weeks.push(incomingWeeks);
      numberOfDays = monthDays.weeks.reduce((totalDays, currentWeek) => {
        // eslint-disable-next-line no-param-reassign
        totalDays += currentWeek.days.length;
        return totalDays;
      }, 0);
    }

    return monthDays.weeks;
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
