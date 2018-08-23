<template>
    <div class="page-nav">
        <vue-paginate-al :totalPage="10" @btnClick="goToFunction" :prevText="'上一页'" :nextText="'下一页'"></vue-paginate-al>
        <span class="skip-span">
            到
            <input type="text"> 页
        </span>
        <span class="confirm-btn page-btn">
            <a href="javascript:;">确认</a>
        </span>
    </div>
</template>


<script>
import VuePaginateAl from 'vue-paginate-al'
export default {
    name: "paging",
    props: {
        imgUrl: '',
        bannerTitle: ''
    },
    data() {
        return {

        };
    },
    components: {
        VuePaginateAl
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
.page-nav {
    margin-top: 47px;
    text-align: center;
    // line-height: 26px;
    ul.pagination {
        li {
            display: inline-block;
            line-height: 24px;
            margin-left: 16px;
            a {
                height: 26px;
                line-height: 24px;
                display: inline-block;
                font-size: 16px;
                color: #999;
                padding: 0;
                cursor: pointer !important;
            }
        }
        li:not(.disabled) {
            a {
                width: 26px;
                border: 1px solid #999;
                border-radius: 50%;
                overflow: hidden;
                display: inline-block;
                font-size: 16px;
                color: #999;
                padding: 0;
            }
        }
        li:first-child {
            margin-left: 0;
        }
        li:first-child,
        li:last-child {
            a {
                width: 66px;
                height: 26px;
                border: 1px solid #999 !important;
                border-radius: 26px;
            }
            a:hover {
                color: #fff !important;
                background-color: #2e8836 !important;
                border-color: #2e8836 !important;
            }
        }
        li:hover,
        li.active {
            a {
                color: #fff;
                background-color: #2e8836;
                border-color: #2e8836;
            }
        }
        li.disabled {
            a {
                border: none;
                cursor: text !important;
            }
            a:hover {
                color: #999;
                background-color: #fff;
                border-color: #999;
            }
        }
    }
    span,
    a {
        height: 26px;
        display: inline-block;
        font-size: 16px;
        color: #999;
        line-height: 26px;
    }
    ul {
        font-size: 0;
        display: inline-block;
        // margin: 0 28px;
        vertical-align: -7px;
        li {
            display: inline-block;
            margin-left: 16px;
            a {
                width: 24px;
                height: 24px;
                line-height: 24px;
                border: 1px solid #999;
                border-radius: 50%;
                overflow: hidden;
            }
        }
        li:first-child {
            margin-left: 0;
        }
        li:hover,
        li.active {
            a {
                color: #fff;
                background-color: #2e8836;
                border-color: #2e8836;
            }
        }
    }
    span {
        input {
            width: 46px;
            height: 24px;
            border-radius: 10px;
            border: 1px solid #999;
            text-align: center;
            color: #999;
            font-size: 16px;
        }
    }
    .page-btn {
        width: 66px;
        border: 1px solid #999;
        border-radius: 26px;
    }
    .page-btn:hover {
        a {
            color: #fff;
        }
        background-color: #2e8836;
        border-color: #2e8836;
    }
    .skip-span {
        margin: 0 30px;
    }
}
</style>
