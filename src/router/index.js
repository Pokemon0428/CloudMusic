import Vue from 'vue'
import VueRouter from 'vue-router'
// 注意点: 通过 improt xxx from xxx的方式加载组件, 无论组件有没有被用到, 都会被加载进来
// import Recommend from '../views/Recommend.vue'
// import Rank from '../views/Rank.vue'
// import Singer from '../views/Singer.vue'
// import Search from '../views/Search.vue'

// 实现路由按需加载
// Vue异步组件结合ES6的import实现路由懒加载
const Recommend = (resolve) => {
  import('../views/Recommend.vue').then((module) => {
    resolve(module)
  })
}

const Detail = (resolve) => {
  import('../views/Detail.vue').then((module) => {
    resolve(module)
  })
}

const Recommend1 = () => import('../views/Recommend.vue')

const Singer = (resolve) => {
  import('../views/Singer').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search').then((module) => {
    resolve(module)
  })
}


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: 'detail/:id',
        component: Detail
      }
    ]
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router