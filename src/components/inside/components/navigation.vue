<template>
    <div class="fr">
        <div class="btn_box">
            <a href="" target="_blank" class="real">
                <span>免费</span>开立真实账户</a>
            <a href="" target="_blank" class="demo">申请模拟账户</a>
        </div>
        <div class="type_box">
            <a v-for="(val, index) in navData" :href="val.url" class="clearfix" v-bind:key="index" v-bind:id="'nav-'+(index+1)" v-bind:class="{active:index==dataId}" @click="addC(index)">
                <b></b>
                <span>{{val.name}}</span>
                <i></i>
            </a>
        </div>
    </div>
</template>


<script>

export default {
    name: "navigation",
    props: {
        navData: '',
    },
    data() {
        return {
            dataId: "0",
        };
    },
    methods: {
        addC(i) {
            this.dataId = i;
        }
    }
};
</script>

<style lang="scss">
.fr {
    width: 285px;
    .btn_box {
        box-sizing: border-box;
        padding: 20px 18px 2px 18px;
        background: #ffffff;
        margin-bottom: 13px;
        border-radius: 5px;
        a {
            position: relative;
            display: block;
            margin-bottom: 20px;
            height: 56px;
            line-height: 56px;
            font-size: 18px;
            text-align: center;
            border-radius: 5px;
            border: 2px solid transparent;
        }
        .real {
            color: #ffffff;
            background: #e98024;
            overflow: hidden;
            span {
                position: absolute;
                left: -17px;
                top: 9px;
                display: block;
                font-size: 12px;
                height: 28px;
                width: 92px;
                color: #e98024;
                line-height: 28px;
                transform: rotate(-45deg);
                background: #ffffff;
            }
        }
        .demo {
            color: #2e8836;
            border-color: #2e8836;
        }
    }
    .type_box {
        background: #ffffff;
        a {
            display: block;
            padding: 15px 0;
        }
        b {
            float: left;
            width: 10px;
            height: 18px;
            margin: 5px 30px 0 50px;
            // background: url(../../../static/about/about_icon.png) 0 -75px;
        }
        i {
            float: right;
            width: 29px;
            height: 29px;
            margin-right: 55px;
            // background: url(../../../static/about/about_icon.png);
        }
        span {
            float: left;
            font-size: 18px;
            margin-top: 5px;
            color: #333333;
        }
        #nav-1 i {
            background-position-x: -137px;
            background-position-y: -36px;
        }
        #nav-2 i {
            background-position-x: -179px;
            background-position-y: -36px;
        }
        #nav-3 i {
            background-position-x: -219px;
            background-position-y: -36px;
        }
        #nav-4 i {
            background-position-x: -259px;
            background-position-y: -36px;
        }
        a.active i,
        a:hover i {
            background-position-y: 0px !important;
        }
        a.active b,
        a:hover b {
            background-position-x: -21px;
        }
        a.active span,
        a:hover span {
            color: #2e8836;
        }
    }
}
</style>
