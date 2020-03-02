import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/home/View.vue";
import ConfigView from "@/views/config/View.vue";
import AboutView from "@/views/about/View.vue";
import LicenseView from "@/views/license/View.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/config",
      name: "config",
      component: ConfigView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/license",
      name: "license",
      component: LicenseView
    },
    
  ]
});
