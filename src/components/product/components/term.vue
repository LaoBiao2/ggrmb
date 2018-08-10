<template>
    <div class="product-box term">
        <div class="nav-box">
            <ul>
                <li class="active">买入</li>
                <li>卖出</li>
                <li>建仓</li>
                <li>手数</li>
                <li>合约单位</li>
                <li>盎司</li>
                <li>点</li>
                <li>最小波幅</li>
                <li>保证金</li>
                <li>强制平仓</li>
                <li>T+0</li>
                <li>点差</li>
                <li>过夜利息</li>
                <li>持仓过夜</li>
                <li>杠杆比例</li>
                <li>挂单</li>
                <li>止损</li>
                <li>止盈</li>
            </ul>
        </div>
        <happy-scroll class="tab-content"  scroll-top="0">
            <ul>
                <li class="active">
                    <i></i><b class="title-b">买入</b>
                    <p>也叫买升或做多，表示判断价格上升，买入一定数量的手数。</p>
                </li>
                <li>
                    <i></i><b class="title-b">2杠杆比例</b>
                    <p>杠杆比例是指实际价 值与投入金额之间的比例。杠杆比例=实际价值÷投入金额。假设伦敦金1000美元/盎司，那么1手(对应100盎司)的价值是100,000美元，1手的保证金固定为1,000美元，若满仓操作，此时杠杆比例为：100,000美元/1,000美元=100，表示实际价值为投入金额的100倍，也就是俗称的100倍杠杆。</p>
                </li>
                <li>
                    <i></i><b class="title-b">3挂单</b>
                    <p>挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。</p>
                </li>
                <li>
                    <i></i><b class="title-b">4过夜利息</b>
                    <p>是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。</p>
                </li>
                <li>
                    <i></i><b class="title-b">5盎司</b>
                    <p>伦敦金/银交易中的盎司是指金衡盎司， 专用于作为贵金属商品的计量单位。1金衡盎司=31.034768克。</p>
                </li>
                <li>
                    <i></i><b class="title-b">6杠杆比例</b>
                    <p>杠杆比例是指实际价 值与投入金额之间的比例。杠杆比例=实际价值÷投入金额。假设伦敦金1000美元/盎司，那么1手(对应100盎司)的价值是100,000美元，1手的保证金固定为1,000美元，若满仓操作，此时杠杆比例为：100,000美元/1,000美元=100，表示实际价值为投入金额的100倍，也就是俗称的100倍杠杆。</p>
                </li>
                <li>
                    <i></i><b class="title-b">7挂单</b>
                    <p>挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。</p>
                </li>
                <li>
                    <i></i><b class="title-b">8过夜利息</b>
                    <p>是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。</p>
                </li>
                <li>
                    <i></i><b class="title-b">9挂单</b>
                    <p>挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。</p>
                </li>
                <li>
                    <i></i><b class="title-b">108过夜利息</b>
                    <p>是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。</p>
                </li>
                <li>
                    <i></i><b class="title-b">11盎司</b>
                    <p>伦敦金/银交易中的盎司是指金衡盎司， 专用于作为贵金属商品的计量单位。1金衡盎司=31.034768克。</p>
                </li>
                <li>
                    <i></i><b class="title-b">12杠杆比例</b>
                    <p>杠杆比例是指实际价 值与投入金额之间的比例。杠杆比例=实际价值÷投入金额。假设伦敦金1000美元/盎司，那么1手(对应100盎司)的价值是100,000美元，1手的保证金固定为1,000美元，若满仓操作，此时杠杆比例为：100,000美元/1,000美元=100，表示实际价值为投入金额的100倍，也就是俗称的100倍杠杆。</p>
                </li>
                <li>
                    <i></i><b class="title-b">13挂单</b>
                    <p>挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。</p>
                </li>
                <li>
                    <i></i><b class="title-b">14过夜利息</b>
                    <p>是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。</p>
                </li>
                <li>
                    <i></i><b class="title-b">15盎司</b>
                    <p>伦敦金/银交易中的盎司是指金衡盎司， 专用于作为贵金属商品的计量单位。1金衡盎司=31.034768克。</p>
                </li>
                <li>
                    <i></i><b class="title-b">16杠杆比例</b>
                    <p>杠杆比例是指实际价 值与投入金额之间的比例。杠杆比例=实际价值÷投入金额。假设伦敦金1000美元/盎司，那么1手(对应100盎司)的价值是100,000美元，1手的保证金固定为1,000美元，若满仓操作，此时杠杆比例为：100,000美元/1,000美元=100，表示实际价值为投入金额的100倍，也就是俗称的100倍杠杆。</p>
                </li>
                <li>
                    <i></i><b class="title-b">17挂单</b>
                    <p>挂单是指设定一个理想的交易价格，当最新市场价到达客户设定的价格时，系统便会自动建仓。挂单的优势在于客户可以在理想的价位建仓，由客户自行选定交易品种、手数和目标成交价位，无需长期留意市况或开启交易平台。</p>
                </li>
                <li>
                    <i></i><b class="title-b">18过夜利息</b>
                    <p>是指建仓当日并未平仓，持仓到达第二天的订单，就会产生过夜利息。买入建仓和卖出建仓都需要按照当天的收市价、相应的利率和过夜天数交付过夜利息。买入建仓的订单过夜利率是2.25%，卖出建仓的订单过夜利率是0.75%。</p>
                </li>
            </ul>
        </happy-scroll>
    </div>
</template>

<script>
import { HappyScroll } from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
export default {
    name:'term',
    components: {HappyScroll}
}
</script>

<style lang="scss">
.product-box.term {
    width: 880px;
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
                transition: all .3s;
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
        ul {
            width: 815px;
            margin: 0 auto;
            font-size: 0;
            // margin: 10px 0 0 38px;
            padding-top: 10px;
            li {
                width: 100%;
                border-radius: 10px;
                border: 1px solid #b1b1b1;
                padding: 20px 36px 32px 24px;
                box-sizing: border-box;
                margin-bottom: 26px;
                display: block;
                transition: all .3s;
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

