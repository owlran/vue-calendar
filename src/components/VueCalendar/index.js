/* eslint-disable no-param-reassign */
import VueCalendar from './index.vue';

const VueCalendarPlugin = {
  install(Vue, options = []) {
    Vue.prototype.$getOptions = () => options;

    Vue.component('VueCalendar', VueCalendar);
  },
};

export default VueCalendarPlugin;
