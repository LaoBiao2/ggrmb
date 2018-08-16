<template>
    <div class="banner">
        <div class="bg-img">
            <img :src="imgUrl" alt="">
        </div>
        <div class="content">
            <div class="txt">
                <h4>{{bannerTitle}}</h4>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "banner",
    props: {
        imgUrl: '',
        bannerTitle: ''
    },
    data() {
        return {
            // imgUrl: '../../../../static/about/banner.jpg',
            // bannerTitle: '关于金盛',
        };
    }
};
</script>

<style lang="scss">
.banner {
    height: 256px;
    // background: url(../../../../static/about/banner.jpg) no-repeat;
    position: relative;
    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .txt {
        display: table-cell;
        height: 256px;
        vertical-align: middle;
        h4 {
            font-size: 28px;
            color: #ffffff;
        }
    }
}
</style>
