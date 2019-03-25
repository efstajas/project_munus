import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Dashboard from "@/assets/Dashboard.svg";
import Discount from "@/assets/Discount.svg";
import List from "@/assets/List.svg";
import Bell from "@/assets/Bell.svg";
import Settings from "@/assets/Settings.svg";
import Help from "@/assets/Help.svg";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
      meta: {
        view: true,
        title: 'Dashboard',
        icon: Dashboard,
        slug: 'dashboard',
      }
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: () => import(/* webpackChunkName: "campaigns" */ '@/views/Campaigns'),
      meta: {
        view: true,
        title: 'Campaigns',
        icon: Discount,
        slug: 'campaigns',
        color: [66,134,244],
        id: 1234
      }
    },
    {
      path: '/offers',
      name: 'offers',
      component: () => import(/* webpackChunkName: "offers" */ '@/views/Offers'),
      meta: {
        view: true,
        title: 'Offers',
        icon: List,
        slug: 'offers',
        color: [244,114,42]
      }
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import(/* webpackChunkName: "updates" */ '@/views/Updates'),
      meta: {
        view: true,
        sideNavBottom: true,
        title: 'Updates',
        icon: Bell,
        slug: 'updates',
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings'),
      meta: {
        view: true,
        sideNavBottom: true,
        title: 'Settings',
        icon: Settings,
        slug: 'settings',
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ '@/views/Help'),
      meta: {
        view: true,
        sideNavBottom: true,
        title: 'Help',
        icon: Help,
        slug: 'help',
      }
    },
  ]
})