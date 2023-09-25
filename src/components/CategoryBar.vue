<template>
    <div id="categorybar">
        <p>カテゴリ</p>
        <router-link :to="`/PHP`">
            PHP
        </router-link>
        <router-link :to="`/Laravel`">
            Laravel
        </router-link>
        <router-link :to="`/JavaScript`">
            JavaScript
        </router-link>
        <router-link :to="`/Vue.js`">
            Vue.js
        </router-link>
        <router-link :to="`/Others`">
            その他
        </router-link>
    </div>
</template>
<script>
</script>
<style scoped lang="scss">
@import "../scss/validate-function";

#categorybar{
    background-color: white;
    width: 200px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @include mq {
      width: 100%;
    }

    p{
        margin-bottom: 20px;
        font-size: 1.2rem;
        @include mq {
            font-size: 1.5rem;
        }
    }
    a {
        display: block;
        color: black;
        margin-bottom: 5px;
        @include mq {
            font-size: 1.2rem;
        }
    }
}
</style>