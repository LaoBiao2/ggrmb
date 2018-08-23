<template>
    <div>
        <div class="content-top">
            <inside-banner :bannerTitle="bannerTitle" :imgUrl="imgUrl"></inside-banner>
            <div class="content research clearfix">
                <div class="fl">
                    <component v-bind:is="type"></component>
                </div>
                <inside-nav :navData="navData"></inside-nav>
            </div>
        </div>
    </div>
</template>


<script>
import insideBanner from "./components/banner.vue";
import insideNav from "./components/navigation.vue";
import Introduce from "./components/about/introduce.vue";
import Protocol from "./components/about/protocol.vue";
import Notice from "./components/about/notice.vue";
import Invest from "./components/about/invest.vue";
export default {
    name: "about",
    data() {
        return {
            imgUrl: '/static/images/about/banner.jpg',
            bannerTitle: '关于金盛',
            type: this.$route.params.type,
            navData: [{
                url: '/about/introduce',
                name: '品牌介绍'
            }, {
                url: '/about/protocol',
                name: '协议声明'
            }, {
                url: '/about/notice',
                name: '网站公告'
            }, {
                url: '/about/invest',
                name: '投资保障'
            }],
            pageTitle: '',
            pageKeywords: '',
            pageDescription: '',
        };
    },
    metaInfo() {
        return {
            title: this.pageTitle,
            meta: [
                { vmid: 'keywords', name: 'keywords', content: this.pageKeywords},
                { vmid: 'description', name: 'description', content: this.pageDescription}
            ]
        }
    },
    components: {
        insideBanner,
        insideNav,
        Introduce,
        Protocol,
        Notice,
        Invest
    },
    watch: {
        $route(to, form) {
            this.type = to.params.type;
        }
    },
    methods: {
        jsonpData() {
            this.$axios.get('/api/about/index')
            .then(this.cs);
        },
        cs(res) {
            this.pageTitle = res.data.header.title;
            this.pageKeywords = res.data.header.keywords;
            this.pageDescription = res.data.header.descriptions;
            console.log(res.data);
        }
    },
    mounted() {
        this.jsonpData();
    }
};
</script>

<style lang="scss">
body {
    background: #f5f7f9 !important;
}
//
.research {
    padding-top: 50px;
    padding-bottom: 50px;
    .research-box {
        width: 915px;
    }
    .type_box {
        b {
            background: url(/static/images/about/about_icon.png) 0 -75px;
        }
        i {
            background: url(/static/images/about/about_icon.png);
        }
    }
}
</style>
