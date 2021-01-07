import Vue from 'vue'
import App from './App'
// main.js
import grid from './components/oveui-grid/grid/grid.vue'
Vue.component('grid',grid)

import gridItem from './components/oveui-grid/grid-item/grid-item.vue'
Vue.component('grid-item',gridItem)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
