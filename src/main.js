import Vue from 'vue'
import { Card, Radio } from 'ant-design-vue'
import App from './App.vue'

Vue.use(Card)
Vue.use(Radio)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
