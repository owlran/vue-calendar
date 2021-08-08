<template lang="pug">
  .VueCalendarDayNames
    span.VueCalendarDayNames__dayName(
      v-for="(dayName, dayNameIndex) in configs.dayNames"
    ) {{ dayName }}
</template>

<script>
export default {
  props: {
    configs: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.VueCalendarDayNames {
  display: flex;
  &__dayName {
    font-weight: 700;
    padding: 5px;
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 3px;
    justify-content: center;

  }
}
</style>
