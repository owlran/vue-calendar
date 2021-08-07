<template lang="pug">
  .vue-calendar
    h1 Vue Calendar
    VueCalendarHeader
    .vue-calendar__content
      VueCalendarWeek(
        v-for="(week, weekIndex) in calendar"
        :key="weekIndex"
      )
        VueCalendarDay
</template>

<script>
import VueCalendarHeader from './VueCalendarHeader.vue';
import VueCalendarWeek from './VueCalendarWeek.vue';
import VueCalendarDay from './VueCalendarDay.vue';

export default {
  data() {
    return {
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
    initCalendar() {},
    updateCalendar() {},
  },
  created() {
    this.initConfigs();
    this.initCalendar();
  },
};
</script>

<style lang="scss" scoped>

</style>
