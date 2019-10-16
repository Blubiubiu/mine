const Home = () => import("@/views/Home.vue");
const Resource = () => import("@/views/pc/Resource.vue");
const Upload = () => import("@/views/pc/Upload.vue");

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
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload,
  }
];
