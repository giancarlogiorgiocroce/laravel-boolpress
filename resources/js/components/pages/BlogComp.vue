<template>
<div class="container d-flex justify-content-around flex-column">
    <h1 class="pt-3">Ecco gli articoli del Blog!</h1>
    <div class="row my-2 centre">
        <div class="col-4 my-3"
            v-for="post in posts"
            :key="post.id">
                <PostItem
                    :post="post"
                />
        </div>
    </div>
    <div class="row justify-content-center align-items-center">
        <button class="btn btn-light"
            @click="getApi(postsApiUrl, currentPage-1)"
            :disabled="currentPage === 1">
                 &lt;&lt;
        </button>
        <button class="btn btn-light mx-2"
            v-for="i in lastPage"
            :key="i"
            @click="getApi(postsApiUrl, i)"
            :disabled="currentPage === i">
                {{ i }}
        </button>
        <button class="btn btn-light"
            @click="getApi(postsApiUrl, currentPage+1)"
            :disabled="currentPage === lastPage">
                 &gt;&gt;
        </button>
    </div>
</div>
</template>

<script>
import PostItem from "../partials/PostItem.vue";

export default {
    name: 'BlogComp',
    components:{
        PostItem,
    },
    data(){
        return{
            postsApiUrl: 'http://127.0.0.1:8000/api/posts',
            posts: null,
            currentPage: 1,
            lastPage: 0,
        }
    },
    methods:{
        getApi(url, page){
            axios.get(url + '?page=' + page)
            .then(res => {
                this.posts = res.data.data;
                this.currentPage = res.data.current_page;
                this.lastPage = res.data.last_page;
                console.log(this.currentPage);
            })
        },
    },
    mounted(){
        this.getApi(this.postsApiUrl, this.currentPage);
    },
}
</script>

<style scoped lang="scss">
.centre{
    min-height: 55vh;
}
</style>
