<template>
    <div class="product-box term">
        <div class="nav-box">
            <ul>
                <li class="nav-li" v-for="(dataLi, key, index) in dataList" v-bind:class="{active:index==dataId}" @click="test(index)" v-bind:key="key">{{key}}</li>
            </ul>
        </div>
        <div class="tab-content wrapper" ref="wrapper">
            <ul>
                <li class="tab-li" v-for="(dataLi, key, index) in dataList" v-bind:class="{active:index==dataId}" v-bind:key="key">
                    <i></i>
                    <b class="title-b">{{key}}</b>
                    <p>{{dataLi}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { HappyScroll } from 'vue-happy-scroll'
// import 'vue-happy-scroll/docs/happy-scroll.css'
import BScroll from 'better-scroll'
export default {
    name: 'term',
    created() {
        this.$nextTick(() => {
            this._initScroll()
            // console.log(typeof this._initScroll())

        })
        // this.$nextTick(() => {
        //     this.scroll = new BScroll(this.$refs.wrapper);
        // });
    },

    data() {
        return {
            dataId: "0",
            dataList: {
                '买入': '也叫买升或做多，表示判断价格上升，买入一定数量的手数。',
                '卖出': '也叫买跌或做空，表示判断价格下跌，卖出一定数量的手数。',
                '建仓': '也叫开仓，指买入或卖出一定数量的手数。',
                '手数': '是指每笔交易中所买卖的伦敦金/银数量。伦敦金1手等于100盎司，伦敦银1手等于2500盎司。即伦敦金0.1手等于10盎司，按比例计算。',
                '合约单位': '是指交易1手伦敦金/银中所买卖的数量。1手伦敦金的合约单位是100盎司， 1手伦敦银的合约。单位是2500盎司。',
                '盎司': '伦敦金/银交易中的盎司是指金衡盎司， 专用于作为贵金属商品的计量单位。1金衡盎司=31.034768克。',
                '点': '“1点”是指伦敦金/银价格的0.01美元，即当伦敦金/银价格升或跌了0.05美元/盎司时，相当于升或跌了5点。',
                '最小波幅': '伦敦金每跳动一次至少升或跌1个点，代表每盎司的伦敦金价格升或跌了0.1美元。伦敦银每跳动一次等于升或跌了1个点，代表每盎司的伦敦银价格升或跌了0.01美元。',
                '保证金': '开仓时必须投入的抵押资金，1手伦敦金/伦敦银的保证金是1000美元。 在金盛金银（GGPM）单笔交易的最小手数是0.1手，所以，交易伦敦金/银单笔最低保证金只需100美元。',
                '强制平仓': '当投资者保证金水平达到或低于20%，为防止风险进一步扩大，系统会执行强制平仓。',
                'T+0': '表示建仓当天就可以平仓，T+1表示建仓后第二天（即一天之后）才可以平仓。T后面的数字表示建仓之后多少天可以平仓。交易平台建仓后可以立即平仓，因此我们属于T+0交易。比如股票不能在买升当天卖出，要等到第二天才可以卖出，属于T+1交易。',
                '点差': '是指交易平台中买入价和卖出价的差额，也就是建仓的交易成本，在建仓时公司会收取点差费用。伦敦金标准点差0.5美元/盎司，伦敦银标准点差0.04美元/盎司。',
                '过夜利息': '是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。',
                '持仓过夜': '过夜并不是以凌晨12点来划分的。建仓后持仓至翌日凌晨4:59时，就会产生过夜利息。时间均以系统显示的记录为准。',
                '杠杆比例': '杠杆比例是指实际价 值与投入金额之间的比例。杠杆比例=实际价值÷投入金额。假设伦敦金1000美元/盎司，那么1手(对应100盎司)的价值是100,000美元，1手的保证金固定为1,000美元，若满仓操作，此时杠杆比例为：100,000美元/1,000美元=100，表示实际价值为投入金额的100倍，也就是俗称的100倍杠杆。',
                '挂单': '挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。',
                '止损': '止损是指预先为交易单设置平仓价格,当市场价到达设定的止损价时,系统自动对交易单进行平仓，MT4平台中的止损设置用于控制损失。 止损价需要设置在价格的亏损区域。伦敦金/银的止损价需距离当前价格最少300点。',
                '止盈': '止赚（也叫做“获利”），是指预先为交易单设置平仓价格,当市场价到达设定的止赚价时,系统自动对交易单进行平仓，MT4平台中的止赚设置用于锁定盈利，防止因价格变动失去已到达过的盈利。 止赚价需要设置在价格的盈利区域（即买升建仓的止赚价要设在建仓价以上，买跌建仓的止赚价要设在建仓价以下）。伦敦金/银的止赚价需距离当前价格最少300点。'
            }
        }
    },
    methods: {
        _initScroll() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                disableMouse: false,
                disableTouch: true,
                mouseWheel: true,
                probeType: 3
            });
            // this.scroll.scrollTo(0, -500)
        },
        test(i) {
            this.dataId = i;
            var jump = document.getElementsByClassName("tab-li")[i];

            this.scroll.scrollToElement(jump, 1000)
        }
    }
}
</script>

<style lang="scss">
.product-box.term {
    width: 880px;
    background-color: #fff;
    padding: 28px 0 38px;
    .nav-box {
        width: 815px;
        margin: 0 auto;
        font-size: 0;
        ul {
            font-size: 0;
            li {
                display: inline-block;
                height: 44px;
                line-height: 44px;
                border-radius: 10px;
                border: 1px solid #b1b1b1;
                font-size: 18px;
                color: #999;
                padding: 0 20px;
                cursor: pointer;
                margin: 0 12px 12px 0;
                transition: all 0.3s;
            }
            li.active,
            li:hover {
                background-color: #e98024;
                border-color: #e98024;
                color: #fff;
            }
        }
    }
    .tab-content {
        height: 620px;
        overflow: hidden;
        margin-top: 18px;
        .cs {
            height: 500px;
        }
        ul {
            width: 815px;
            margin: 0 auto;
            font-size: 0;
            // margin: 10px 0 0 38px;
            padding: 10px 0;
            li {
                width: 100%;
                border-radius: 10px;
                border: 1px solid #b1b1b1;
                padding: 20px 36px 32px 24px;
                box-sizing: border-box;
                margin-bottom: 26px;
                display: block;
                transition: all 0.3s;
                background-color: #f9f9f9;
                i {
                    width: 2px;
                    height: 22px;
                    background-color: #2e8836;
                    float: left;
                    margin: 0 6px 0 0;
                }
                b {
                    display: block;
                    font-size: 20px;
                    color: #666;
                    line-height: 22px;
                    margin-bottom: 14px;
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
        }
    }
}
</style>

