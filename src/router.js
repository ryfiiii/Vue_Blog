import { createRouter, createWebHistory } from "vue-router"

import MyBlog from "./pages/MyBlog.vue"
import BlogDetails from "./pages/BlogDetails.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: MyBlog,
      },
      {
        path: "/:category",
        component: MyBlog,
        props: true,
      },
      {
        path: "/blog/:id",
        component: BlogDetails,
        props: true,
      }
    ]
  })
  
  export default router