import Vue from "vue";
import VueRouter from "vue-router";
import CardSelect from "@/views/cardSelect.vue";
import CardBind from "@/views/cardBind.vue";
import NoMatch from "@/components/noMatch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/enter"
  },
  {
    path: "/enter",
    name: "enter",
    component: CardSelect
  },
  {
    path: "/bind",
    name: "bind",
    component: CardBind
  },
  {
    path: "/menuContent",
    component: () =>
      import(
        /* webpackChunkName: "menuContent" */ "../views/menuContent/menuContent.vue"
      ),
    beforeEnter: (to: any, from: any, next: Function) => {
      try {
        const { state } = router.app.$store;
        if (state && state.sickInfo) {
          next();
          return;
        } else {
          router.push("/enter");
        }
      } catch (error) {
        router.push("/enter");
      }
    },
    children: [
      {
        path: "/",
        redirect: "/menuContent/timeSelect"
      },
      {
        path: "/menuContent/timeSelect",
        component: () =>
          import(
            /* webpackChunkName: "timeSelect" */ "../views/menuContent/timeSelect/timeSelect.vue"
          ),
        children: [
          {
            path: "/",
            redirect: "/menuContent/timeSelect/mealTime"
          },
          {
            path: "/menuContent/timeSelect/mealTime",
            name: "mealTime",
            component: () =>
              import(
                /* webpackChunkName: "mealTime" */ "../views/menuContent/timeSelect/mealTime/mealTime.vue"
              )
          },
          {
            path: "/menuContent/timeSelect/mealMenu",
            name: "mealMenu",
            component: () =>
              import(
                /* webpackChunkName: "mealMenu" */ "../views/menuContent/timeSelect/mealMenu/mealMenu.vue"
              )
          },
          {
            path: "/menuContent/timeSelect/mealPay",
            name: "mealPay",
            component: () =>
              import(
                /* webpackChunkName: "mealPay" */ "../views/menuContent/timeSelect/mealPay/mealPay.vue"
              )
          }
        ]
      },
      {
        path: "/menuContent/orderMap",
        component: () =>
          import(
            /* webpackChunkName: "orderInfo" */ "../views/menuContent/orderInfo/orderInfo.vue"
          ),
        children: [
          {
            path: "/",
            redirect: "/menuContent/orderMap/orderList"
          },
          {
            path: "/menuContent/orderMap/orderList",
            name: "orderList",
            component: () =>
              import(
                /* webpackChunkName: "orderList" */ "../views/menuContent/orderInfo/orderList/orderList.vue"
              )
          },
          {
            path: "/menuContent/orderMap/orderDetail/:orderNo",
            name: "orderDetail",
            component: () =>
              import(
                /* webpackChunkName: "orderList" */ "../views/menuContent/orderInfo/orderDetail/orderDetail.vue"
              )
          }
        ]
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: NoMatch
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
