import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/Home.vue"),
  },
  {
    path: "/rendezvous",
    name: "all-rendezvous",
    component: () => import("@/components/AllReservations.vue"),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () => import("@/components/Reservation.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
