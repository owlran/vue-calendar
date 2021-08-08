<template lang="pug">
  .Demo
    h1.Demo__welcom-msg Welcome to VueCalendar demo page
    h2.Demo__title VueCalendar
    VueCalendar.Demo__calendar(
      :date="date"
      @selectDate="selectDate"
    )
    p selected date: {{ date }}
    h2.Demo__title DatePicker
    VueCalendar.Demo__calendar(
      isDatePickerMode
      :date="date"
      @selectDate="selectDate"
    )
</template>

<script>
export default {
  data() {
    return {
      date: '2021-08-09',
    };
  },
  methods: {
    selectDate(date) {
      this.date = date;
    },
  },
};
</script>

<style lang="scss">
body, html {
  background-color: #80DEEA;
  padding: 0;
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<style lang="scss" scoped>
.Demo {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__welcom-msg {
    margin: 10px;
  }
  &__title {
    padding: 10px;
  }
  &__calendar {
    width: 400px;
  }
}
</style>
