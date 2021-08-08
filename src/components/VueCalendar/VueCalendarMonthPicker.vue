<template lang="pug">
.VueCalendarMonthPicker
  VueCalendarHeader(
    :title="viewYear"
    @goPrevious="goPrevious"
    @goNext="goNext"
    @changeView="$emit('changeView', VIEW_TYPES.YEAR_PICKER)"
  )
  .VueCalendarMonthPicker__content
    span.VueCalendarMonthPicker__month-item(
      v-for="(month, monthIndex) in monthNames"
      :class="getMonthItemClass(month)"
      @click="chooseMonth(month)"
    ) {{ month }}
</template>

<script>
import VueCalendarHeader from '@/components/VueCalendar/VueCalendarHeader.vue';
import { extractDateObjectFromDateString } from '@/js/utils/dateUtils';
import { VIEW_TYPES } from '@/const/index';

export default {
  props: {
    calendar: {
      type: Object,
    },
    selectedDate: {
      type: String,
    },
  },
  data() {
    return {
      VIEW_TYPES,
      viewYear: '',
      seletectedMonth: '',
      selectedYear: '',
      monthNames: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    };
  },
  components: {
    VueCalendarHeader,
  },
  methods: {
    chooseMonth(month) {
      const monthIndex = this.monthNames.indexOf(month);
      this.$emit('chooseMonth', monthIndex);
      this.$emit('changeView', VIEW_TYPES.WEEKS_DAYS);
    },
    getMonthItemClass(month) {
      return {
        'VueCalendarMonthPicker__month-item--selected': month === this.monthNames[this.seletectedMonth]
          && this.viewYear === this.selectedYear,
      };
    },
    goPrevious() {
      this.viewYear -= 1;
    },
    goNext() {
      this.viewYear += 1;
    },
  },
  mounted() {
    this.viewYear = this.calendar.date.getFullYear();
    this.selectedYear = typeof this.selectedDate === 'string'
      ? extractDateObjectFromDateString(this.selectedDate).getFullYear()
      : this.selectedDate.getFullYear();
    this.seletectedMonth = typeof this.selectedDate === 'string'
      ? extractDateObjectFromDateString(this.selectedDate).getMonth()
      : this.selectedDate.getMonth();
  },
};
</script>

<style lang="scss" scoped>
.VueCalendarMonthPicker {
  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  &__month-item {
    padding: 10px;
    margin: 15px;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    font-size: 13px;
    &--selected {
      background-color: #db3d44;
      color: #fff;
      border-radius: 50%;
    }
    &:hover {
      background-color: rgba(113, 113, 113, 0.3);
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
  }
}
</style>
