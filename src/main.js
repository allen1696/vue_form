import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import QForm from './components/QForm.vue'
import QFormItem from './components/QFormItem'
import QFormItemHalf from './components/QFormItemHalf'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.component(QForm.name,QForm);
Vue.component(QFormItem.name,QFormItem);
Vue.component(QFormItemHalf.name,QFormItemHalf);
new Vue({
  render: h => h(App),
}).$mount('#app')
