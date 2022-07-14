<template>
<div>
    <HeaderComp/>

    <main>
        <router-view></router-view>
    </main>

    <FooterComp/>
</div>
</template>

<script>
import HeaderComp from './components/partials/HeaderComp.vue';
import FooterComp from './components/partials/FooterComp.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp
    },
}
</script>

<style scoped lang="scss">
main{
    min-height: calc(100vh - 200px);
    background-color: rgb(194, 209, 209);
}
</style>
