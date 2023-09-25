<template>
    <div v-for="post in posts" :key="post.id" class="blog">
        <div class="publishedAt">
            <p>{{ createdDateString(post.publishedAt) }}</p>
        </div>
        <div class="title">
            <p>{{ post.title }}</p>
        </div>
        <div class="thumbnail">
            <img :src="post.thumbnail.url">
        </div>
        <div class="details">
            <p>{{ trimHtmlText(post.body) }}</p>
        </div>
        <div class="readmore">
            <router-link :to="`/blog/${post.id}`">
                ReadMore
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: [],
        };
    },
    props: [
        "category"
    ],
    async mounted() {
        await this.getBlog()
    },
    watch: {
        async category(newVal, oldVal){
            if(newVal !== oldVal){
                await this.getBlog()
            }
        }
    },
    methods: {
        async getBlog(){
            const apiKey = import.meta.env.VITE_MICROCMS_API_KEY
            const response = await axios.get('https://ryfiii-blog.microcms.io/api/v1/blog', {
                headers: { 'X-API-KEY': apiKey },
            });
            this.posts = response.data.contents;

            if(this.category){
                this.posts = this.posts.filter(post => {
                    return post.category.some(cat => cat.category === this.category);
                });
            }
        },
        createdDateString(cAt) {
            const createdAt = new Date(cAt);
            const createdYear = createdAt.getFullYear();
            const createdMonth = String(createdAt.getMonth() + 1).padStart(2, '0');
            const createdDay = String(createdAt.getDate()).padStart(2, '0');
            return `${createdYear}/${createdMonth}/${createdDay}`;
        },
        trimHtmlText(html) {
            // DOMParserを使用してHTMLをテキストに変換
            const doc = new DOMParser().parseFromString(html, 'text/html');
            let text = doc.body.textContent || "";

            // 指定した長さでテキストをトリミング
            if (text.length > 80) {
                text = text.substr(0, 80) + "...";
            }

            return text;
        }
    }
};
</script>

<style lang="scss">
@import "../scss/validate-function";

.blog {
    background-color: #fff;
    width: 700px;
    margin-bottom: 50px;
    padding-top: 50px;
    text-align: center;
    color: #7b7b7b;
    @include mq(){
        width: 320px;
        padding-top: 30px;
    }

    .publishedAt {
        font-size: 1.1rem;
        @include mq(){
            font-size: 1.0rem;
        }
    }

    .title {
        margin-top: 30px;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0 80px;
        @include mq(){
            font-size: 1.2rem;
            padding: 0 25px;
            margin-top: 15px;
        }
    }

    .thumbnail {
        margin-top: 50px;
        img {
            width: 700px;
            height: 350px;
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

    .details {
        margin-top: 50px;
        padding: 0 100px;
        @include mq(){
            margin-top: 25px;
            padding: 0 25px;
        }
    }

    .readmore {
        margin: 50px 0 70px 0;
        a {
            text-decoration: none;
            border: 1px solid #7b7b7b;
            padding: 10px 25px;
            color: #7b7b7b;
            &:hover {
                text-decoration: underline;
                color: #373737;
            }
        }
        @include mq(){
            margin: 30px 0 40px 0;
        }
    }
}
</style>