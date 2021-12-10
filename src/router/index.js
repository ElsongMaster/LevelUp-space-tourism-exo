import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Destination",
    name: "Destination",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Destination.vue"),

    // redirect:{
    //   name:'DestinationDetails',
    //   params:{
    //     id:0,
    //     nameExtra:'Moon'
    //   },
    // },

    children: [
      {
        path: ":nameExtra",
        name: "DestinationDetails",
        props: true,

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/DestinationDetails.vue"
          ),
      },
    ],
  },
  {
    path: "/Crew",
    name: "Crew",
    children: [
      {
        path: ":id",
        name: "CrewDetails",

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/CrewDetails.vue"),
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Crew.vue"),
  },
  {
    path: "/Technology",
    name: "Technology",
    children: [
      {
        path: ":id",
        name: "TechnologyDetails",

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/TechnologyDetails.vue"
          ),
      },
    ],

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Technology.vue"),
  },

  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFound.vue"),
  },
  {
    path:"/:catchAll(.*)",
    redirect:'/404',
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  
  routes,
});

export default router;
