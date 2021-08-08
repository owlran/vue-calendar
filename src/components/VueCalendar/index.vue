<template lang="pug">
  .VueCalendar(ref="calender" tabindex="0")
    DatePicker(
      v-if="isDatePickerMode"
      :date="date"
    )
    .VueCalendar__wrapper(v-if="showCalendar")
      .VueCalendar__cotent-wrapper(v-if="currentViewType === VIEW_TYPES.WEEKS_DAYS")
        VueCalendarHeader(
          :title="calendar.title"
          @goPrevious="goPreMonth"
          @goNext="goNextMonth"
          @changeView="changeView(VIEW_TYPES.MONTH_PICKER)"
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
      .VueCalendar__content-wrapper(
        v-else-if="currentViewType === VIEW_TYPES.YEAR_PICKER"
      )
        VueCalendarYearPicker(
          :calendar="calendar"
          :selectedDate="selectedDate"
          @chooseYear="chooseYear"
          @changeView="changeView"
        )
      .VueCalendar__content-wrapper(
        v-else-if="currentViewType === VIEW_TYPES.MONTH_PICKER"
      )
        VueCalendarMonthPicker(
          :calendar="calendar"
          :selectedDate="selectedDate"
          @chooseMonth="chooseMonth"
          @changeView="changeView"
        )
</template>

<script>
import calendarModel from '@/js/models/calendarModel';
import VueClendarDayNames from '@/components/VueCalendar/VueCalendarDayNames.vue';
import { VIEW_TYPES } from '@/const/index';
import DatePicker from '@/components/DatePicker/index.vue';
import VueCalendarHeader from './VueCalendarHeader.vue';
import VueCalendarWeek from './VueCalendarWeek.vue';
import VueCalendarYearPicker from './VueCalendarYearPicker.vue';
import VueCalendarMonthPicker from './VueCalendarMonthPicker.vue';

export default {
  props: {
    date: {
      type: String || Object,
      default: null,
    },
    isDatePickerMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showCalendar: true,
      VIEW_TYPES,
      selectedDate: null,
      popoverEl: null,
      calendarModel,
      currentCalendarDate: null,
      currentViewType: 'WEEKS_DAYS',
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
    VueCalendarYearPicker,
    VueCalendarMonthPicker,
    DatePicker,
  },
  methods: {
    onFocusIn() {
      if (this.isDatePickerMode) {
        this.showCalendar = true;
      }
    },
    onFocusOut(e) {
      const elContains = (el, child) => !!el && !!child && (el === child || el.contains(child));
      if (
        this.isDatePickerMode
        && !elContains(this.popoverEl, e.relatedTarget)
      ) {
        this.showCalendar = false;
      }
    },
    changeView(viewType) {
      this.currentViewType = viewType;
    },
    goPreMonth() {
      this.chooseMonth(this.currentCalendarDate.getMonth() - 1);
    },
    goNextMonth() {
      this.chooseMonth(this.currentCalendarDate.getMonth() + 1);
    },
    goPreYear() {
      this.chooseYear(this.currentCalendarDate.getFullYear() - 1);
    },
    goNextYear() {
      this.chooseYear(this.currentCalendarDate.getFullYear() + 1);
    },
    chooseDate(date) {
      if (date === 'today') {
        this.initCalendar();
      }
    },
    chooseMonth(month) {
      this.currentCalendarDate.setMonth(month);
      this.updateCalendarByDateObject(this.currentCalendarDate);
    },
    chooseYear(fullYear) {
      this.currentCalendarDate.setFullYear(fullYear);
      this.updateCalendarByDateObject(this.currentCalendarDate);
    },
    initConfigs() {},
    updateCalendarByDateObject(date) {
      this.calendar = calendarModel.generateCalendar(date);
    },
    initCalendar() {
      const now = new Date();
      this.currentCalendarDate = now;
      this.updateCalendarByDateObject(this.currentCalendarDate);
    },
    updateCalendar() {},
    selectDate(date) {
      this.selectedDate = date;
      this.$emit('selectDate', date);

      if (this.isDatePickerMode) {
        this.showCalendar = false;
      }
    },
  },
  created() {
    this.initConfigs();
    this.initCalendar();
    this.selectedDate = this.date;
  },
  mounted() {
    this.showCalendar = !this.isDatePickerMode;

    this.popoverEl = this.$refs.calender;
    this.popoverEl.addEventListener('focusin', this.onFocusIn);
    this.popoverEl.addEventListener('focusout', this.onFocusOut);
  },
  beforeDestroy() {
    this.popoverEl.removeEventListener('focusin', this.onFocusIn);
    this.popoverEl.revmoeEventListener('focusout', this.onFocusOut);
  },
};
</script>

<style lang="scss" scoped>
.VueCalendar {
  &__wrapper {
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
  }
}

</style>
