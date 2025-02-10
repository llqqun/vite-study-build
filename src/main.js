import { createApp } from 'vue'
import '@/assets/style/index.scss'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import svgicon from '@/components/SvgIcon.vue'
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.component('svg-icon', svgicon)

app.mount('#app')
