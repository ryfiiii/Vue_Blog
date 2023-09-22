import { createRouter, createWebHistory } from "vue-router"

import Blog from "./pages/Blog.vue"
import BlogDetails from "./pages/BlogDetails.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: Blog,
      },
      {
        path: "/blog/:id",
        component: BlogDetails,
        props: true,
      }
    ]
  })
  
  export default router