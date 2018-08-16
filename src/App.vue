<template>
    <div id="app">
        <vue-header></vue-header>
        <router-view v-wechat-title="$route.meta.title"></router-view>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
import vueHeader from "@/components/common/header";
import vueFooter from "@/components/common/footer";
export default {
    name: 'App',
    components: {
        vueHeader,
        vueFooter
    }
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
