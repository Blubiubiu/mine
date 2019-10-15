import Home from "@/views/Home.vue";
import Resource from "@/views/pc/Resource.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/resource",
    name: "resource",
    component: Resource,
  }
];
