<template>
    <div class="header-box">
        <div class="header-top">
            <div class="content">
                <div class="header-top-box">
                    <div class="header-time">
                        <span class="date">2018-08-02</span>
                        <span class="area">13:36:25 GMT</span>
                    </div>
                    <a href="javascript:;" class="service-a">在线客服</a>
                    <div class="language">
                        <i class="left-i"></i>
                        <span>简体中文</span>
                        <i class="right-i"></i>
                        <div class="lang-chose">
                            <span>简体中文</span>
                            <span>繁体中文</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="content clearfix">
                <div class="header-box">
                    <div class="logo"><img :src=logoUrl alt=""></div>
                    <a href="javascript:;" class="a-register">注册</a>
                    <ul>
                        <li v-for="(val, index) in navParent" v-bind:class="{active:index==dataId}" v-bind:key="index" @click="test(index)">
                            <a class="fir-a" :href="val.url">{{val.name}}</a>
                            <div class="sec-menu">
                                <span v-if="val.id == val2.pid" v-for="(val2, index2) in navChild" v-bind:key="index2">
                                    <router-link :to="val2.url">{{val2.name}}</router-link>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vueHeader",
    data() {
        return {
            dataId: '0',
        }
    },
    props: {
        logoUrl: '',
        navParent: '',
        navChild: '',
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
            var offsetTop = document.querySelector('.header').offsetTop;

            if (scrollTop <= 16) {
                offsetTop = 26 - Number(scrollTop);
                document.querySelector('.header').style.top = offsetTop + 'px';
            } else {
                document.querySelector('.header').style.top = '0px';
            }
        },
        test(i) {
            this.dataId = i;
        },
    }
}
</script>

<style lang="scss">
.header-top {
    width: 100%;
    height: 26px;
    line-height: 26px;
    background-color: #15212d;
    color: #fff;
    font-size: 14px;
    // position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    .header-top-box {
        width: auto;
        float: right;
        height: 26px;
        span {
            line-height: 26px;
            display: block;
            float: left;
        }
        .area {
            margin-left: 16px;
        }
        .service-a {
            color: #fff;
            line-height: 26px;
            margin: 0 44px 0 48px;
            display: block;
            float: left;
        }
        .header-time,
        .language {
            float: left;
        }
        .language {
            position: relative;
            .lang-chose {
                position: absolute;
                top: 26px;
                left: 50%;
                transform: translateX(-50%) translateY(-100%);
                z-index: -1;
                width: 70px;
                height: 55px;
                border: 1px solid #15212d;
                color: #15212d;
                transition: all 0.3s;
                span {
                    width: 100%;
                    line-height: 26px;
                    display: block;
                    text-align: center;
                }
                span:first-child {
                    border-bottom: 1px solid #15212d;
                }
            }
        }
        .language:hover .lang-chose {
            transform: translateX(-50%) translateY(0);
        }
    }
}

.header {
    width: 100%;
    height: 76px;
    line-height: 76px;
    position: fixed;
    top: 26px;
    left: 0;
    z-index: 99;
    border-bottom: 4px solid #e98024;
    background-color: #2a3052;
    .header-box {
        height: 76px;
        .logo {
            width: 278px;
            height: 53px;
            margin: 11px 0;
            float: left;
            img {
                width: 100%;
            }
        }
        a.a-register {
            width: 78px;
            height: 38px;
            float: right;
            display: block;
            color: #fff;
            font-size: 18px;
            background-color: #2e8836;
            border-radius: 5px;
            text-align: center;
            line-height: 38px;
            margin: 18px 0 0 23px;
        }
        ul {
            height: 76px;
            float: right;
            font-size: 0;
            li {
                height: 76px;
                line-height: 76px;
                display: inline-block;
                position: relative;
                a.fir-a {
                    padding: 0 27px;
                    color: #fff;
                    font-size: 18px;
                }
                .sec-menu {
                    // display: none;
                    width: 100px;
                    max-height: 0;
                    overflow: hidden;
                    position: absolute;
                    top: 76px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #fff;
                    text-align: center;
                    transition: all 0.5s;
                    span,
                    span a {
                        height: 36px;
                        display: block;
                        font-size: 16px;
                        line-height: 36px;
                        cursor: pointer;
                        color: #333;
                    }
                }
            }
            li:hover {
                a {
                    color: #e98024;
                }
                .sec-menu {
                    // display: block;
                    max-height: 200px;
                    transform: translateX(-50%);
                    span:hover,
                    span a:hover {
                        background-color: #2a3052;
                        color: #fff;
                    }
                }
            }
            li.active {
                a {
                    color: #e98024;
                }
            }
        }
    }
}
</style>
