<template lang="pug">
  .VueCalendarArrow(:class="getClass")
</template>

<script>
export default {
  props: {
    arrowDirection: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    getClass() {
      return {
        'VueCalendarArrow--left': this.arrowDirection === 'left',
        'VueCalendarArrow--right': this.arrowDirection === 'right',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$arrow-size: 10px;

.VueCalendarArrow {
    cursor: pointer;
    z-index: 200;
    display: flex;
    color: #000000;
    font-size: 18px;
    margin: 20px 10px;
    width: $arrow-size;
    height: $arrow-size;
    border-top: 2px solid;
    border-color: #0a0c19;

    &--left {
    border-left: 2px solid;
    transform: rotate(-45deg);

    }
    &--right {
    border-right: 2px solid;
    transform: rotate(45deg);

    }
  }
</style>
