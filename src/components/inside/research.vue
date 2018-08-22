<template>
    <div>
        <div class="content-top">
            <inside-banner :bannerTitle="bannerTitle" :imgUrl="imgUrl"></inside-banner>
            <div class="content research clearfix">
                <div class="fl">
                    <div class="research-c">
                        <component v-bind:is="type"></component>
                        <paging></paging>
                    </div>
                </div>
                <inside-nav :navData="navData"></inside-nav>
            </div>
        </div>
    </div>
</template>


<script>
import insideBanner from "./components/banner.vue";
import insideNav from "./components/navigation.vue";
import Paging from "./components/paging.vue";
import News from "./components/research/news.vue";
import News1 from "./components/research/news1.vue";
import News2 from "./components/research/news2.vue";
import News3 from "./components/research/news3.vue";
import News4 from "./components/research/news4.vue";
import NewsN from "./components/research/newsN.vue";

export default {
    name: "inside",
    metaInfo: {
        title: 'Inside',
        meta: [{
            name: "keywords",
            content: "Inside黄金暴跌,黄金多头"
        }, {
            name: "description",
            content: "Inside黄金本周开局就失守1200美元关键心理关口，周二多头试图重夺该关口，但斩戟而归，周三相继失守。"
        }]
    },
    data() {
        return {
            imgUrl: '/static/images/research/banner.jpg',
            bannerTitle: '产品介绍',
            type: this.$route.params.type,
            navData: [{
                url: '/#/research/news1',
                name: '行情分析'
            }, {
                url: '/#/research/news2',
                name: '实盘策略'
            }, {
                url: '/#/research/news3',
                name: '金银课堂'
            }, {
                url: '/#/research/news4',
                name: '市场动态'
            }],
        };
    },
    components: {
        insideBanner,
        insideNav,
        Paging,
        News,
        News1,
        News2,
        News3,
        News4,
        NewsN,
    },
    watch: {
        $route(to, form) {
            this.type = to.params.type;
        }
    },
    methods: {
        goToFunction: function (n) {
            console.log(n);
        },

        goToFuncWithData: function (n, data) {
            console.log(n, data);
        },

        goToFuncWithMultipleData: function (n, data) {
            console.log(n, data[0], data[1]);
        }
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
        .research-content {
            margin-top: -16px;
        }
    }
    .research-c {
        background-color: #fff;
        width: 882px;
        display: block;
        margin: 0 auto;
        padding-bottom: 43px;
    }
    .type_box {
        b {
            background: url(/static/images/research/research_icon.png) 0 -75px;
        }
        i {
            background: url(/static/images/research/research_icon.png);
        }
    }
}
</style>
