<template lang="pug">
.VueCalendarWeek
  VueCalendarDay(
    v-for="(day, dayIndex) in week.days"
    :key="dayIndex"
    :day="day"
    :selectedDate="selectedDate"
    @selectDate="selectDate"
  )
</template>

<script>
import VueCalendarDay from './VueCalendarDay.vue';

export default {
  props: {
    week: {
      type: Object,
    },
    selectedDate: {
      type: String,
    },
  },
  components: {
    VueCalendarDay,
  },
  methods: {
    selectDate(date) {
      this.$emit('selectDate', date);
    },
  },
};
</script>

<style lang="scss" scoped>
.VueCalendarWeek {
  display: flex;
}
</style>
