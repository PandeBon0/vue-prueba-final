import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home'
import Modal from '@/pages/Modal'

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home, 
    meta: {toTop: true, smoothScroll: true},
  },
  {
    path: '/popup', 
    name: 'Modal',
    component: Modal, 
    props: 'true'
  },

    
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: PageNotFound,
  },  
]

export default createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth' 
    return scroll
  },
})


  // {
  //   path: '/me', 
  //   name: 'Profile',
  //   component: PageProfile, 
  //   props: {edit: true},
  //   meta: {toTop: true, smoothScroll: true},
  // },
  // {
  //   path: '/me/edit', 
  //   name: 'ProfileEdit',
  //   component: PageProfile, 
  // },
  //debemos crear una nueva ruta para cada uno de los componentes principales
  //en este caso creamos una ruta para forum


  // {
  //   path: '/forum/:id',
  //   name: 'Forum',
  //   component: PageForum,
  //   props:true
  // },
  // {
  //   path: '/category/:id',
  //   name: 'Category',
  //   component: PageCategory,
  //   props:true
  // },
  // {
  //   path: '/forum/:forumId/thread/create',
  //   name: 'ThreadCreate',
  //   component: PageThreadCreate,
  //   props:true,
  // },
  // {
  //   path: '/thread/:threadId/edit',
  //   name: 'ThreadEdit',
  //   component: PageThreadEdit,
  //   props:true,
  // },
  // {
  //   path: '/thread/:id', 
  //   name: 'ThreadShow',
  //   component: PageThreadShow,
  //   props: true,
  //   beforeEnter (to, from, next)  {
  //     const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
  //     if(threadExists){
  //       return next();
  //     }else{
  //       next({
  //         name: 'NotFound',
  //         params: {
  //           pathMatch: to.path.substring(1).split('/'), 
  //         },
  //         query: to.query,
  //         hash: to.hash,
  //       });
  //     }
  //   }, 
  // },
  
  
