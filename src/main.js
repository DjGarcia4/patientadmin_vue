import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../src/assets/css/animate.css";
import ToastPlugin from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";

const app = createApp(App);

app.use(ToastPlugin);
app.mount("#app");
