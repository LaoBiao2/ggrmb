<template>
    <div>
        <div class="content-top">
            <inside-banner :bannerTitle="bannerTitle" :imgUrl="imgUrl"></inside-banner>
            <div class="content product clearfix">
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
import Introduce from "./components/product/introduce.vue";
import Rule from "./components/product/rule.vue";
import Term from "./components/product/term.vue";
export default {
    name: "product",
    metaInfo: {
        title: 'product',
        meta: [{
            name: "keywords",
            content: "product黄金暴跌,黄金多头"
        }, {
            name: "description",
            content: "product黄金本周开局就失守1200美元关键心理关口，周二多头试图重夺该关口，但斩戟而归，周三相继失守。"
        }]
    },
    data() {
        return {
            imgUrl: '/static/images/product/banner.jpg',
            bannerTitle: '产品介绍',
            type: this.$route.params.type,
            navData: [{
                url: '/#/product/introduce',
                name: '产品介绍'
            }, {
                url: '/#/product/rule',
                name: '金银规则'
            }, {
                url: '/#/product/term',
                name: '交易术语'
            }]
        };
    },
    components: {
        insideBanner,
        insideNav,
        Introduce,
        Rule,
        Term
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
    background: #f5f7f9 !important;
}
//
.product {
    padding-top: 50px;
    padding-bottom: 50px;
    .product-box {
        width: 915px;
    }
    .type_box {
        b {
            background: url(/static/images/product/product_icon.png) 0 -75px;
        }
        i {
            background: url(/static/images/product/product_icon.png);
        }
    }
}
</style>
