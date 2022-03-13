import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "@/router";

createApp(App).use(router).mount("#app");
