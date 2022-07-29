import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueWriter from "vue-writer";

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueWriter)
  .mount('#app')
