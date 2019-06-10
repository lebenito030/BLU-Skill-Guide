import Vue from 'vue'
import { Card } from 'ant-design-vue'
import App from './App.vue'

Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
