import Home from "@/views/Home.vue";
import Resource from "@/views/pc/Resource.vue";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/resource",
    name: "resource",
    component: () => import("@/views/pc/Resource.vue"),
  }
];
