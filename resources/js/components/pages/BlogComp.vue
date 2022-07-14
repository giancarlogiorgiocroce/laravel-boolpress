<template>
<div class="container">
    <h1 class="pt-3">Ecco gli articoli del Blog!</h1>
    <div class="row">
        <div class="col-4 my-3"
            v-for="post in posts"
            :key="post.id">
                <PostItem
                    :post="post"
                />
        </div>
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
        }
    },
    methods:{
        getApi(url){
            axios.get(url)
            .then(res => {
                this.posts = res.data;
                console.log(this.posts);
            })
        },
    },
    mounted(){
        this.getApi(this.postsApiUrl);
    },
}
</script>

<style scoped lang="scss">

</style>
