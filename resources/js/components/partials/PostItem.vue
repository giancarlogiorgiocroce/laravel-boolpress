<template>
<div class="card my_card"
    style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
            Categoria: {{ post.category.name }}
        </h6>
        <ul v-if="post.tags.length > 0">
            <li class="exception">Tags:</li>
            <li v-for="tag in post.tags"
                :key="tag.id">
                {{ tag.name }}
            </li>
        </ul>
        <p class="card-text"><strong>Descrizione:</strong><br>{{ post.content }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        post: Object,
    },

}
</script>

<style scoped lang="scss">
.my_card{
    border-radius: 20px;
}
h5{
    text-transform: uppercase;
}
ul{
    list-style: none;
    .exception{
        margin-left: -20px;
    }
}

</style>
