import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import QForm from './components/QForm.vue'
import QFormItem from './components/QFormItem'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.component('QForm',QForm);
Vue.component('QFormItem',QFormItem);

new Vue({
  render: h => h(App),
}).$mount('#app')
