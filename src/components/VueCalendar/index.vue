<template lang="pug">
  .VueCalendar
    VueCalendarHeader(
      :title="calendar.title"
    )
    .VueCalendar__content
      VueClendarDayNames(:configs="configs")
      VueCalendarWeek(
        v-for="(week, weekIndex) in calendar.weeks"
        :key="weekIndex"
        :week="week"
      )
        VueCalendarDay
</template>

<script>
import calendarModel from '@/js/models/calendarModel';
import VueClendarDayNames from '@/components/VueCalendar/VueCalendarDayNames.vue';
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
      configs: {
        dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      },
    };
  },
  components: {
    VueCalendarHeader,
    VueCalendarWeek,
    VueCalendarDay,
    VueClendarDayNames,
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
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  &__content {
  }
}

</style>
