<template lang="pug">
.DatePicker
  .DatePicker__input
    i(class="fa fa-calendar" aria-hidden="true")
    input(
      type="text"
      title="Date"
      ref="input"
      :value="date"
      placeholder="YYYY-MM-DD"
    )
</template>

<script>
export default {
  props: {
    date: {
      type: [String, Object],
    },
  },
};
</script>

<style lang="scss" scoped>
.DatePicker {
  i {
    position: absolute;
    padding: 10px;
    min-width: 40px;
  }
  input {
    padding: 10px 10px 10px 35px;
  }
}

</style>
