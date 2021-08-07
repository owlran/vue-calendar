<template lang="pug">
  .VueCalendar
    h1 Vue Calendar
    VueCalendarHeader
    h1 {{ calendar.title }}
    .VueCalendar__content
      VueCalendarWeek(
        v-for="(week, weekIndex) in calendar.weeks"
        :key="weekIndex"
        :week="week"
      )
        VueCalendarDay
</template>

<script>
import calendarModel from '@/js/models/calendarModel';
import VueCalendarHeader from './VueCalendarHeader.vue';
import VueCalendarWeek from './VueCalendarWeek.vue';
import VueCalendarDay from './VueCalendarDay.vue';

export default {
  data() {
    return {
      calendarModel,
      calendar: {
        weeks: [],
      },
    };
  },
  components: {
    VueCalendarHeader,
    VueCalendarWeek,
    VueCalendarDay,
  },
  methods: {
    goPreMonth(date) {
      console.log(date);
    },
    goNextMonth(date) {
      console.log(date);
    },
    goPreYear(date) {
      console.log(date);
    },
    goNextYear(date) {
      console.log(date);
    },
    chooseDate(date) {
      console.log(date);
    },
    initConfigs() {},
    initCalendar() {
      const now = new Date();
      this.calendar = calendarModel.generateCalendar(now);
    },
    updateCalendar() {},
  },
  created() {
    this.initConfigs();
    this.initCalendar();
  },
};
</script>

<style lang="scss" scoped>
.VueCalendar {
  &__content {
  }
}

</style>
