<template lang="pug">
.VueCalendarWeek
  VueCalendarDay(
    v-for="(day, dayIndex) in week.days"
    :key="dayIndex"
    :day="day"
  )
</template>

<script>
import VueCalendarDay from './VueCalendarDay.vue';

export default {
  props: {
    week: {
      type: Object,
    },
  },
  components: {
    VueCalendarDay,
  },
};
</script>

<style lang="scss" scoped>
.VueCalendarWeek {
  display: flex;
}
</style>
