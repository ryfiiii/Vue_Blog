<template>
    <header>
        <h1><router-link :to="`/`">RyuBlog</router-link></h1>
    </header>
</template>

<script>
</script>

<style scoped lang="scss">
header {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 5px solid rgb(68, 68, 68);
    h1 {
        font-size: 2.0rem;
        a {
            text-decoration: none;
            color: #7b7b7b;
            &:hover{
                color:#4a4a4a;
                border-bottom: 2px solid #4a4a4a;
                padding-bottom: 2px;
            }
        }
    }
}
</style>
