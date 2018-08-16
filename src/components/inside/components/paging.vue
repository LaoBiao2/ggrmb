<template>
    <div class="page-nav">
        <span class="prev-btn page-btn">
            <a href="javascript:;">上一页</a>
        </span>
        <ul class="page-list">
            <li class="active">
                <a href="javascript:;">1</a>
            </li>
            <li>
                <a href="javascript:;">2</a>
            </li>
            <li>
                <a href="javascript:;">3</a>
            </li>
        </ul>
        <span class="next-btn page-btn">
            <a href="javascript:;">下一页</a>
        </span>
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
export default {
    name: "paging",
    props: {
        imgUrl: '',
        bannerTitle: ''
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss">
.page-nav {
    margin-top: 47px;
    text-align: center;
    line-height: 26px;
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
        margin: 0 28px;
        vertical-align: -6px;
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
