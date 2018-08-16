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
    metaInfo: {
        title: 'about',
        meta: [{
            name: "keywords",
            content: "about黄金暴跌,黄金多头"
        }, {
            name: "description",
            content: "about黄金本周开局就失守1200美元关键心理关口，周二多头试图重夺该关口，但斩戟而归，周三相继失守。"
        }]
    },
    data() {
        return {
            imgUrl: '../../../static/about/banner.jpg',
            bannerTitle: '关于金盛',
            type: this.$route.params.type,
            navData: [{
                url: '/#/about/introduce',
                name: '品牌介绍'
            }, {
                url: '/#/about/protocol',
                name: '协议声明'
            }, {
                url: '/#/about/notice',
                name: '网站公告'
            }, {
                url: '/#/about/invest',
                name: '投资保障'
            }]
        };
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
    }
};
</script>

<style lang="scss">
body {
    background: #f5f7f9;
}
//
.research {
    margin-top: 50px;
    padding-bottom: 50px;
    .research-box {
        width: 915px;
    }
    .type_box {
        b {
            background: url(../../../static/about/about_icon.png) 0 -75px;
        }
        i {
            background: url(../../../static/about/about_icon.png);
        }
    }
}
</style>
