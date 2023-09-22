<template>
    <AppHead />
    <main>
      <router-view></router-view>
    </main>
    <AppFoot />

</template>

<script>
import Blog from "./pages/Blog.vue"
import BlogDetails from "./pages/BlogDetails.vue"
import AppHead from "./components/AppHead.vue"
import AppFoot from "./components/AppFoot.vue"

export default {
  name: 'App',
  components: {
    Blog,
    BlogDetails,
    AppHead,
    AppFoot,
  }
}
</script>

<style scoped lang="scss">
main {
  background-color: #f0f0f0;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>