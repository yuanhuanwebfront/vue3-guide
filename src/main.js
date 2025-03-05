import { createApp } from 'vue'

// 路由
import router from './router'

import './style/font.css';
import './style.css'
import './style/common.css';
import './style/animate.css';
import './style/iconfont/iconfont.css'
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.mount('#app')
