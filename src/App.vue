<template>
    <AppHead />
    <div id="content">
      <section id="main">
        <router-view></router-view>
      </section>
      <section id="category">
        <CategoryBar></CategoryBar>
      </section>
    </div>
    <AppFoot />
</template>

<script>
import AppHead from "./components/AppHead.vue"
import AppFoot from "./components/AppFoot.vue"
import CategoryBar from "./components/CategoryBar.vue"

export default {
  name: 'App',
  components: {
    AppHead,
    AppFoot,
    CategoryBar,
  }
}
</script>

<style scoped lang="scss">
@import "./scss/validate-function";

#content {
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  @include mq {
      flex-direction: column;
  }
  
  #main {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #category {
    padding-top: 50px;
    @include mq {
      padding-top: 0;
    }
  }
}
</style>