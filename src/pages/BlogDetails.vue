<template>
    <div id="blogdetails">
        <div v-if="post">
            <div class="publishedAt">
            <p>{{ createdDateString(post.publishedAt) }}</p>
            </div>
            <div class="title">
                <p>{{ post.title }}</p>
            </div>
            <div class="thumbnail">
                <img v-if="post.thumbnail" :src="post.thumbnail?.url">
            </div>
            <div v-html="post.body" class="body"></div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    props: [
        "id",
    ],
    data() {
        return {
            post: [],
        };
    },
    async mounted() {
        const apiKey = import.meta.env.VITE_MICROCMS_API_KEY
        const response = await axios.get(`https://ryfiii-blog.microcms.io/api/v1/blog/${this.id}`, {
            headers: { 'X-API-KEY': apiKey }
        });
        this.post = response.data;
    },
    methods: {
        createdDateString(cAt) {
            const createdAt = new Date(cAt);
            const createdYear = createdAt.getFullYear();
            const createdMonth = String(createdAt.getMonth() + 1).padStart(2, '0');
            const createdDay = String(createdAt.getDate()).padStart(2, '0');
            return `${createdYear}/${createdMonth}/${createdDay}`;
        },
    }
};
</script>

<style lang="scss">
@import "../scss/validate-function";

#blogdetails {
    background-color: #fff;
    width: 950px;
    margin-bottom: 50px;
    padding-top: 50px;
    color: #7b7b7b;
    @include mq(){
        width: 320px;
        padding-top: 30px;
    }

    .publishedAt {
        text-align: center;
        font-size: 1.1rem;
        @include mq(){
            font-size: 1.0rem;
        }
    }

    .title {
        margin-top: 30px;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0 100px;
        text-align: center;
        @include mq(){
            font-size: 1.2rem;
            padding: 0 25px;
            margin-top: 15px;
        }
    }

    .thumbnail {
        margin-top: 50px;
        text-align: center;
        img {
            width: 800px;
            height: 400px;
            object-fit: cover;
            @include mq(){
                width: 320px;
                height: 180px;
            }
        }
        @include mq(){
            margin-top: 25px;
        }
    }

    .body {
        margin: 100px 0;
        padding: 0 150px;
        @include mq(){
            margin: 30px 0;
            padding: 0 20px;
        }

        li, span, a , img {
            margin-top: 5px;
        }

        p, h1, h2, h3, h4, h5, h6 {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        pre {
        background-color: #1f1f1f;
        border: 2px solid #ccc;
        border-radius: 15px;
        padding: 16px;
        overflow-x: auto;
        @include mq(){
            overflow: scroll;
        }
        }

        code {
        font-family: "Courier New", monospace;
        color: white;
        font-size: 16px;
        }

        pre code {
        display: block;
        line-height: 1.5;
        }
    }
}
</style>