import { App as VueApp, createApp } from "vue";
import App from "./App.vue";

const app: VueApp = createApp(App);
app.mount("#app");
