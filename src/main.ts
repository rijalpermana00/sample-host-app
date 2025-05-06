import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);
const CarouselApp = defineAsyncComponent(() => import("my-remote-app/CarouselApp"));
app.component("Carousel", CarouselApp);

app.mount('#app')
