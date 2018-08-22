<template>
    <div class="about-box introduce">
        <div class="introduce-box">
            <i></i>
            <p>
                金盛环球金融集团（Golden Grand Global）,成立于上世纪80年代，作为国际资深金融机构，为重点布局亚太地区一站式融合交易平台战略目标， 于2003年率先在香港设立亚太总部，并随即在新加坡、日本、韩国、越南等地区建立分支机构。 10多年的时间，已为近千万名亚太各国投资者开启全球化投资时代！
                <br/>金盛金银（ggpm）是金盛金融旗下现货黄金白银专业投资品牌，金盛贵金属业务接受纽西兰FSP监管，客户资金委托第三方银行监管， 双重保障客户投资安全，打造一站式金盛贵金属投资服务平台。
                <br/>通过金盛金银（ggpm），您可以轻松享受来自全球市场公平透明的报价， 以及优质稳定的交易执行。我们还为您提供专业独到的金盛贵金属投资专家评论、 海量的业界资讯先进的交易工具和丰富的学习资源。无论您的交易经验如何， 金盛金银（ggpm）都将有针对性地帮助您在活跃的全球投资市场中更好地交易， 是您投资历程中的可靠伙伴。
            </p>
        </div>
        <div class="about-content">
            <ul>
                <li class="clearfix li-1">
                    <span class="span-i">
                        <i></i>
                    </span>
                    <b class="title-b">贵金属投资标的</b>
                    <p>金盛金银（GGPM）为投资者提供现货黄金（伦敦金）和现货白银（伦敦银）两大贵金属投资产品， 投资者不但可以通过差价投机交易获取收益，同样也是投资、对冲、套利的理想选择。</p>
                </li>
                <li class="clearfix li-2">
                    <span class="span-i">
                        <i></i>
                    </span>
                    <b class="title-b">公正权威报价</b>
                    <p>金盛金银（GGPM）为全球投资者提供一个公平透明的投资平台， 产品报价全部采用国际最权威的数据报价，每一笔报价均可进行历史查询 ，金盛贵金属交易编码银行可查，确保数据报价公正透明</p>
                </li>
                <li class="clearfix li-3">
                    <span class="span-i">
                        <i></i>
                    </span>
                    <b class="title-b">业界风向标杆</b>
                    <p>金盛金银（GGPM）作为金盛金融集团重要分支， 致力提供最权威报价，最先进交易系统，最稳定交易执行，最专业资讯分析， 秉承集团30多金融服务理念，打造业内独特的金盛贵金属交易平台。</p>
                </li>
                <li class="clearfix li-4">
                    <span class="span-i">
                        <i></i>
                    </span>
                    <b class="title-b">高效稳定平台</b>
                    <p>金盛金银（GGPM）采用国际通用的MT4交易平台，90%交易量的覆盖率，强大服务器群确保数据及时稳定， 交易闪电成交，自定义功能简单易操作PC端和手机移动端多交易系统，深受投资者好评。</p>
                </li>
                <li class="clearfix li-5">
                    <span class="span-i">
                        <i></i>
                    </span>
                    <b class="title-b">平民投资门槛</b>
                    <p>投资者可在金盛金银（GGPM）免费开立投资账户，采用1：100倍杠杆交易， 仅需100美金即可开始贵金属投资交易， 同时网站提供免费策略服务，使得投资者能够更好的获取最大投资回报。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import slider from 'vue-concise-slider'
export default {
    name: 'introduce',
    data() {
        return {
            //图片列表[arr]
            pages: [
                {
                    title: '',
                    style: {
                        background: 'url(src/assets/images/about/clogo_1.jpg)'
                    }
                },
                {
                    title: '',
                    style: {
                        background: 'black'
                    }
                },
                {
                    title: 'slide3',
                    style: {
                        background: '#4bbfc3',
                    },
                },
                {
                    title: '',
                    style: {
                        background: 'red'
                    }
                },
                {
                    title: '',
                    style: {
                        background: 'black'
                    }
                },
                {
                    title: 'slide3',
                    style: {
                        background: '#4bbfc3',
                    },
                },
                {
                    title: '',
                    style: {
                        background: 'red'
                    }
                },
                {
                    title: '',
                    style: {
                        background: 'black'
                    }
                },
                {
                    title: 'slide3',
                    style: {
                        background: '#4bbfc3',
                    },
                },
                {
                    title: '',
                    style: {
                        background: 'red'
                    }
                },
                {
                    title: '',
                    style: {
                        background: 'black'
                    }
                },
                {
                    title: 'slide3',
                    style: {
                        background: '#4bbfc3',
                    },
                }
            ],
            //滑动配置[obj]
            sliderinit: {
                currentPage: 0,//当前页码
                thresholdDistance: 500,//滑动判定距离
                thresholdTime: 100,//滑动判定时间
                //   autoplay:1000,//自动滚动[ms]
                loop: true,//循环滚动
                direction: 'horizontal',//方向设置，水平滚动
                infinite: 12,//无限滚动前后遍历数
                slidesToScroll: 1,//每次滑动项数
            }
        }
    },
    components: {
        slider
    }
}
</script>

<style lang="scss">
.about-box.introduce {
    // width: 886px;
    .introduce-box {
        position: relative;
        width: 882px;
        margin: 0 auto;
        padding: 37px 45px 37px 107px;
        box-sizing: border-box;
        border-radius: 10px;
        -webkit-box-shadow: 1px 1px 18px #b7b7b7;
        -moz-box-shadow: 1px 1px 18px #b7b7b7;
        box-shadow: 1px 1px 18px #b7b7b7;
        background-color: #fff;
        i {
            width: 141px;
            height: 142px;
            display: inline-block;
            background: url(/static/images/about/introduce_icon.png) no-repeat
                center;
            position: absolute;
            left: -46px;
            top: 50%;
            transform: translateY(-50%);
        }
        p {
            font-size: 16px;
            color: #666;
            line-height: 40px;
        }
    }
    .about-content {
        margin-top: 52px;
        ul {
            width: 884px;
            margin: 0 auto;
            font-size: 0;
            li {
                width: 100%;
                border-radius: 10px;
                padding: 18px 24px 18px 27px;
                box-sizing: border-box;
                margin-bottom: 16px;
                display: block;
                transition: all 0.3s;
                background-color: #fff;
                .span-i {
                    width: 125px;
                    height: 118px;
                    border-radius: 10px;
                    float: left;
                    margin-right: 22px;
                    -webkit-box-shadow: 1px 1px 18px #eb5c28;
                    -moz-box-shadow: 1px 1px 18px #eb5c28;
                    box-shadow: 1px 1px 18px #eb5c28;
                    background-color: #eb5c28;
                    i {
                        width: 60px;
                        height: 60px;
                        display: block;
                        margin: 29px auto;
                        background: url(/static/images/about/about_icon.png) 0 -182px
                            no-repeat;
                    }
                }
                b {
                    display: block;
                    font-size: 18px;
                    color: #333;
                    line-height: 22px;
                    margin-bottom: 12px;
                }
                p {
                    // float: left;
                    display: block;
                    line-height: 28px;
                    font-size: 16px;
                    color: #666;
                }
            }
            li.active,
            li:hover {
                -webkit-box-shadow: 1px 1px 18px #b7b7b7;
                -moz-box-shadow: 1px 1px 18px #b7b7b7;
                box-shadow: 1px 1px 18px #b7b7b7;
            }
            .li-2 {
                .span-i {
                    background-color: #53ad38;
                    -webkit-box-shadow: 1px 1px 18px #53ad38;
                    -moz-box-shadow: 1px 1px 18px #53ad38;
                    box-shadow: 1px 1px 18px #53ad38;
                    i {
                        background-position-x: -80px;
                    }
                }
            }
            .li-3 {
                .span-i {
                    background-color: #3458de;
                    -webkit-box-shadow: 1px 1px 18px #3458de;
                    -moz-box-shadow: 1px 1px 18px #3458de;
                    box-shadow: 1px 1px 18px #3458de;
                    i {
                        background-position-x: -160px;
                    }
                }
            }
            .li-4 {
                .span-i {
                    background-color: #7d31cb;
                    -webkit-box-shadow: 1px 1px 18px #7d31cb;
                    -moz-box-shadow: 1px 1px 18px #7d31cb;
                    box-shadow: 1px 1px 18px #7d31cb;
                    i {
                        background-position-x: -240px;
                    }
                }
            }
            .li-5 {
                .span-i {
                    background-color: #2c40b4;
                    -webkit-box-shadow: 1px 1px 18px #2c40b4;
                    -moz-box-shadow: 1px 1px 18px #2c40b4;
                    box-shadow: 1px 1px 18px #2c40b4;
                    i {
                        background-position-y: -260px;
                    }
                }
            }
        }
    }
}
</style>

