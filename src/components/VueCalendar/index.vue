<template lang="pug">
  .VueCalendar
    VueCalendarHeader(
      :title="calendar.title"
      @goPreMonth="goPreMonth"
      @goNextMonth="goNextMonth"
    )
    .VueCalendar__content
      VueClendarDayNames(:configs="configs")
      VueCalendarWeek(
        v-for="(week, weekIndex) in calendar.weeks"
        :key="weekIndex"
        :week="week"
        :selectedDate="selectedDate"
        @selectDate="selectDate"
      )
</template>

<script>
import calendarModel from '@/js/models/calendarModel';
import VueClendarDayNames from '@/components/VueCalendar/VueCalendarDayNames.vue';
import VueCalendarHeader from './VueCalendarHeader.vue';
import VueCalendarWeek from './VueCalendarWeek.vue';

export default {
  props: {
    date: {
      type: String || Object,
      default: null,
    },
  },
  data() {
    return {
      selectedDate: null,
      calendarModel,
      currentClendarDate: null,
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
    VueClendarDayNames,
  },
  methods: {
    goPreMonth() {
      this.chooseMonth(this.currentClendarDate.getMonth() - 1);
    },
    goNextMonth() {
      this.chooseMonth(this.currentClendarDate.getMonth() + 1);
    },
    goPreYear() {
      this.chooseYear(this.currentClendarDate.getFullYear() - 1);
    },
    goNextYear() {
      this.chooseYear(this.currentClendarDate.getFullYear() + 1);
    },
    chooseDate(date) {
      if (date === 'today') {
        this.initCalendar();
      }
    },
    chooseMonth(month) {
      this.currentClendarDate.setMonth(month);
      this.updateCalendarByDateObject(this.currentClendarDate);
    },
    chooseYear(fullYear) {
      this.currentClendarDate.setFullYear(fullYear);
      this.updateCalendarByDateObject(this.currentClendarDate);
    },
    initConfigs() {},
    updateCalendarByDateObject(date) {
      this.calendar = calendarModel.generateCalendar(date);
    },
    initCalendar() {
      const now = new Date();
      this.currentClendarDate = now;
      this.updateCalendarByDateObject(this.currentClendarDate);
    },
    updateCalendar() {},
    selectDate(date) {
      this.selectedDate = date;
      this.$emit('selectDate', date);
    },
  },
  created() {
    this.initConfigs();
    this.initCalendar();
    this.selectedDate = this.date;
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
