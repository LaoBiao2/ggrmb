<template>
    <div class="footer-box">
        <div class="footer">
            <div class="content">
                <ul class="link-ul">
                    <li @click="showUl(1)">金盛荣誉</li>
                    <li @click="showUl(2)">合作机构</li>
                    <li @click="showUl(3)">友情链接</li>
                    <li>关于金盛</li>
                    <li>市场动态</li>
                    <li>实盘策略</li>
                    <li>软件下载</li>
                    <li>产品介绍</li>
                    <li>马上咨询</li>
                    <li>申请代理</li>
                </ul>
                <div class="link-div">
                    <ul class="honor link-c-ul" v-if="showId == 1">
                        <i class="link-i"></i>
                        <li class="li-1">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                        <li class="li-2">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                        <li class="li-3">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                        <li class="li-4">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                        <li class="li-5">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                        <li class="li-6">
                            <i></i>
                            <span>贵金属业最佳<br/>交易平台大奖</span>
                        </li>
                    </ul>
                    <ul class="cooperate link-c-ul" v-else-if="showId === 2">
                        <i class="link-i"></i>
                        <li class="icon1"><span></span><i></i></li>
                        <li class="icon2"><span></span><i></i></li>
                        <li class="icon3"><span></span><i></i></li>
                        <li class="icon4"><span></span><i></i></li>
                        <li class="icon5"><span></span><i></i></li>
                        <li class="icon6"><span></span><i></i></li>
                        <li class="icon7"><span></span><i></i></li>
                        <li class="icon8"><span></span><i></i></li>
                        <li class="icon9"><span></span><i></i></li>
                    </ul>
                    <ul class="link link-c-ul" v-else>
                        <i class="link-i"></i>
                        <li><span><a href="javascript:;">物权众筹</a></span></li>
                        <li><span><a href="javascript:;">合肥求购信息</a></span></li>
                        <li><span><a href="javascript:;">信托产品</a></span></li>
                        <li><span><a href="javascript:;">小额贷款</a></span></li>
                        <li><span><a href="javascript:;">投资资讯</a></span></li>
                        <li><span><a href="javascript:;">微投资</a></span></li>
                        <li><span><a href="javascript:;">高端门窗加盟</a></span></li>
                        <li><span><a href="javascript:;">零和外汇</a></span></li>
                        <li><span><a href="javascript:;">银收宝</a></span></li>
                        <li><span><a href="javascript:;">食饼筒</a></span></li>
                    </ul>
                </div>
                <div class="bottom-box clearfix">
                    <div class="left-box">
                        <ul>
                            <li class="li-1">
                                <a href="javascript:;"></a>
                            </li>
                            <li class="li-2">
                                <a href="javascript:;"></a>
                            </li>
                            <li class="li-3">
                                <a href="javascript:;"></a>
                            </li>
                            <li class="li-4">
                                <a href="javascript:;"></a>
                            </li>
                            <li class="li-5">
                                <a href="javascript:;"></a>
                            </li>
                        </ul>
                        <span class="copyright">{{copyright}}</span>
                        <span class="tip">{{anno}}</span>
                    </div>
                    <div class="right-box">
                        <div>
                            <span class="span-1"></span>
                            <span class="span-2"></span>
                            <span class="span-3"></span>
                        </div>
                        <a href="javascript:;" class="service">
                            <i></i>在线客服</a>
                        <span class="tel">客服热线：{{phone}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vueFooter",
    data() {
        return {
            showId: 1,
        }
    },
    props: {
        copyright: '',
        anno: '',
        phone: '',
    },
    methods: {
        showUl(i) {
            this.showId = i;
        }
    }
}
</script>

<style lang="scss">
.footer {
    text-align: center;
    background-color: #2a3052;
    ul {
        li {
            display: inline-block;
        }
    }
    ul.link-ul {
        li {
            font-size: 16px;
            color: #fff;
            margin-left: 58px;
            line-height: 68px;
            cursor: pointer;
        }
        li:first-child {
            margin-left: 0;
        }
    }
    ul.link-c-ul {
        width: 100%;
        height: 95px;
        border: 1px solid #fff;
        border-radius: 10px;
        position: relative;
        font-size: 0;
        display: table;
        margin-bottom: 36px;
        i.link-i {
            position: absolute;
            width: 0;
            height: 0;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
            top: -10px;
            left: 26px;
        }
        li {
            width: 16.6%;
            height: 95px;
            display: inline-block;
            span {
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    ul.honor {
        li {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            i {
                width: 70px;
                height: 95px;
                display: inline-block;
                vertical-align: middle;
                background: url(/static/images/footer_prize.png) 0 0 no-repeat;
            }
        }
        .li-2 i {
            background-position-x: -80px;
        }
        .li-3 i {
            background-position-x: -160px;
        }
        .li-4 i {
            background-position-x: -240px;
        }
        .li-5 i {
            background-position-x: -320px;
        }
        .li-6 i {
            background-position-x: -400px;
        }
        li:hover i {
            background-position-y: -98px;
        }
    }
    ul.cooperate {
        i.link-i {
            left: 151px;
        }
        li {
            width: 11.1%;
            display: table-cell;
            vertical-align: middle;
            position: relative;
            span, i {
                width: 54px;
                height: 54px;
                opacity: 0;
                background: url(/static/images/footer_partners.png) 0 -55px no-repeat;
                position: absolute;
                top: 22px;
                left: 34px;
                z-index: 2;
            }
            span:hover {
                // background-position-y: -55px;
                transition: all 0.5s;
                opacity: 1;
            }
            i {
                opacity: 1;
                display: inline-block;
                background-position-y: -1px;
                z-index: 1;
            }
        }
        .icon2 {
            span, i {
                background-position-x: -85px;
            }
        }
        .icon3 {
            span, i {
                background-position-x: -168px;
            }
        }
        .icon4 {
            span, i {
                background-position-x: -252px;
            }
        }
        .icon5 {
            span, i {
                background-position-x: -336px;
            }
        }
        .icon6 {
            span, i {
                background-position-x: -420px;
            }
        }
        .icon7 {
            span, i {
                background-position-x: -504px;
            }
        }
        .icon8 {
            span, i {
                background-position-x: -588px;
            }
        }
        .icon9 {
            span, i {
                background-position-x: -673px;
            }
        }
        
    }
    ul.link {
        i.link-i {
            left: 279px;
        }
        li {
            width: 10%;
            span a {
                    
                color: #fff;
                font-size: 14px;
                line-height: 95px;
            }
        }
    }
    .bottom-box {
        padding-bottom: 30px;
        .left-box {
            float: left;
            text-align: left;
            ul {
                font-size: 0;
                margin-bottom: 16px;
                li {
                    width: 26px;
                    height: 26px;
                    display: inline-block;
                    margin-right: 10px;
                    a {
                        width: 100%;
                        height: 100%;
                        background: url(/static/images/common_icon.png) -10px -217px
                            no-repeat;
                        display: inline-block;
                    }
                }
                .li-2 a {
                    background-position-x: -46px;
                }
                .li-3 a {
                    background-position-x: -81px;
                }
                .li-4 a {
                    background-position-x: -116px;
                }
                .li-5 a {
                    background-position-x: -152px;
                }
            }
            span {
                font-size: 14px;
                color: #fff;
                line-height: 1;
                display: block;
            }
            span.copyright {
                margin-bottom: 16px;
            }
        }
        .right-box {
            float: right;
            div {
                margin-bottom: 20px;
                span {
                    width: 91px;
                    height: 41px;
                    display: inline-block;
                    background: url(/static/images/common_icon.png) -10px -270px
                        no-repeat;
                }
                .span-2 {
                    width: 114px;
                    margin-left: 34px;
                    background-position-x: -135px;
                }
                .span-3 {
                    width: 108px;
                    margin-left: 25px;
                    background-position-x: -274px;
                }
            }
            a.service {
                width: 95px;
                height: 28px;
                line-height: 28px;
                // display: inline-block;
                margin-right: 48px;
                font-size: 14px;
                color: #fff;
                background-color: #e98024;
                border-radius: 5px;
                float: right;
            }
            span.tel {
                font-size: 14px;
                color: #fff;
                line-height: 28px;
            }
        }
    }
}
</style>
