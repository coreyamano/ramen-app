import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ProductsIndex from "../views/Menu/ProductsIndex.vue";
import OrderedItemsIndex from "../views/Cart/OrderedItemsIndex.vue";
import ChecksShow from "../views/Checks/ChecksShow.vue";
import KitchenIndex from "../views/Kitchen/KitchenIndex.vue";
import KitchenTickets from "../views/Kitchen/KitchenTickets.vue";
import ThankYou from "../views/ThankYou.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thankyou",
    name: "ThankYou",
    component: ThankYou,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/products",
    name: "ProductsIndex",
    component: ProductsIndex,
  },
  {
    path: "/ordered_items",
    name: "OrderedItemsIndex",
    component: OrderedItemsIndex,
  },
  {
    path: "/checks",
    name: "ChecksShow",
    component: ChecksShow,
  },
  {
    path: "/kitchen_orders",
    name: "KitchenIndex",
    component: KitchenIndex,
  },
  {
    path: "/kitchen_tickets",
    name: "KitchenTickets",
    component: KitchenTickets,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
