import Tab from './components/tab-bar/Tab'
import Tabs from './components/tab-bar/Tabs'
import Scroll from './components/scroller/scroll'
import { Icon,Lazyload } from 'vant'
import { FetchGet, FetchPost } from './fecth'

export default {
    install(Vue) {
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
        Vue.component(Scroll.name, Scroll)

        Vue.use(Icon,Lazyload );

        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}