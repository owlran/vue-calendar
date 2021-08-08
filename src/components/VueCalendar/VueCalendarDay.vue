<template lang="pug">
.VueCalendarDay(
  :class="getVueCalendarDayClass"
  @click="$emit('selectDate', day.date)"
)
  span {{ day.day }}
</template>

<script>
export default {
  props: {
    day: {
      type: Object,
    },
    selectedDate: {
      type: String,
    },
  },
  computed: {
    getVueCalendarDayClass() {
      const { hide, isToday, date } = this.day;
      return {
        'VueCalendarDay--hide': hide,
        'VueCalendarDay--today': isToday,
        'VueCalendarDay--selected': date === this.selectedDate,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.VueCalendarDay {
  display: inline-block;
  padding: 5px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  &--today {
    color: #db3d44;
  }
  &--hide {
    color: gray;
  }
  &--selected {
    span {
      background-color: #db3d44;
      color: #fff;
      border-radius: 50%;
    }
  }
  span {
    display: inline-block;
    text-align: center;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin: 0 auto;
    vertical-align: middle;
    &:hover {
      background-color: rgba(113, 113, 113, 0.3);
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
  }
}
</style>
