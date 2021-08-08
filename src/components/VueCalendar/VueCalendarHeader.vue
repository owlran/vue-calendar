<template lang="pug">
.VueCalendarHeader
  .VueCalendarHeader__title-wrapper
    VueCalendarArrow(
      :arrowDirection="'left'"
      @click="$emit('goPreMonth')"
    )
    span.VueCalendarHeader__title(
      @click="changeView"
    ) {{ title }}
    VueCalendarArrow(
      :arrowDirection="'right'"
      @click="$emit('goNextMonth')"
    )
</template>

<script>
import VueCalendarArrow from '@/components/VueCalendar/VueCalendarArrow.vue';
import { VIEW_TYPES } from '@/const/index';

export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    VueCalendarArrow,
  },
  methods: {
    changeView() {
      this.$emit('changeView', VIEW_TYPES.MONTH_PICKER);
    },
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
