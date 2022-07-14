<template>
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'about'}">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'blog'}">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'contacts'}">Contacts</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderComp',
}
</script>

<style scoped lang="scss">
nav{
    background-color: teal;
    height: 100px;
    .nav-link{
        color: white;
        &:hover{
            color: orange;
        }
    }
}
</style>
