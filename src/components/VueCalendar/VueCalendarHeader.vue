<template lang="pug">
.VueCalendarHeader
  VueCalendarYearPicker(v-if="false")
  VueCalendarMonthPicker(v-if="false")
</template>

<script>
import VueCalendarYearPicker from './VueCalendarYearPicker.vue';
import VueCalendarMonthPicker from './VueCalendarMonthPicker.vue';

export default {
  components: {
    VueCalendarYearPicker,
    VueCalendarMonthPicker,
  },
};
</script>
