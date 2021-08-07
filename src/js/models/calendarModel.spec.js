/* eslint-disable no-undef */
import calendarModel from './calendarModel';

describe('calendarModel', () => {
  describe('getMonthDays', () => {
    it('should return days of week in month', () => {
      const date = new Date('2018/5/13');
      const year = date.getFullYear();
      const month = date.getMonth();
      const weeks = calendarModel.getMonthDays({ year, month });
      expect(weeks).toEqual({
        month: 'May',
        weeks: [
          {
            days: [
              {
                date: '2018-5-1',
                day: 1,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-2',
                day: 2,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-3',
                day: 3,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-4',
                day: 4,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-5',
                day: 5,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-6',
                day: 6,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-7',
                day: 7,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-8',
                day: 8,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-9',
                day: 9,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-10',
                day: 10,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-11',
                day: 11,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-12',
                day: 12,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-13',
                day: 13,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-14',
                day: 14,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-15',
                day: 15,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-16',
                day: 16,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-17',
                day: 17,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-18',
                day: 18,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-19',
                day: 19,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-20',
                day: 20,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-21',
                day: 21,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-22',
                day: 22,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-23',
                day: 23,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-24',
                day: 24,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-25',
                day: 25,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-26',
                day: 26,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-27',
                day: 27,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-28',
                day: 28,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-29',
                day: 29,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-30',
                day: 30,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-31',
                day: 31,
                hide: false,
                isToday: false,
              },
            ],
          },
        ],
        year: 2018,
      });
    });
  });
  describe('generateCalendar', () => {
    it('should generate calendar model which is constructed with 42 days', () => {
      const calendar = calendarModel.generateCalendar('2018/05/13');
      expect(calendar).toEqual({
        title: 'May 2018',
        date: '2018/05/13',
        month: 'May',
        weeks: [
          {
            days: [
              {
                date: '2018-4-29',
                day: 29,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-4-30',
                day: 30,
                hide: true,
                isToday: false,
              },
              {

                date: '2018-5-1',
                day: 1,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-2',
                day: 2,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-3',
                day: 3,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-4',
                day: 4,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-5',
                day: 5,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-6',
                day: 6,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-7',
                day: 7,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-8',
                day: 8,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-9',
                day: 9,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-10',
                day: 10,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-11',
                day: 11,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-12',
                day: 12,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-13',
                day: 13,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-14',
                day: 14,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-15',
                day: 15,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-16',
                day: 16,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-17',
                day: 17,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-18',
                day: 18,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-19',
                day: 19,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-20',
                day: 20,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-21',
                day: 21,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-22',
                day: 22,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-23',
                day: 23,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-24',
                day: 24,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-25',
                day: 25,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-26',
                day: 26,
                hide: false,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-5-27',
                day: 27,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-28',
                day: 28,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-29',
                day: 29,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-30',
                day: 30,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-5-31',
                day: 31,
                hide: false,
                isToday: false,
              },
              {
                date: '2018-6-1',
                day: 1,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-2',
                day: 2,
                hide: true,
                isToday: false,
              },
            ],
          },
          {
            days: [
              {
                date: '2018-6-3',
                day: 3,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-4',
                day: 4,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-5',
                day: 5,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-6',
                day: 6,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-7',
                day: 7,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-8',
                day: 8,
                hide: true,
                isToday: false,
              },
              {
                date: '2018-6-9',
                day: 9,
                hide: true,
                isToday: false,
              },
            ],
          },
        ],
        year: 2018,
      });
    });
  });
});
