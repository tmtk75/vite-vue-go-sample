import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import { ElButton, ElSelect } from "element-plus";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(ElButton)
  .use(ElSelect)
  .mount("#app");
