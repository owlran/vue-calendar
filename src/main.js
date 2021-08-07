import Vue from 'vue';
import VueCalendar from '@/components/VueCalendar/index';
import Demo from '@/components/Demo.vue';

Vue.use(VueCalendar, {});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Demo),
}).$mount('#app');
