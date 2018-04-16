import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Item from "@/components/Item";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/item",
      name: "Item",
      component: Item
    }
  ]
});
