<template lang="pug">
.VueCalendarYearPicker
  VueCalendarHeader(
    :title="title"
    @goPrevious="goPrevious"
    @goNext="goNext"
  )
  .VueCalendarYearPicker__content
    span.VueCalendarYearPicker__year-item(
      :class="getClass(year)"
      v-for="(year, yearIndex) in yearRange"
      :key="yearIndex"
      @click="chooseYear(year.year)"
    ) {{ year.year }}
</template>

<script>
import { VIEW_TYPES } from '@/const/index';
import { extractDateObjectFromDateString } from '@/js/utils/dateUtils';
import VueCalendarHeader from './VueCalendarHeader.vue';

export default {
  props: {
    calendar: {
      type: Object,
    },
    selectedDate: {
      type: String,
    },
  },
  components: {
    VueCalendarHeader,
  },
  data() {
    return {
      selectedYear: '',
    };
  },
  computed: {
    minYear() {
      console.log('selectedYear', this.selectedYear);
      return this.selectedYear - (this.selectedYear % 10);
    },
    maxYear() {
      return this.minYear + 9;
    },
    title() {
      return `${this.minYear} - ${this.maxYear}`;
    },
    yearRange() {
      const range = Array(...Array(10))
        .map((_, i) => i)
        .map((index) => index + this.minYear)
        .map((year) => ({
          year,
          hide: false,
        }));
      const {
        0: minYearOfRange,
        [range.length - 1]: maxYearOfRange,
      } = range;

      return [
        { year: minYearOfRange.year - 1, hide: true },
        ...range,
        { year: maxYearOfRange.year + 1, hide: true },
      ];
    },
  },
  methods: {
    getClass(yearObject) {
      return {
        'VueCalendarYearPicker__year-item--hide': yearObject.hide,
        'VueCalendarYearPicker__year-item--selected': yearObject.year === this.viewYear,
      };
    },
    chooseYear(year) {
      this.$emit('chooseYear', year);
      this.$emit('changeView', VIEW_TYPES.MONTH_PICKER);
    },
    goPrevious() {
      this.selectedYear -= 10;
    },
    goNext() {
      this.selectedYear += 10;
    },
  },
  mounted() {
    this.viewYear = this.calendar.date.getFullYear();

    this.selectedYear = typeof this.selectedDate === 'string'
      ? extractDateObjectFromDateString(this.selectedDate).getFullYear()
      : this.selectedDate.getFullYear();
  },
};
</script>
<style lang="scss" scoped>
.VueCalendarYearPicker {
  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  &__year-item {
    padding: 10px;
    margin: 15px;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    font-size: 13px;
    &--hide {
      color: gray;
    }
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
