<template lang="pug">
.VueCalendarDay(:class="getVueCalendarDayClass")
  span {{ day.day }}
</template>

<script>
export default {
  props: {
    day: {
      type: Object,
    },
  },
  computed: {
    getVueCalendarDayClass() {
      const { hide, isToday } = this.day;
      return {
        'VueCalendarDay--hide': hide,
        'VueCalendarDay--today': isToday,
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
