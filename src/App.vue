<template>
    <div id="app">
        <vue-header :logoUrl="logoUrl" :navParent="navParent" :navChild="navChild"></vue-header>
        <router-view></router-view>
        <vue-footer :copyright="copyright" :anno="anno" :phone="phone"></vue-footer>
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
    },
    data() {
        return {
            logoUrl: '',
            navParent: [],
            navChild: [],
            copyright: '',
            anno: '',
            phone: '',
        }
    },
    mounted() {
        this.jsonpData()
    },
    methods: {
        jsonpData() {
            this.$axios.get('/api/index/index_data')
            .then(this.cs);
        },
        cs(res) {
            // 头部数据
            this.logoUrl = res.data.base.logo;
            this.navParent = res.data.nav_parent;
            this.navChild = res.data.nav_chi;
            // 底部数据
            this.copyright = res.data.base.copy;
            this.anno = res.data.base.anno;
            this.phone = res.data.base.phone;
        }
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
