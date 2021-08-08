<template lang="pug">
.VueCalendarHeader
  .VueCalendarHeader__title-wrapper
    VueCalendarArrow(
      :arrowDirection="'left'"
      @click="$emit('goPreMonth')"
    )
    span.VueCalendarHeader__title {{ title }}
    VueCalendarArrow(
      :arrowDirection="'right'"
      @click="$emit('goNextMonth')"
    )
  VueCalendarYearPicker(v-if="false")
  VueCalendarMonthPicker(v-if="false")
</template>

<script>
import VueCalendarArrow from '@/components/VueCalendar/VueCalendarArrow.vue';
import VueCalendarYearPicker from './VueCalendarYearPicker.vue';
import VueCalendarMonthPicker from './VueCalendarMonthPicker.vue';

export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    VueCalendarYearPicker,
    VueCalendarMonthPicker,
    VueCalendarArrow,
  },
};
</script>

<style lang="scss" scoped>
.VueCalendarHeader {
  &__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 60px;
    &:hover {
      background-color: rgba(113, 113, 113, 0.3);
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    };
  }
}
</style>
