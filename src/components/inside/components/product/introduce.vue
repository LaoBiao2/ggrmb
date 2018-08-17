<template>
    <div>
        <div class="product-box introduce">
            <div class="p_box first_box">
                <i></i>
                <b></b>
                <h4>什么是伦敦金</h4>
                <div class="txt">
                    伦敦金又称现货黄金或国际现货黄金，为伦敦国际金融期货交易所提供的一种贵金属保证金交易方式， 因起源于伦敦而得名，在国际市场上已有超过300年的历史。由于投资者可不必进行实物金的提取， 省却运输、保管、检验、鉴定等步骤即可于各大市场进行交易买卖； 其买入价与卖出价之间的差额要小于实金买卖的差价，大大降低投资成本，因此为市场上最热门的黄金投资方式。 目前世界上最主要的黄金市场在伦敦、苏黎世、纽约和香港。香港黄金市场在时差上刚好填补了纽约、 芝加哥收市和伦敦开市前的空档，把亚、欧、美的黄金交易市场整合成连贯的全球市场。
                </div>
            </div>
            <div class="p_box second_box">
                <i></i>
                <b></b>
                <h4>什么是伦敦银</h4>
                <div class="txt">
                    伦敦银又称现货白银或国际现货白银，与伦敦金一样，都是可以24小时买卖、即期交易、为伦敦国际金融期货交易所 提供的一种投资商品、一种贵金属保证金交易方式。 全球主要的交易市场包括：伦敦、苏黎世、纽约、芝加哥以及香港等地。虽然伦敦仍然是最活跃的实货市场， 但现时多数交易都以合约（纸白银）的形式于美国COMEX市场完成， 而白银现货价格则由COMEX定出。<br> 现货黄金是一种国际性的投资理财产品，投资者可通过黄金交易服务商的交易平台进行24小时买卖交易。 现货黄金交易是利用资金杠杆原理进行的一种合约式买卖， 计价以美元/盎司为单位，买卖以美元结算。
                </div>
            </div>
            <div class="third_box">
                <div class="item">
                    <h4>
                        <i></i>高价格波幅</h4>
                    <p>黄金价格经常处于较大的波幅之中，每日升跌一般在10至30美元/盎司或以上。</p>
                </div>
                <div class="item">
                    <h4>
                        <i></i>24小时双向交易</h4>
                    <p>现货黄金市场活跃，周一至周五全天候24小时网上交易，随时随地都可进行投资买卖，获利机会多。 上班一族更不用因日间工作错过交易时间而失去创富机会。</p>
                </div>
                <div class="item">
                    <h4>
                        <i></i>交易系统的高稳定</h4>
                    <p>相对于国内的投资交易市场，金盛金银（GGPM）使用的MT4交易平台操作简易且稳定， 经验丰富的专业团队也一直专注于交易平台的稳定性及安全性。</p>
                </div>
                <div class="item">
                    <h4>
                        <i></i>市场资讯透明</h4>
                    <p>现货黄金价格根据国际黄金市场行情，按照国际惯例进行报价， 较难有内幕消息及内幕交易的情况出现，如此透明的市场资讯可让投资者更有效制定投资策略。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Introduce"
};
</script>

<style lang="scss">
.product {
    .fl {
        .introduce {
            width: 880px;
            padding-bottom: 50px;
            .p_box {
                position: relative;
                height: 350px;
                padding: 30px;
                margin-bottom: 50px;
                box-sizing: border-box;
                border-radius: 10px;
                background: #ffffff;
                border: 1px solid #2e8836;
                transition: all 0.3s ease-in-out;
                i {
                    position: absolute;
                    top: 0;
                    left: 45px;
                    display: block;
                    width: 42px;
                    height: 61px;
                    background: url(/static/images/product/product_icon.png)
                        no-repeat;
                }
                b {
                    position: absolute;
                    right: 45px;
                    top: 25px;
                    display: block;
                    width: 31px;
                    height: 27px;
                    // background: url(/static/images/product/product_icon.png) no-repeat -265px 0;
                }
                h4 {
                    font-size: 20px;
                    padding: 0 0 22px 70px;
                }
                .txt {
                    font-size: 16px;
                    color: #666666;
                    line-height: 40px;
                    padding: 10px 35px 0 35px;
                }
            }
            .p_box:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 30px 0 rgba(183, 183, 183, 0.7);
            }
            .first_box {
                i {
                    background-position: 0 0;
                }
                h4 {
                    color: #2e8836;
                    border-bottom: 1px solid #2e8836;
                }
            }
            .second_box {
                border: 1px solid #e98024;
                i {
                    background-position: -51px 0;
                }
                h4 {
                    color: #e98024;
                    border-bottom: 1px solid #e98024;
                }
            }
            .third_box {
                background: #ffffff;
                padding: 50px 50px 12px 58px;
                .item {
                    padding: 0 0 16px 25px;
                    border-bottom: 1px dashed #dadada;
                    margin-bottom: 22px;
                    h4 {
                        position: relative;
                        font-size: 18px;
                        color: #333333;
                        font-weight: bold;
                        margin-bottom: 10px;
                        i {
                            position: absolute;
                            left: -23px;
                            top: 50%;
                            margin-top: -3px;
                            display: block;
                            width: 6px;
                            height: 6px;
                            background: #2e8836;
                            border-radius: 50%;
                        }
                    }
                    p {
                        font-size: 16px;
                        color: #666666;
                        line-height: 28px;
                    }
                }
                .item:last-child {
                    border: 0;
                }
            }
        }
    }
}
</style>
