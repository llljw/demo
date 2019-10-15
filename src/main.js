import Vue from 'vue';
import '@/assets/index.css';
import store from './store';
import router from './router';
import App from './App.vue';
import Vant from 'vant';
import {Cell} from 'vant';
import {CellGroup} from 'vant';
import {Swipe} from 'vant';
import {SwipeItem} from 'vant';
import {Lazyload} from 'vant';
import {Dialog} from 'vant';
import {Tabbar} from 'vant';
import {TabbarItem} from 'vant';
import {Search} from 'vant';
import {Grid} from 'vant';
import {GridItem} from 'vant';
import {Image} from 'vant';
import {Toast} from 'vant';
import {Panel} from 'vant';
import {Sku} from 'vant';

Vue.use(Sku);
Vue.use(Panel);
Vue.use(Toast);
Vue.use(Image);
Vue.use(Grid).use(GridItem);
Vue.use(Search);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Dialog);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
